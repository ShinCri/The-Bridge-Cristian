// Hay tres personas y una barca. La barca aguanta 100Kg.
// El peso de las personas es variable. Ej 1: 50, 60, 100.
// En la barca cabe todo el mundo que no exceda el límite.
// La barca no puede moverse sola. Tiene que transportarla una persona siempre.
// El output son consoles.log. Viaje 1: Viaje persona A y B viajan de orilla 1 a orilla 2. Viaje 2: Persona B viaja de orilla 2 a orilla 1.

function transportriver(a, b, c) {
  const max_weight = 100;
  let river_a = [a, b, c,];
  let river_b = [];
  let boat =

  river_a.sort((x, y) => x-y);

  if(river_a[2]>max_weight) {
    console.log("At least one of the participants exceeds the max. weight.")
    return;
  }



}

//  1 Ordenar array personas
// 2 Enviar al peqieño y completar con el candidato más pesado posible que NO exceda el peso límite de la barca.
// 3 Vuelve el más ligero.
// 1 Ordenar arrays de ambas orillas
// 4 Reescribo punto 2, añadiendo condición "Envío al pequeño y al alguien más. Si no es posible, BUSCO A OTRO CANDIDATO."

