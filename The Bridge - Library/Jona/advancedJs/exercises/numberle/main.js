function getRandomNumber({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  // const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

function getSecretNumberAsArray({ maxNumberLength }) {
  const secretNumberAsArray = [];
  for (let i = 0; i < maxNumberLength; i++) {
    const randomNumber = getRandomNumber({ min: 0, max: 9});
    // const randomNumber = getRandomNumber({ min: 0, max: 10});
    secretNumberAsArray.push(randomNumber);
  }

  // return secretNumberAsArray;
  // 0,1,0,4,4 SN
  // 0,4,4,0,0
  // 0,4,4,0,1
  // 0,4,4,4,1

  // 2,5,5,7,7 SN
  // 2,2,5,5,7
  return secretNumberAsArray;
}

function getHeader({ title }) {
  const header = document.createElement('div');
  header.classList.add('header');
  const h1 = document.createElement('h1');
  h1.innerText = title;
  header.appendChild(h1);
  return header;
}

function getRow({ maxNumberLength }) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < maxNumberLength; j++) {
    const box = document.createElement('div');
    box.classList.add('box');
    row.appendChild(box);
  }

  return row;
}

function getBoard({ maxNumberLength, maxAttempts }) {
  const board = document.createElement('div');
  board.classList.add('board');
  for (let i = 0; i < maxAttempts; i++) {
    const row = getRow({ maxNumberLength });
    board.appendChild(row);
  }

  return board;
}

function getCurrentRow() {
  const rows = document.getElementsByClassName('row');
  const notValidatedRows = [...rows].filter(function (row) {
    const boxes = row.children;
    const validatedRow = [...boxes].find(function (box) {
      const isSameIndexClass = [...box.classList].includes('isSameIndex');
      const isDifferentIndexClass = [...box.classList].includes('isDifferentIndex');
      const isWrongNumberClass = [...box.classList].includes('isWrongNumber');
      return isSameIndexClass || isDifferentIndexClass || isWrongNumberClass;
    });

    return !validatedRow;
  });
  const currentRow = notValidatedRows[0];
  return currentRow;
}

function pressNumericKey(event) {
  const number = event.target.innerText;
  const currentRow = getCurrentRow();
  const currentBoxes = currentRow.children;
  const emptyBoxes = [...currentBoxes].filter(box => !box.innerText);
  emptyBoxes.length && (emptyBoxes[0].innerText = number);
}

function addClass({ classToAdd, box }) {
  box.classList.add(classToAdd);
  const keys = document.getElementsByClassName('key');
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key.innerText === box.innerText) {
      key.classList.add(classToAdd);
      break;
    }
  }
}

function pressEnterKey({ secretNumberAsArray }) {
  const secretNumberAsArrayCopy = [...secretNumberAsArray]; // hago copia porque es un array
  const currentRow = getCurrentRow();
  const boxes = currentRow.children;
  const innerTexts = [...boxes].map(box => box.innerText); // [7, 8, '', '', '']
  const digits = innerTexts.filter(digit => digit); // [7, 8]
  if (digits.length !== secretNumberAsArray.length) {
    return;
  }

  const timesOfEachDigit = {}; // { 0:2, 1:1, 4:2 }
  for (let i = 0; i < secretNumberAsArrayCopy.length; i++) {
    const secretDigit = secretNumberAsArrayCopy[i]; // [0,1,0,4,4]
    const digit = digits[i]; // [0,4,4,4,1]
    // if (timesOfEachDigit[secretDigit]) {
    //   timesOfEachDigit[secretDigit]++;
    // } else {
    //   timesOfEachDigit[secretDigit] = 1;
    // }
    timesOfEachDigit[secretDigit] ? timesOfEachDigit[secretDigit]++ : timesOfEachDigit[secretDigit] = 1;
    const digitAsNumber = parseInt(digit);
    const isSameDigit = secretDigit === digitAsNumber;
    if (isSameDigit) {
      addClass({ classToAdd: 'isSameIndex', box: boxes[i] });
      timesOfEachDigit[digitAsNumber]--;
    }
  }

  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    const isSameIndex = [...box.classList].includes('isSameIndex');
    if (isSameIndex) {
      continue;
    }

    if (timesOfEachDigit[box.innerText]) {
      addClass({ classToAdd: 'isDifferentIndex', box });
      timesOfEachDigit[box.innerText]--;
    } else {
      addClass({ classToAdd: 'isWrongNumber', box });
    }
  }
}

function pressBackspaceKey() {
  const currentRow = getCurrentRow();
  const boxes = currentRow.children;
  const fullBoxes = [...boxes].filter(box => box.innerText);
  const isFirstBox = fullBoxes.length === 0;
  !isFirstBox && (fullBoxes[fullBoxes.length - 1].innerText = '');
}

function getKeyboard({ secretNumberAsArray }) {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const enter = document.createElement('div');
  enter.classList.add('key');
  enter.classList.add('enter');
  enter.innerText = 'ENTER';
  enter.onclick = () => pressEnterKey({ secretNumberAsArray });
  keyboard.appendChild(enter);

  for (let i = 0; i < 10; i++) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerText = i;
    key.onclick = pressNumericKey;
    keyboard.appendChild(key);
  }

  const backspace = document.createElement('div');
  backspace.classList.add('key');
  backspace.onclick = pressBackspaceKey;
  // backspace.innerText = '⇦';
  backspace.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg>';
  keyboard.appendChild(backspace);

  return keyboard;
}

function buildPage({ title, maxNumberLength, maxAttempts, secretNumberAsArray }) {
  const rootElement = document.getElementById('root');
  const container = document.createElement('div');
  container.classList.add('container');

  const header = getHeader({ title });
  container.appendChild(header);

  const board = getBoard({ maxNumberLength, maxAttempts });
  container.appendChild(board);

  const keyboard = getKeyboard({ secretNumberAsArray });
  container.appendChild(keyboard);

  rootElement.appendChild(container);
}

function initPage() {
  const maxNumberLength = 5;
  const maxAttempts = 5;
  const title = 'NUMBERLE';
  const secretNumberAsArray = getSecretNumberAsArray({ maxNumberLength });
  console.log('secretNumberAsArray', secretNumberAsArray); // delete this
  buildPage({ title, maxNumberLength, maxAttempts, secretNumberAsArray });
}

initPage();
