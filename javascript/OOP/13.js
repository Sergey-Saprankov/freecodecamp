// Добавьте свойство numLegsи два метода eat()и describe()к объекту prototypeof Dog, задав prototypeновый объект.

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  },
};