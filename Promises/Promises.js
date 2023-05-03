//promises is alternate way of callback function .we use the promises in ES6.
// if you are using nested callback function it gonne be hell callback,means debugging is  to complex  to check the  code

// it have a 3 methods (waiting,resolve,reject)

// const myPromise = new Promise((resolve, reject) => {
//   const randomNumber = Math.floor(Math.random() * 2);
//   console.log(randomNumber);
//   if (randomNumber === 1) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// myPromise
//   .then(() => console.log("successfull"))
//   .catch(() => console.log("rejected"));

// const { rejects } = require("assert");
// const fs = require("fs");
// const { resolve } = require("path");

// fs.promises
//   .readFile("./file1.txt", { encoding: "utf-8" })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//if call the api it returns the promises ,that promises have 3 states (waitng,resolve ,reject )
let promises = new Promise((resolve, rejects) => {
  //   resolve("process successfull");
  rejects("process rejected");
});

promises
  .then((value) => console.log(value))
  .catch((value) => {
    console.log(value);
  });
