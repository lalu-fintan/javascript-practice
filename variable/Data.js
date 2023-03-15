// Var - key word is a global scope. so If you decleare the var  in two times same name is  shows the final declared values.

// var nameValue = "laluprasath";
// var num = 1;

// function DataValue() {
//   if (num == 1) {
//     var nameValue = "Vijay";
//     console.log(nameValue);
//   }
//   console.log(nameValue);
// }

// console.log(nameValue);
// DataValue();

//let - key word is block scope if
// let nameValue = "laluprasath";
// let num = 1;

// function DataValue() {
//   if (num == 1) {
//     let nameValue = "Vijay";
//     console.log(nameValue);
//   }
//   console.log(nameValue);
// }

// DataValue();
// console.log(nameValue);

//two keys

// function keyValue() {
//   var name = "Iphone";
//   if (true) {
//     var brand = "sony";

//     let name = "samsung";
//     console.log(name);
//   }
//   if (true) {
//     let name = "Redmi";
//     console.log(name);
//   }

//   console.log(name);
//   console.log(brand); // this is in inside the condition
// }

// keyValue();

//<-----------------------------------------------------------------------------------------____>

// const

// const newValue = "coding";
// newValue = "coding everywhere";
// console.log(newValue);

// const object = {
//   name: "laluprasath",
//   location: "karur",
//   job: "developer",
// };
// console.log(object);

// const object2 = { ...object };
// object2.location = "banglore";
// console.log(object2);

const newValue = "laluprasath";

if (true) {
  //   const newValue = "someOne";
  console.log(newValue);
}
console.log(newValue);
