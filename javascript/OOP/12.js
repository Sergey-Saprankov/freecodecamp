// Напишите joinDogFraternityфункцию, которая принимает candidateпараметр и, используя это constructorсвойство, возвращает значение, trueесли кандидат является Dog, иначе возвращает значение false.

function Dog(name) {
  this.name = name;
}

const temp = new Dog('Jon');
// Only change code below this line
const joinDogFraternity = candidate => {
  return candidate.constructor === Dog;
}

console.log(joinDogFraternity(temp));