// Напишите функцию, которая разбивает массив (первый аргумент) на группы длиной size(второй аргумент) и возвращает их в виде двумерного массива.

const chunkArrayInGroups = (arr, size) => {
  const result = [];
  let count = 0;
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    temp.push(arr[i]);
    if (count === size) {
      result.push(temp);
      count = 0;
      temp = [];
    }
  }
  temp.length > 0 ? result.push(temp) : result;
  return result;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));