// ---------- Obtención de elementos ----------
// const myElement = document.getElementById('myId');
// console.log('getElementById(myId)', myElement);

// const pElements = document.getElementsByTagName('p');
// console.log('getElementsByTagName(p)', pElements);

// const superElements = document.getElementsByClassName('super');
// console.log('getElementsByClassName(super)', superElements);

// const notSuperElements = document.getElementsByClassName('notSuper');
// console.log('getElementsByClassName(notSuper)', notSuperElements);

// const queryElement = document.querySelector('p.super');
// // solo el primer elemento que encuentre
// console.log('querySelector(p.super-class)', queryElement);

// const allElements = document.querySelectorAll('p.super');
// // todos los elementos que encuentre
// console.log(allElements);


// ---------- Modificación de elementos ----------
// const emptyDiv = document.getElementById('emptyDiv');

// emptyDiv.innerText = 'Escribo en el div vacio';
// emptyDiv.innerHTML = 'Escribo en el div vacio';
// emptyDiv.innerHTML = '<h1>Escribo en el div vacio</h1>';

// emptyDiv.id = 'changedDiv';

// emptyDiv.style.color = 'blue'; // NO HACER

// emptyDiv.setAttribute('accesskey', 'modifiedAccesskey');
// emptyDiv.setAttribute('class', 'nocturne');
// emptyDiv.classList.add('myClass');


// // ---------- Creación/eliminación de elementos ----------
// const nestedDiv = document.createElement('div');
// const nestedP = document.createElement('p');
// nestedP.innerText = 'Soy una P nueva';
// nestedDiv.appendChild(nestedP);
// emptyDiv.appendChild(nestedDiv);

// const firstDiv = document.createElement('div');
// firstDiv.id = 'firstDiv';
// emptyDiv.insertBefore(firstDiv, nestedDiv);

// const replacedP = document.createElement('p');
// replacedP.id = 'replacedP';
// replacedP.innerText = 'Soy otra P';
// emptyDiv.replaceChild(replacedP, firstDiv);
// firstDiv.parentElement.replaceChild(replacedP, firstDiv);

// emptyDiv.removeChild(replacedP);
// replacedP.parentElement.removeChild(replacedP);


// // ---------- Eventos ----------

// // https://developer.mozilla.org/es/docs/Web/Events

// const myButton = document.getElementById('myButtonId');

// function onEventFunction(param) {
//   console.log('onEventFunction', param);
// }

// myButton.onclick = onEventFunction;

// function addEventListenerFunction(param) {
//   console.log('addEventListenerFunction', param);
// }

// myButton.addEventListener('click', addEventListenerFunction);
