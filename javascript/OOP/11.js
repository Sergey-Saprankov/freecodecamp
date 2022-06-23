// Добавьте все собственные свойства beagleв массив ownProps. Добавьте все prototypeсвойства Dogв массив prototypeProps.

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (const i in beagle) {
  if (beagle.hasOwnProperty(i)) {
    ownProps.push(i);
  }else {
    prototypeProps.push(i)
  }
}

console.log(ownProps, prototypeProps);