const object = {
  name: "laluprasath",
  age: 21,
  greet: () => {
    console.log(this.name);
  },
};

console.log(object);
