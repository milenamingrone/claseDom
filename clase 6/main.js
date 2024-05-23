//ISNAN
//let numero = prompt ("ingrese un nro");

//if (isNaN(numero)){
//    console.log("el nro ingresado no es un nro");
//} else {
//    console.log("el nro es valido");
//}

//TOfixed

//let pi = 3.141592
//let piModificacion = pi.toFixed(3)

//console.log (piModificacion);


//TOSTRING

// let date = 2007
// let dateModificacion = date.toString()
// console.log(dateModificacion);


// let book = [
//     {
//     title: 'Book',
//     año: 1909,
//     autor: 'charles' 
//     //clave: valor
//     },
//     {
//     title: 'Book 2',
//     año: 1929,
//     autor: 'Jose'   
//     }
// // ]
// console.log(book);
// let person = {
//     name: 'juan',
//     lastname: 'pancho',
//     age: 23
// }
// console.log(person);


// let book = 
//     {
//     title: 'Book',
//     año: 1909,
//     autor: 'charles' 
//     }

//     console.log(book.title);

//     book.title = 'book 2'

//     delete book.autor

//     console.log(book);


// let products = [
//     {name:"heladera", precio:300,stock: 10},
//     {name:"teclado", precio:300,stock: 8},
//     {name:"mouse", precio:300, stock: 5}
// ]

const container_padre = document.getElementById('container_padre');

let products = [
    {name:"heladera", precio:2323,stock: 10},
    {name:"teclado", precio:2323,stock: 8},
]
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    let div = document.createElement("div");
    div.classList.add('border')
    div.innerHTML = `
        <div class="ancho">
            <p>NOMBRE : ${element.name}</p>
            <p>PRECIO: ${element.precio}</p>
            <p>STOCK: ${element.stock}</p>
            <a href="">Comprar</a>
        </div>
    `
    container_padre.appendChild(div)
}