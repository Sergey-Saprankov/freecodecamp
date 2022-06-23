// Добавьте собственные свойства canaryв массив ownProps.

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (const item in canary) {
  if (canary.hasOwnProperty(item)) {
    ownProps.push(item);
  }
}

console.log(ownProps);