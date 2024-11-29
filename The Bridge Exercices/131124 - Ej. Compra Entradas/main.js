const endpoint = "https://demo.tesserapass.es/api/company/cristian-mastermind/events/4";


async function ticketsinfo() {
  const event_img = document.getElementById("img_header");
  const event_name = document.getElementById("name");
  const event_company = document.getElementById("company");
  const event_schudele = document.getElementById("schudele");
  const event_place = document.getElementById("place");
  const ticketList = document.getElementById("ticket_list");

  const response = await fetch(endpoint);
  const result = await response.json();

  const js_img = result.event.image;
  const js_name = result.event.name;
  const js_company = result.company.name;

  console.log(js_img);

  const mesesEnEspañol = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  const startDate = new Date(result.event.start_at);
  const endDate = new Date(result.event.ends_at);

  const js_start = `${startDate.getDate().toString().padStart(2, '0')} de ${mesesEnEspañol[startDate.getMonth()]} de ${startDate.getFullYear()}`;
  const js_end = `${endDate.getHours()}:${endDate.getMinutes().toString().padStart(2, '0')}`;
  const js_schudele = js_start + "  " + js_end;

  const js_place = result.event.address;

  
  event_img.setAttribute("src", js_img);
  event_name.innerHTML = js_name;
  event_company.innerHTML = js_company;
  event_schudele.innerHTML = js_schudele;
  event_place.innerHTML = js_place;

  
  const maxTicketsForOrder = result.event?.max_tickets_for_order || 5;
  for (let i = 1; i <= maxTicketsForOrder; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    ticketList.appendChild(option);
  }
}

let currentProductId = 0;


async function makeOrder() {
  const orderEndpoint = `${endpoint}/orders`;


  const fullName = document.getElementById("full_name").value;
  const email = document.getElementById("email").value;
  const emailConfirm = document.getElementById("email_confirm").value;
  const ticketCount = document.getElementById("ticket_list").value;

  if (email !== emailConfirm) {
    alert("El correo electrónico no coincide con la confirmación.");
    return;
  }


  const orderData = {
    order: {
      full_name: fullName,
      email: email,
      rrpp: "",
      total_price: 0,
      confirmed_email: emailConfirm
    },
    tickets: Array.from({ length: ticketCount }, () => ({
      product_id: 4,
      full_name: fullName,
      email: email
    }))
    
  };


  const username = "cristian@demo.com";
  const password = "password";
  const authHeader = "Basic " + btoa(`${username}:${password}`);

  try {
    const response = await fetch(orderEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authHeader
      },
      body: JSON.stringify(orderData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error en la respuesta del servidor:", errorText);
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();

    if (result.checkout.payment_intent === "FREE_EVENT") {
      alert("Pedido realizado con éxito. Este es un evento gratuito.");
      document.getElementById("form_data").reset();
      console.log("Detalles del pedido:", result.checkout);
    } else if (result.checkout.url) {
      alert("Redirigiendo a la pasarela de pago...");
      window.location.href = result.checkout.url;
    } else {
      alert("Pedido realizado, pero no se puede completar el pago.");
    }
  } catch (error) {
    console.error("Error al realizar el pedido:", error);
    alert("Hubo un error al procesar el pedido.");
  }
}

ticketsinfo();
document.getElementById("submit").addEventListener("click", makeOrder);

