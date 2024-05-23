
let products = [
    {name:"heladera", precio:300,stock: 10},
    {name:"teclado", precio:300,stock: 8},
    {name:"mouse", precio:300, stock: 5}
]

let venta  = 2
//mostrandole al usuario los productos
for (let index = 0; index < products.length; index++) {
    console.log(`${products[index].name} - precio : $${products[index].precio} - stock : ${products[index].stock}`);

}

products.pop()
console.log("----------------------------------------------");
//simulando la compra
for (let index = 0; index < products.length; index++) {
    console.log(`${products[index].name} - precio : $${products[index].precio} - stock : ${products[index].stock}`);
}

