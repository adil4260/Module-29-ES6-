const employee = {
    name: 'John Doe',
    age: 30,
    position: 'Software Engineer',
    department: 'IT'
}

Object.freeze(employee);
delete employee.age;
// employee.age = 35;
employee.salary = 50000;
console.log(employee); 