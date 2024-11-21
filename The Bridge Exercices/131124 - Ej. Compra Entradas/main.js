const endpoint = "https://demo.tesserapass.es/api/company/cristian-mastermind/events/4"


async function ticketsinfo() {

  const event_img = document.getElementById("img_header");
  const event_name = document.getElementById("name");
  const event_company = document.getElementById("company");

  const response = await fetch(endpoint);
  const result = await response.json();

  const js_img = result.event.image;
  const js_name = result.event.name;
  const js_company = result.company.name;

  event_img.setAttribute('src',js_img);
  event_name.innerHTML = js_name;
  event_company.innerHTML = js_company;

}

ticketsinfo()