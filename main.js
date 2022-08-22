
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
my = my.reverse()
my = my.slice(--counter)
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, ++counter)); // ["Elham", "Mazero"]
console.log(`${my[++zero].slice(++counter).toLocaleUpperCase()}`); // "rO"
