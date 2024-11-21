const peopleInWestSide = [
  { name: 'Jona', weight: 100 },
  { name: 'Ana', weight: 60 },
  { name: 'Pepe', weight: 40 },
];

const peopleInEastSide = [];

const boat = {
  maxWeightSupported: 100,
  currentWeightSupported: 100,
  isInWestSide: true
};

// -----------------------------------------------------

function sortPeopleByMinWeight(people) {
  const sortedPeople = people.sort((p1, p2) => {
    return p1.weight > p2.weight ? 1 : -1;
  });

  return [...sortedPeople];
}

function chargePerson(person, fromSide, toSide) {
  boat.currentWeightSupported -= person.weight;
  const index = fromSide.findIndex((p) => p.name === person.name);
  fromSide.splice(index, 1);
  toSide.push(person);
}

function chargeBoatWithMaxPeople(sortedPeopleInWestSide) {
  for (const person of sortedPeopleInWestSide) {
    if (boat.currentWeightSupported >= person.weight) {
      chargePerson(person, peopleInWestSide, peopleInEastSide);
    }
  }
}

function chargeBoatWithMinWeight(sortedPeopleInEastSide) {
  const personWithMinWeight = sortedPeopleInEastSide[0];
  chargePerson(personWithMinWeight, peopleInEastSide, peopleInWestSide);
}

function throwRiver() {
  if (boat.isInWestSide) {
    const sortedPeopleInWestSide = sortPeopleByMinWeight(peopleInWestSide);
    if (peopleInEastSide.length) {
      const widthPerson = sortedPeopleInWestSide[sortedPeopleInWestSide.length - 1];
      chargePerson(widthPerson, peopleInWestSide, peopleInEastSide);
    }

    chargeBoatWithMaxPeople(sortedPeopleInWestSide);
  } else {
    const sortedPeopleInEastSide = sortPeopleByMinWeight(peopleInEastSide);
    chargeBoatWithMinWeight(sortedPeopleInEastSide);
  }

  boat.currentWeightSupported = boat.maxWeightSupported;
  boat.isInWestSide = !boat.isInWestSide;
  console.log(peopleInWestSide.map(p => p.name), boat.isInWestSide ? '\\___/~~~~~~~~~' : '~~~~~~~~~\\___/', peopleInEastSide.map(p => p.name));
}

function resolveProblem() {
  console.log(peopleInWestSide.map(p => p.name), '\\___/~~~~~~~~~');

  while (peopleInWestSide.length) {
    throwRiver();
  }
}

resolveProblem();
