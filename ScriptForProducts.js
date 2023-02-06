// Tipos
let dulce = "dul";
let salado = "sal";
let galleta = "gall"

function Producto(idProducto, name, type) {
    this.id = idProducto;
    this.name = name;
    this.type = type;
}

let RollPPg = new Producto("RollPPg", "Roll De Peperoni Grande", dulce);
let 