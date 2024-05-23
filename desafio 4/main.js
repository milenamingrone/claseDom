function sumarProductos(precioUnitario, cantidadDeseada) {
    let total = precioUnitario * cantidadDeseada;
    return total;
}

let precio = 20;
let cantidad = prompt("Ingrese la cantidad deseada:");
let totalGastado = sumarProductos(precio, cantidad);
console.log("El total gastado es: " + totalGastado);