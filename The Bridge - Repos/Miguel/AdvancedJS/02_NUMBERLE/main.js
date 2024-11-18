function getNumberle(){
  const numberle = [];
  for(let i=0; i<5; i++){
    numberle.push(getRandomInt(1,10));
  }
  return numberle;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function create_panels(root_id){

  const header_div = document.createElement('div');
  root_id.appendChild(header_div);
  header_div.setAttribute('class', 'header');
  header_div.setAttribute('id', 'header');

  const main_div = document.createElement('div');
  root_id.appendChild(main_div);
  main_div.setAttribute('class', 'main');
  main_div.setAttribute('id', 'main');

  const keyboard_div = document.createElement('div');
  root_id.appendChild(keyboard_div);
  keyboard_div.setAttribute('class', 'keyboard');
  keyboard_div.setAttribute('id', 'keyboard');

}

function set_title(numberle){
  const header_div = document.getElementById('header');
  const title = document.createElement('h1');
  title.innerText = numberle;
  header_div.appendChild(title);
  const hr = document.createElement('hr');
  header_div.appendChild(hr);
}

function set_keyboard(){
  // Crear elemento enter + return + numeros del 0 al 9.
  // Catch keyboard_div
  const keyboard_div = document.getElementById('keyboard');

  // Create Enter Button. OK.
  const enter_button = document.createElement('button');
  enter_button.setAttribute('type','button');
  enter_button.setAttribute('class','enter');
  keyboard_div.appendChild(enter_button);
  enter_button.innerText = 'Enter';

  // Create loop for numbers. OK
  for(let i=0; i<=9; i++){
    set_button(i);
  }

  // Create Return Button. OK.
  const return_button = document.createElement('button');
  return_button.setAttribute('type','button');
  return_button.setAttribute('class','return');
  keyboard_div.appendChild(return_button);
  return_button.innerText = 'Return';


}

function set_button(i){
  const keyboard_div = document.getElementById('keyboard');
  const number_button = document.createElement('button');
  number_button.setAttribute('type','button');
  number_button.setAttribute('class',i);
  keyboard_div.appendChild(number_button);
  number_button.classList.add('number');
  number_button.innerText = i;
}
// Create a set of 5 squares lined-up.
function set_square_line(matrix_div){
  for(let i=0; i<25; i++){
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    matrix_div.appendChild(square);
  }
}

// Create a set of 5 sets of squares.
function set_matrix(){
  const main_div = document.getElementById('main');
  const matrix_div = document.createElement('div');
  matrix_div.setAttribute('class', 'matrix');
  main_div.appendChild(matrix_div);
  set_square_line(matrix_div);
}

function main(){
  const numberle = getNumberle();
  const root_id = document.getElementById('root');
  create_panels(root_id);
  set_title(numberle);
  set_keyboard();
  set_matrix();
}

main();