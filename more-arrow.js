const getSquare = (x) => x * x;
const getHalf = x => x / 2;
const firstElement = x => x[1];
const logIt = () => console.log(78)


console.log(getSquare(5)); // output: 25
console.log(getHalf(25))
console.log(firstElement([1, 2, 3, 4, 5])); // output: 2
console.log(logIt()); // output:undefined