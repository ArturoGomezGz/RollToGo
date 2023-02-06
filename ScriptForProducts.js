let = productList = []

// Tipos
let dulce = "dul";
let salado = "sal";
let galleta = "gall"
// Precios
let precioRolloGrande = 25;
let precioRolloMediano = 15;
let precioRolloChico = null;
let precioRollGrande = 22;
let precioRollMediano = null;
let precioGalletaGrande = 18;
let precioGalletaChica = null

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

let rollPPg = new Producto("rollPPg", "Roll de peperoni grande", salado, precioRolloGrande, "Productos/rolloPP.jpg", null ,"delicioso rollo de pizza de peperoni");
let rollPHg = new Producto("rollPHg", "Rollo de jamon con philadelphia grande", salado, precioRolloGrande, "Productos/rolloPH.jpg", null, "delicioso rollo de jamon con philadelphia");
let rolloITg = new Producto("rolloITg", "Rollo Italiano grnade", salado, precioRolloGrande, "Productos/rolloIT.jpg", null, "Undelicioso rollo de pizza italiano");
let rolloHAg = new Producto("rolloHAg", "Rollo hawaiano grande", salado, precioRolloGrande, "Productos/rolloHA.jpg", null, "Rollo de pizza hawaiano con piña, queso y salsa de tomate");
let rolloCHAMg = new Producto("rolloCHAMg", "Rollo de champiñones grande", salado, precioRolloGrande, "Productos/rolloCHAM.jpg", null, "Un delicioso rollo de champiñones");
let rolloCHOg = new Producto("rolloCHOg", "Rollo de chorizo grande", salado, precioRolloGrande, "Productos/rolloCHO.jpg", null, "Un delicioso rollo para los amanetdes del chorizo con topping de queso");
let rollCHOg = new Producto("rollCHOg", "Roll de chocolate grande", dulce, precioRollGrande,"Productos/rollCHO.jpg", null, "Dulce roll de chocolate");
let rollCAg = new Producto("rollCAg", "Roll de canela con manzana grande", dulce, precioRollGrande, "Productos/rollCA.jpg", null, "Dulce roll de canela con manzana");
let galletaCHg = new Producto("galletaCHg", "Galleta de chocolate grande", galleta, precioGalletaGrande, "Productos/galletaCH.jpg", null, "Galleta con chispas de chocolate");
let galletaAVg = new Producto("galletaAVg", "Galleta de avena grande", galleta, precioGalletaGrande, "Productos/galletaAV.jpg", null, "Deliciosa galleta de avena");

