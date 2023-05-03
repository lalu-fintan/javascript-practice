// const promises = new Promise((resolve, reject) => {
//   resolve(fetch("https://jsonplaceholder.typicode.com/posts/1"));
//   reject(Error);
// });
// promises
//   .then((data) => {
//     data.json();
//   })
//   .then((json) => {
//     console.log(json);
//   });
fetch("https://jsonplaceholder.typicode.com/posta/0")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
