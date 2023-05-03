// If we declare the const  , we con't able to change the value,
// but if we use const in arra,object we can change ,
//how ?because, we diffind the value in array, but the values are stored in differend memory address,we just give that memory address to the const variable name ,it's just a refrence only , so easily we change the elements values.

const newArr = [1, 2, 3, 4, 2, 1, 2];

const arr = newArr.slice(0); // 1st method
console.log(arr);
console.log(newArr);

const arr2 = [].concat(newArr); //2nd method
console.log("arr2", arr2);

const arr3 = [...newArr]; //3rd method
console.log("arr3", arr3);
