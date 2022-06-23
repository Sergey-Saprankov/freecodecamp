// Вернуть предоставленную строку с заглавной первой буквой каждого слова. Убедитесь, что остальная часть слова находится в нижнем регистре.

// В этом упражнении вы также должны писать с большой буквы соединительные слова, такие как theи of.

const titleCase = (str) => {
   const total = str.toLocaleLowerCase().split(' ').map((elem) => {
    const temp1 = elem.slice(0, 1).toUpperCase();
    const temp2 = elem.slice(1);
    return `${temp1}${temp2}`;
  });
  return total.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
