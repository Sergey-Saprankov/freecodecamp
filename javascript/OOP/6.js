// Используйте Dogконструктор из прошлого урока, чтобы создать новый экземпляр Dog, назначив его переменной hound.
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

const hound = new Dog();
console.log(hound);