const rootElement = document.getElementById('root');
const chars = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const enemyBoard = [
  ['1', '', '2', '2', '', '3', '3', '3', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['4', '4', '4', '4', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['5', '5', '5', '5', '5', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
];
let readyToStart = false;

const myShipsLives = {
  aircraftCarrier: 5,
  vessel: 4,
  submarine: 3,
  cruise: 2,
  boat: 1,
};

const symbolsAsBoatsMap = {
  '1': 'boat',
  '2': 'cruise',
  '3': 'submarine',
  '4': 'vessel',
  '5': 'aircraftCarrier'
};

const enemyShipsLives = { ...myShipsLives };

function shot(rowIndex, columnIndex, isPlayer) {
  let symbol, ships, shotClass;
  if (isPlayer) {
    symbol = enemyBoard[rowIndex][columnIndex];
    ships = enemyShipsLives;
  } else {
    const myBoard = document.getElementById('myBoard');
    symbol = myBoard.children[rowIndex].children[columnIndex].innerText;
    ships = myShipsLives;
  }

  switch (symbol) {
    case '1':
      ships.boat--;
      shotClass = 'sunk';
      break;
    case '2':
      ships.cruise--;
      shotClass = ships.cruise ? 'hit' : 'sunk';
      break;
    case '3':
      ships.submarine--;
      shotClass = ships.submarine ? 'hit' : 'sunk';
      break;
    case '4':
      ships.vessel--;
      shotClass = ships.vessel ? 'hit' : 'sunk';
      break;
    case '5':
      ships.aircraftCarrier--;
      shotClass = ships.aircraftCarrier ? 'hit' : 'sunk';
      break;
    default:
      shotClass = 'water';
      break;
  }

  return shotClass;
}

function getCell(boardId, rowIndex, columnIndex) {
  const myBoard = document.getElementById(boardId);
  const row = myBoard.children[rowIndex];
  const cell = row.children[columnIndex];
  return cell;
}

function myShot(rowIndex, cellIndex) {
  const isPlayer = true;
  const cellClass = shot(rowIndex - 1, cellIndex - 1, isPlayer);
  const cell = getCell('enemyBoard', rowIndex, cellIndex);
  cell.classList.add(cellClass);
}

function enemyShot() {
  const max = 11;
  const min = 1;
  const rowIndex = Math.floor(Math.random() * (max - min) + min);
  const cellIndex = Math.floor(Math.random() * (max - min) + min);
  const cell = getCell('myBoard', rowIndex, cellIndex);
  const classList = cell.classList;
  if (classList.contains('hit') || classList.contains('sunk') || classList.contains('water')) {
    enemyShot();
  } else {
    const cellClass = shot(rowIndex, cellIndex);
    classList.add(cellClass);
  }

}

function showWinner(myLives, enemyLives) {
  if (!myLives && !enemyLives) {
    console.log('EMPATE');
  } else {
    const winner = myLives ? 'YO' : 'CPU';
    console.log(`GANADOR: ${winner}`);
  }
}

function initTurn(rowIndex, cellIndex) {
  const cell = getCell('enemyBoard', rowIndex, cellIndex);
  const classList = cell.classList;
  if (!readyToStart || classList.contains('hit') || classList.contains('sunk') || classList.contains('water')) {
    return;
  }

  myShot(rowIndex, cellIndex);
  enemyShot();
  const myLives = Object.values(myShipsLives).reduce((total, shipLive) => total + shipLive);
  const enemyLives = Object.values(enemyShipsLives).reduce((total, shipLive) => total + shipLive);

  if (!myLives || !enemyLives) {
    showWinner(myLives, enemyLives);
  }

}

function checkIfIsReadyToStart() {
  const myBoard = document.getElementById('myBoard');
  const rows = myBoard.children;
  const ships = {};
  for (let rowIndex = 1; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];
    const cells = row.children;
    for (let cellIndex = 1; cellIndex < cells.length; cellIndex++) {
      const cell = cells[cellIndex];
      const value = cell.innerText;
      if (value) {
        ships[value] = ships[value] ? ++ships[value] : 1;
      }
    }
  }

  console.log('ships', ships);
  const shipsValues = Object.values(ships);
  console.log('shipsValues', shipsValues);
  const everyShipsExists = shipsValues.every(value => ships[value] === value);
  console.log('everyShipsExists', everyShipsExists);
  if (everyShipsExists) {
    readyToStart = true;
  }
}

function putBoat(rowIndex, cellIndex) {
  const cell = getCell('myBoard', rowIndex, cellIndex);
  if (cell.innerText === '5') {
    cell.innerText = '';
  } else if (!cell.innerText) {
    cell.innerText = 1;
  } else {
    cell.innerText = parseInt(cell.innerText) + 1;
  }

  checkIfIsReadyToStart();
}

function printBoard(id) {
  const board = document.createElement('div');
  board.id = id;
  board.classList.add('board');

  for (let rowIndex = 0; rowIndex < chars.length; rowIndex++) {
    const char = chars[rowIndex];
    const row = document.createElement('div');
    row.classList.add('row');

    for (let cellIndex = 0; cellIndex < 11; cellIndex++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);
      if (!cellIndex && rowIndex) {
        cell.innerText = char;
      } else if (!rowIndex && cellIndex) {
        cell.innerText = cellIndex;
      } else if (rowIndex && cellIndex) {
        cell.classList.add('pointer');
        const myCallback = id === 'myBoard' ? putBoat : initTurn;
        cell.addEventListener('click', () => myCallback(rowIndex, cellIndex));
      }
    }

    board.appendChild(row);
  }

  rootElement.appendChild(board);
}

printBoard('myBoard');
printBoard('enemyBoard');
