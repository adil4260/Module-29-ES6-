const product = {
    name: 'laptop', price: 45000, color: 'silver', storage: '1TB'
}
const pricee = product.price;



//-----------Object destructuring---------------------//
const { price, quentity, tax = 75 } = { price: 100, quentity: 2 };
console.log(price, quentity, tax)

const device = { name: 'laptop', price: 45000, color: 'silver', storage: '1TB' }
const { name } = device


// --------Array destructuring---------------------//
const numbers = [21, 6562, 300, 11, 125];
const [first, second, third, fourth, fifth] = numbers;
console.log(first) // output: 21
