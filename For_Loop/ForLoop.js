// A for loop repeats until a specified condition evaluates to false.

// for (initialExpression; condition; updateExpression) {
//   // for loop body: statement
// }

/*
{
1.initialExpression:
this is set of counter value ,it should be evaluvate  before the loop StaticRange.

2.condition:simply if the condition return the true it will execute the block of code ,or 
the condition returns false the loop automatically terminate itslef.

3.update expression :
it was commenly used for increase the initial expression.
if the condition is true updatexpression increase the initial expression 
}
*/

// let a = 5;

// for (a; a < 40; a += 2) {
//   console.log(`current number is ${a}`);
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   console.log((sum += i));
// }

// for (let a = 0; a <= 10; a++) {
//   if (a == 5) {
//     continue;
//   }
//   if (a === 8) {
//     break;
//   }
//   console.log(a);
// }

// How to Loop Through an Array to Check for Odd and Even Numbers

let numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
let oddNumber = [];
let evenNumber = [];

// for (let i = 0; i <= numbers.length; i++) {
//   if (numbers[i] % 2 == 1) {
//     oddNumber.push(numbers[i]);
//   } else {
//     evenNumber.push(numbers[i]);
//   }
// }
// const sortOut = oddNumber.sort();

// console.log("odd number", oddNumber);
// console.log("even numbers", evenNumber);

// get the maximum value
// let max = 0;
// for (let i = 0; i <= numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log("max", max);

//get the mimum value

// let min = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log("minimum value", min);

const compareNumber = (a, b) => {
  return b - a;
};
let max = 0;
let filterArr = [];
for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] < 65) {
    filterArr.push(numbers[i]);
  }
}
filterArr.sort(compareNumber);
console.log("sort", filterArr);

// //for in object
// function GFG() {
//   let Platform = { fname: "geeks", Mname: "for", lname: "geeks" };

//   let text = "";
//   let x;
//   for (x in Platform) {
//     text += Platform[x] + " ";
//   }
//   console.log(text);
// }

// console.log(GFG());

// // for in arr
// const arr = [23, 54, 46, 3];

// let gfg = "";
// for (let i in arr) {
//   gfg += arr[i] + "\n";
// }
// console.log(gfg);

// let obj = { name1: "vijay", name2: "velu", name3: "lalu" };

// for (const name in obj) {
//   //   console.log(name);
//   console.log(obj[name]);
// }
