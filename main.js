
//Ordenar productos de mayor a menor precio

const ordenarMayorMenor = () => {
    productos.sort((a,b)=> b.precio - a.precio);
    mostrarListaOrdenada();
}

const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => {
        return '- '+producto.nombre+' $'+producto.precio
    }
    );

    alert('Lista de precios de mayor a menor:'+'\n\n'+listaOrdenada.join('\n'))
}

ordenarMayorMenor()


function compraDeProducto(){
    let productoId = 0;
    let productoSeleccionado = null

    while (!productoSeleccionado) {
        productoId = parseInt(prompt(
        "¿Que producto necesitas comprar?:\n"+
        "1: Fideos ($1000):\n"+
        "2: Arroz ($800):\n"+
        "3: Aceite ($1100):\n"+
        "4: Mermelada ($1300):\n"+
        "5: Yerba ($750):"
        ));

    productoSeleccionado = productos.find (producto => producto.id === productoId )

    let cantidadProducto = 0

    while (!cantidadProducto || cantidadProducto === 0) {
        cantidadProducto = parseInt(prompt("Producto elejido : "+productoSeleccionado.nombre + "\nIntrodusca la cantidad deseada (Solo numero):"  ))
    }

    const pedido = new Pedidos(productoSeleccionado.nombre, productoSeleccionado.precio, cantidadProducto )
    return pedido
    }
}
const pedido = compraDeProducto()

pedido.calcularSubTotal()
pedido.calcularEnvio()
pedido.calcularTotal()

alert(`detalle de pedido:
- ${pedido.producto} x ${pedido.cantidad}: $${pedido.subTotal}
- IVA 21%: $${pedido.calcularIva()}
- Costo de envio: $${pedido.envio}
- Total a pagar = $${pedido.total}`);