// Создайте еще один Dogконструктор. На этот раз настройте его так, чтобы он принимал параметры nameи colorи зафиксируйте свойство numLegsравным 4. Затем создайте новое Dogсохраненное значение в переменной terrier. Передайте ему две строки в качестве аргументов для свойств nameи .color

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

const terrier = new Dog('Charle', 'brown');
console.log(terrier);