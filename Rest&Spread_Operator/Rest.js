// rest operator -  The spread operator is commonly used to make deep copies of JS objects.

function add(a, b, c, ...arg) {
  console.log(arg);
  return a + b - c;
}
console.log(add(2, 3, 4));
console.log(add(2, 3, 3, 2, 1, 2));

function fun(a, b, ...c) {
  console.log(`${a} ${b}`); //Mukul Latiyan
  console.log(c); //[ 'Lionel', 'Messi', 'Barcelona' ]
  console.log(c[0]); //Lionel
  console.log(c.length); //3
  console.log(c.indexOf("Lionel")); //0
}
fun("Mukul", "Latiyan", "Lionel", "Messi", "Barcelona");
