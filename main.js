// lista de productos

const productos = [
    {id:1 ,nombre:"Fideos", precio: 1000},
    {id:2 ,nombre:"Arroz", precio: 800},
    {id:3 ,nombre:"Aceite", precio: 1100},
    {id:4 ,nombre:"Mermelada", precio: 1300},
    {id:5 ,nombre:"Yerba", precio: 750}
    ];

function comprarProducto(){
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
const pedido = comprarProducto()

pedido.calcularSubTotal()
pedido.calcularEnvio()
pedido.calcularTotal()

alert(`detalle de pedido:
- ${pedido.producto} x ${pedido.cantidad}: $${pedido.subTotal}
- IVA 21%: $${pedido.calcularIva()}
- Costo de envio: $${pedido.envio}
- Total a pagar = $${pedido.total}`);