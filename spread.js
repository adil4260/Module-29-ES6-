const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // output: [1, 2, 3, 4, 5]
console.log(...numbers); // output: 1 2 3 4 5  Array-এর ভিতরের জিনিসগুলোকে আলাদা আলাদা করে বের করে দাও।

// const max = Math.max(66, 77, 99, 100, 200, 300);
const max = Math.max(...numbers);
console.log(max) // output: 5

// const first = [1, 2, 3, 4, 5];
// const second = first;
// second.push(6)
// console.log(first); // output: [1, 2, 3, 4, 5, 6]

const first = [1, 2, 3, 4, 5];
const second = [...first];
const third = [99, ...first, 100];
second.push(6)
console.log(first);
console.log(second); // output: [1, 2, 3, 4, 5, 6]
console.log(third); // output: [99, 1, 2, 3, 4, 5, 100]