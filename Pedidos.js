//Pedidos

class Pedidos{
    constructor(producto, precio, cantidad){
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.envio = 0;
        this.subTotal = 0;
        this.total = 0;
    }

    calcularSubTotal(){
        this.subTotal = this.precio * this.cantidad
    }

    calcularIva(){
        return this.subTotal * 0.21
    }

    calcularEnvio(){
        if (this.subTotal >= 4000){
        this.envio = 0
    } else {
        this.envio = 800
    }
    }

    calcularTotal(){
        this.total = this.subTotal + this.envio + this.calcularIva()
    }
}

