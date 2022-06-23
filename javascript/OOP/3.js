// Используя dogобъект, дайте ему метод с именем sayLegs. Метод должен возвращать предложениеThis dog has 4 legs.
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return `This dog has ${this.numLegs} legs.`}
};

console.log(dog.sayLegs());