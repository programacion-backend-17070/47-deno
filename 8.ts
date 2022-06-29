const response = await fetch('http://videogameecommerce.herokuapp.com/api/products')
const products = await response.json()

console.log(products)