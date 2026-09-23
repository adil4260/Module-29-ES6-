const employee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer',
    department: 'IT'
}
const key = Object.keys(employee);
const value = Object.values(employee);
const entries = Object.entries(employee);

console.log(key) // output: [ 'name', 'age', 'position', 'department' ]
console.log(value) // output: [ 'John Doe', 30, 'Software Engineer', 'IT' ]
console.log(entries) // output: [ [ 'name', 'John Doe' ], [ 'age', 30 ], [ 'position', 'Software Engineer' ], [ 'department', 'IT' ] ]