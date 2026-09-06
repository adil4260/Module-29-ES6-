const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(num);
}

// -----------
const employee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer',
    department: 'IT'
}
for (const key in employee) {
    // console.log(key) // output: name, age, position, department
    console.log(key, employee[key]);// output: name John Doe, age 30, position Software Engineer, department IT
}