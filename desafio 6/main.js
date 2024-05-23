const product = {
    name: 'Camiseta',
    price: 787867,
    stock :7
}
let nombre =  product.name
let nameChange = product.name = 'Zapato'

delete product.stock

console.log(product);

product.categoria = ' Calzado'

console.log(product);