// Измените dog.sayLegsметод, чтобы удалить любые ссылки на файлы dog. Используйте duckпример для руководства.
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();