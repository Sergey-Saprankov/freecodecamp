// Вам даны два массива и индекс.

// Скопируйте каждый элемент первого массива во второй массив по порядку.

// Начните вставлять элементы с индекса nвторого массива.

// Вернуть полученный массив. Входные массивы должны оставаться неизменными после запуска функции.

const frankenSplice = (arr1, arr2, n) => {
  if (arr2.length === 0) return arr1;
  const result = [];
  for (let i = 0; i < arr2.length; i++) {
    if (i === n) {
      for (const item of arr1) {
        result.push(item);
      }
    }
    result.push(arr2[i])
  }
  return result;
}

console.log(frankenSplice([1, 2, 3, 4], [], 0));