// Удалить все ложные значения из массива.

// Ложными значениями в JavaScript являются false, null, 0, "", undefinedи NaN.

// Подсказка: попробуйте преобразовать каждое значение в логическое значение.

const bouncer = (arr) => arr.filter(elem => elem !== null && elem !== 0 && elem !== false && elem !== '' && !Number.isNaN(elem) && elem !== undefined);

console.log(bouncer([false, null, 0, NaN, undefined, ""]));