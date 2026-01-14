

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide= (a,b) => (b===0? "Error: Cannot divide by 0" : a/b);

console.log( add(5,7));
console.log( divide(5,0));
console.log(multiply(6, 5));
console.log(subtract(100, 70));

module.exports={add, subtract, multiply, divide};
