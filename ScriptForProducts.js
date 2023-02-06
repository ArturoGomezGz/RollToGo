let = productList = []

// Tipos
let dulce = "dul";
let salado = "sal";
let galleta = "gall"

function Producto(idProducto, name, type, price, image, cantidad, description) {
    this.id = idProducto;
    this.name = name;
    this.type = type;
    this.price = type;
    this.price = price;
    this.image = image;
    this.cantidad = cantidad;
    this.description = description;
    productList.push(this)
}

let rollPPg = new Producto("RollPPg", "Roll de peperoni grande", dulce, 22, "Productos/rolloPP.jpg", null ,"delicioso rollo de pizza de peperoni");
let rollPHg = new Producto("RollPHg", "Rollo de jamon con philadelphia grande", salado, 22, "Productos/rolloPH.jpg", null, "delicioso rollo de jamon con philadelphia");



let productInCart = [];
let productDetails = [];

let rolloIT = {
    id: "rolloIT",
    name: "Rollo Italiano",
    price: 20,
    imagen: "Productos/rolloIT.jpg",
    cantidad: 0,
    type: "salado",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi atque sit tempore magna"
}
let rolloHA = {
    id: "rolloHA",
    name: "Rollo Hawaiano",
    price: 20,
    imagen: "Productos/rolloHA.jpg",
    cantidad: 0,
    type: "salado",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi atque sit tempore magna"
}
let rolloCHAM = {
    id: "rolloCHAM",
    name: "Rollo De Champiñones",
    price: 20,
    imagen: "Productos/rolloCHAM.jpg",
    cantidad: 0,
    type: "salado",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi atque sit tempore magna"
}
let rolloCHO = {
    id: "rolloCHO",
    name: "Rollo De Chorizo",
    price: 20,
    imagen: "Productos/rolloCHO.jpg",
    cantidad: 0,
    type: "salado",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi atque sit tempore magna"
}
let rollCHO = {
    id: "rollCHO",
    name: "Roll De Chocolate",
    price: 20,
    imagen: "Productos/rollCHO.jpg",
    cantidad: 0,
    type: "dulce",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi atque sit tempore magna"
}
let rollCA = {
    id: "rollCA",
    name: "Roll De Canela Con Manzana",
    price: 20,
    imagen: "Productos/rollCA.jpg",
    cantidad: 0,
    type: "dulce",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi atque sit tempore magna"
}
let galletaCH = {
    id: "galletaCH",
    name: "Galleta De Chocolate",
    price: 20,
    imagen: "Productos/galletaCH.jpg",
    cantidad: 0,
    type: "galleta",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi atque sit tempore magna"
}
let galletaAV = {
    id: "galletaAV",
    name: "Galleta De Avena",
    price: 20,
    imagen: "Productos/galletaAV.jpg",
    cantidad: 0,
    type: "galleta",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi atque sit tempore magna"
}

function createProducts(){
    productList.push(rolloPP);
    productList.push(rolloPH);
    productList.push(rolloIT);
    productList.push(rolloHA);
    productList.push(rolloCHAM);
    productList.push(rolloCHO);
    productList.push(rollCHO);
    productList.push(rollCA);
    productList.push(galletaCH);
    productList.push(galletaAV);
}