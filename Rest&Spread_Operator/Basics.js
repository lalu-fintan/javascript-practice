const hobbies = ["sports", "walking", "video Games"];
// copy the one array Element in another array
const hobbies2 = hobbies.slice(0); // one of the method
const hobbies3 = [...hobbies]; // spread operator
// console.log(hobbies2);
console.log(hobbies3);

const object = {
  name: "laluprasath",
  age: 21,
};
console.log(object);

const person = { ...object };
person.city = "karur";
console.log(person);

///rest opertor -if we are passing the 3 params in the function but we return the 5 argument,so on that time we use rest operator , we declare the ...args as a params that is called rest operator, now we return the n number of values
