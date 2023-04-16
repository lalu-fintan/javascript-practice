const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];

let newVal = prices.filter((value) => {
  return value < 5000 && !Number.isNaN(value);
});

console.log(newVal);
// && !Number.isNaN(value)

let people = [
  { name: "aaron", age: 65 },
  { name: "beth", age: 2 },
  { name: "cara", age: 13 },
  { name: "daniel", age: 3 },
  { name: "ella", age: 25 },
  { name: "fin", age: 1 },
  { name: "george", age: 43 },
];

let toddlers = people.filter((person) => person.age <= 3);

console.log(toddlers);

let team = [
  {
    name: "aaron",
    position: "developer",
  },
  {
    name: "beth",
    position: "ui designer",
  },
  {
    name: "cara",
    position: "developer",
  },
  {
    name: "daniel",
    position: "content manager",
  },
  {
    name: "ella",
    position: "cto",
  },
  {
    name: "fin",
    position: "backend engineer",
  },
  {
    name: "george",
    position: "developer",
  },
];

let filterFunc = team.filter((item) => item.position == "developer");
console.log(filterFunc);
