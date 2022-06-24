//  Bird.prototype.isPrototypeOf(duck);

// Используйте для isPrototypeOfпроверки prototype.beagle

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle));