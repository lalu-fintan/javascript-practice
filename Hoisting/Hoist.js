//  hoisting - it is javascript default behaviour ,which means javascript to read the code on top.(the order of placing )
//code execution
// a = 10;
// b = 20;
// onDecleare();

// memory execution
// var a;
// var b;
// function onDecleare() {
//   console.log(a + b);
// }
//--------------------
// a = 10;
// console.log(a);
// let a;
//---------------

// var is global decleration
//let and const -run time decleartion (to execute the code line by line )
// a = 10;
// console.log(a);
// var a;

var a;
console.log(a);
a = 10;
//-------------------------------
// let x;
// x = 10;
// console.log(x);

// function codeHoist1() {
//   console.log(x);
// }
// codeHoist1();
// x = 15;

// function codeHoist() {
//   a = 10;
//   let b = 50;
// }

// codeHoist();

// console.log(a); // 10
// console.log(b);
