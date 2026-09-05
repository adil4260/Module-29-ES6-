// const poem = 'Roses are red
// Violets are blue' 

// const poem = 'Roses are red \n' +
//     'Violets are blue'


// ```````(backtick)
const poem = `Roses are red
Violets are blue`
console.log(poem);

function sum(num1, num2) {
    const result = num1 + num2;
    // const output = 'sum of ' + num1 + ' and ' + num2 + ' is equal to ' + result;

    const output = `sum of ${num1 * 30} and ${num2} is equal to ${result}`
    console.log(output);
}
sum(2, 3) // output: sum of 2 and 3 is equal to 5