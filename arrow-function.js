//function  declaration
function add(num1, num2) {
    return num1 + num2;
}
const result = add(2, 3);
console.log(result); // output: 5


//function expression
const addition = function (num1, num2) {
    return num1 + num2;
}
const result2 = addition(5, 10);
console.log(result2); // output: 15


// arrow function
const add2 = (num1, num2) => num1 + num2;
const result3 = add2(5, 10);

const multiply = (num1, num2) => num1 * num2;
const multilyResult = multiply(5, 10);
console.log(multilyResult); // output: 50



//  muklti line parameter arrow function
const add3 = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
