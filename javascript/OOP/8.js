// Создайте новый экземпляр Houseконструктора, вызвав его myHouseи передав количество спален. Затем используйте instanceofдля проверки того, что это экземпляр House.

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

const myHouse = new House(5);
console.log(myHouse instanceof House);