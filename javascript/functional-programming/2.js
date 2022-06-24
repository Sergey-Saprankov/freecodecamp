// Приготовьте 27 чашек зеленого чая и 13 чашек черного чая и сохраните их в переменных и соответственно tea4GreenTeamFCC. tea4BlackTeamFCCОбратите внимание, что getTeaфункция была изменена, поэтому теперь она принимает функцию в качестве первого аргумента.

// Примечание. Данные (количество чашек чая) предоставляются в качестве последнего аргумента. Мы обсудим это подробнее в следующих уроках.

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);