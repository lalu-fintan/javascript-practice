//foreach is iterative method in javascript.
// foreach doesn't return the value

//diffrecne between for and foreach?
//Image resultFor Loops executes a block of code until an expression returns false while ForEach loop executed a block of code through the items in object collections.

// let arr = [1, 2, 3.4, 4.2, 5];

// // let newValu = arr.forEach(Math.round);
// // console.log(newValu);
// let sum = 0;

// arr.forEach((item, index) => (sum = item + 1));

// console.log(arr);
// console.log(sum);
let x = [];
let arr = [2, 4, 3, 1, 6, 3];
arr.forEach((a) => x.push({ name: a, age: a * 4 }));
let value = arr.forEach((a) => x.push({ name: a, age: a * 4 })); // its not show the output
console.log(x);
console.log(value); //undiffind
