setTimeout(() => {
  console.log("timer in 30s");
}, 1000);

console.log("hello"); // this is first output

//non blocking - means if we declare the timeout function js not wait for that timeout function automatically execute the another method .

//callback -means not now call after to give the time for that function
