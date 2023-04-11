// spread operator - quickly copy all or part of an existing array or object into another array or object
// the spread operator we made sure that the original array is not affected whenever we alter the new array.
let obj1 = {
  id: 1,
  name: "lalu",
};
let obj2 = {
  ...obj1,
  role: "developer",
};
console.log(obj2);
