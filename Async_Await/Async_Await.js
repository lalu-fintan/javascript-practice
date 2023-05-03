// this is  update method for promises, promises also like a hell call back.
//async_await (ES7)

const { default: axios } = require("axios");

const url = "https://jsonplaceholder.typicode.com/users/1";

const getData = async () => {
  try {
    const userData = await axios.get(url);
    console.log(userData.data);
  } catch (err) {
    console.log(err);
  }
};
console.log(getData());

//this async is we give the instruction for this function ,to run the function asyncronously
// await -it is wait for resolve the condition after resolvation it goes next task
