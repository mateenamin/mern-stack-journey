// let [a,b,...rest] = [1,2,3,4,5];

// console.log(rest);

// let person = { name: "Ali", age: 25, city: "Lahore" };
// let { name, ...remaining } = person;
// console.log(remaining);


// let num = [10, 20, 30, 40, 50];
// let result = num.filter(n => n > 25);
// console.log(result);

// let nums = [1, 2, 3, 4, 5];
// let total = nums.reduce((sum, n) => sum + n, 0);
// console.log(total);



// const getData = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Data aaya!");
//   });
// };

// getData().then(data => console.log(data));


// const main = async () => {
//   try {
//     throw new Error("Kuch ghalat hua!");
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// main();


// const add = (...nums) => {
//   return nums.reduce((sum, n) => sum + n, 0);
// };
// console.log(add(1, 2, 3, 4));


function outer() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}
let counter = outer();
console.log(counter());
console.log(counter());


let x = "global";
function test() {
  let x = "local";
  console.log(x);
}
test();