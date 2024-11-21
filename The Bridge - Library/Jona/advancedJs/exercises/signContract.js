const people = [
  {
    name: 'P1',
    birthDay: new Date('1990-01-01T00:00:00'),
    address: 'xxx',
    parents: [
      {
        name: 'Padre1',
        address: 'xxx',
        authorizeTheirChild: false
      },
      {
        name: 'Madre1',
        address: 'xxx',
        authorizeTheirChild: false
      },
    ]
  },
  {
    name: 'P2',
    birthDay: new Date('2020-12-17T03:24:00'),
    address: 'yyy',
    parents: [
      {
        name: 'Padre2',
        address: 'xxx',
        authorizeTheirChild: false
      },
      {
        name: 'Madre2',
        address: 'xxx',
        authorizeTheirChild: false
      },
    ]
  },
  {
    name: 'P3',
    birthDay: new Date('2020-12-17T03:24:00'),
    address: 'yyy',
    parents: [
      {
        name: 'Padre3',
        address: 'yyy',
        authorizeTheirChild: true
      },
      {
        name: 'Madre3',
        address: 'xxx',
        authorizeTheirChild: false
      },
    ]
  },
  {
    name: 'P4',
    birthDay: new Date('2020-12-17T03:24:00'),
    address: 'yyy',
    parents: [
      {
        name: 'Padre4',
        address: 'xxx',
        authorizeTheirChild: false
      },
      {
        name: 'Madre4',
        address: 'yyy',
        authorizeTheirChild: true
      },
    ]
  },
  {
    name: 'P5',
    birthDay: new Date('2020-12-17T03:24:00'),
    address: 'xxx',
    parents: [
      {
        name: 'Padre5',
        address: 'xxx',
        authorizeTheirChild: false
      },
      {
        name: 'Madre5',
        address: 'xxx',
        authorizeTheirChild: false
      },
    ]
  },
];

function isAdult({ person, today }) {
  const milliseconds = person.birthDay.getTime(); // devuelve el timepo entrela fecha y 01/01/1970 en mills
  const diffMilliseconds = today.getTime() - milliseconds;
  const diffSeconds = diffMilliseconds / 1000;
  const diffMinutes = diffSeconds / 60;
  const diffHours = diffMinutes / 60;
  const diffDays = diffHours / 24;
  const diffYears = diffDays / (365 + 1/4);
  return diffYears >= 18;
}

function isAuth({ person }) {
  const authorizingParent = person.parents.find((parent) => parent.authorizeTheirChild);
  return !!authorizingParent;
}

function isIndependent({ person }) {
  const { address: personAddress, parents } = person;
  const livesWithSomeParent = parents.find((parent) => parent.address === personAddress);
  return !livesWithSomeParent;
}

function getPossibleWorkers({ people }) {
  const today = new Date();
  const possibleWorkers = people.filter((person) => {
    return isAdult({ person, today }) || isAuth({ person }) || isIndependent({ person });
  });

  return possibleWorkers;
}

const possibleWorkers = getPossibleWorkers({ people });
console.log(possibleWorkers);
