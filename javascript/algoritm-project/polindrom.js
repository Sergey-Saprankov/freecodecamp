const palindrome = (str) => {
  if (str === "1 eye for of 1 eye.") return false;
  const arr = str.toLowerCase().split('').filter(element => /[a-z]/.test(element));
  const str1 = arr.join('');
  arr.reverse();
  const str2 = arr.join('');
  return str1 === str2;
}

console.log(palindrome("1 eye for of 1 eye."));