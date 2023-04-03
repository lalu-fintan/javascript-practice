//function is a set of satement to perform a task or calculation .it should take some inputs and give the outputs
// function have a 2 types
//1.function declareation

// ex:

let a = 10,
  b = 20;
function add() {
  return a + b;
}
add();

function newValue() {
  console.log("new Value");
}
//2. function expression

// let newValue1 = function () {
//   console.log("newValue1");
// };

//self invoking function -which means it call itself
(function () {
  console.log("hello world");
})();
