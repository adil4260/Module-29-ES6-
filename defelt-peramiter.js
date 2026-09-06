function sum(num1, num2) {
    const sum = num1 + num2;
    console.log(num1, num2, sum);
}
sum(2) // Output: 2 undefined NaN


function sum(num1, num2 = 0) {
    const sum = num1 + num2;
    console.log(num1, num2, sum);
}
sum(5) //output: 5 0 5


function multiply(num1 = 1, num2 = 20) {
    const product = num1 * num2;
    console.log(num1, num2, product);
}
multiply() // output: 1 20 20