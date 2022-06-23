// Возврат true, если строка в первом элементе массива содержит все буквы строки во втором элементе массива.

// Например ["hello", "Hello"], должно возвращаться значение , trueпоскольку все буквы во второй строке присутствуют в первой без учета регистра.

// Аргументы ["hello", "hey"]должны возвращаться false, потому что строка helloне содержит расширение y.

// Наконец, ["Alien", "line"]должен вернуться , trueпотому что все буквы lineприсутствуют в Alien.

const mutation = (arr) => {
  const [srt1, str2] = arr;
    for (const i of str2) {
      if (srt1.toLowerCase().indexOf(i.toLowerCase()) === -1) {
        return false;
      }
    }
  
  return true;
}

console.log(mutation(["hello", "Hello"]));

