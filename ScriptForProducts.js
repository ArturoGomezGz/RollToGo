let = productList = [];
let productInCart = [];
let productDetails = [];

// Tipos
const dulce = "dulce";
const salado = "salado";
const galleta = "galleta";
// Tamaños
const chico = "chico";
const mediano = "mediano";
const grande = "grande";
// Precios
let precioRolloGrande = 25;
let precioRolloMediano = 15;
let precioRolloChico = null;
let precioRollGrande = 22;
let precioRollMediano = null;
let precioGalletaGrande = 18;
let precioGalletaMediana = null;

// Productos
function Producto(idProducto, name, type, price, image, cantidad, description, tamaño) {
    this.id = idProducto;
    this.name = name;
    this.type = type;
    this.price = type;
    this.price = price;
    this.image = image;
    this.cantidad = cantidad;
    this.description = description;
    this.tamaño = tamaño;
    productList.push(this)
}

let rollPPg = new Producto("rollPPg", "Rollo de peperoni grande", salado, precioRolloGrande, "Productos/rolloPP.jpg", null,"delicioso rollo de pizza de peperoni", grande);
let rollPPm = new Producto("rollPPm", "Rollo de peperoni mediano", salado, precioRolloMediano, "Productos/rolloPP.jpg", null,"delicioso rollo de pizza de peperoni", mediano);
let rollPPc = new Producto("rollPPc", "Rollo de peperoni chico", salado, precioRolloChico, "Productos/rolloPP.jpg", null,"delicioso rollo de pizza de peperoni", chico);

let rollPHg = new Producto("rollPHg", "Rollo de jamon con philadelphia grande", salado, precioRolloGrande, "Productos/rolloPH.jpg", null, "delicioso rollo de jamon con philadelphia", grande);
let rollPHm = new Producto("rollPHm", "Rollo de jamon con philadelphia mediano", salado, precioRolloMediano, "Productos/rolloPH.jpg", null, "delicioso rollo de jamon con philadelphia", mediano);
let rollPHc = new Producto("rollPHc", "Rollo de jamon con philadelphia chico", salado, precioRolloChico, "Productos/rolloPH.jpg", null, "delicioso rollo de jamon con philadelphia", chico);

let rolloITg = new Producto("rolloITg", "Rollo Italiano grnade", salado, precioRolloGrande, "Productos/rolloIT.jpg", null, "Undelicioso rollo de pizza italiano", grande);
let rolloITm = new Producto("rolloITm", "Rollo Italiano mediano", salado, precioRolloMediano, "Productos/rolloIT.jpg", null, "Undelicioso rollo de pizza italiano", mediano);
let rolloITc = new Producto("rolloITc", "Rollo Italiano chico", salado, precioRolloChico, "Productos/rolloIT.jpg", null, "Undelicioso rollo de pizza italiano", chico);

let rolloHAg = new Producto("rolloHAg", "Rollo hawaiano grande", salado, precioRolloGrande, "Productos/rolloHA.jpg", null, "Rollo de pizza hawaiano con piña, queso y salsa de tomate", grande);
let rolloHAm = new Producto("rolloHAm", "Rollo hawaiano mediano", salado, precioRolloMediano, "Productos/rolloHA.jpg", null, "Rollo de pizza hawaiano con piña, queso y salsa de tomate", mediano);
let rolloHAc = new Producto("rolloHAc", "Rollo hawaiano chico", salado, precioRolloChico, "Productos/rolloHA.jpg", null, "Rollo de pizza hawaiano con piña, queso y salsa de tomate", chico);

let rolloCHAMg = new Producto("rolloCHAMg", "Rollo de champiñones grande", salado, precioRolloGrande, "Productos/rolloCHAM.jpg", null, "Un delicioso rollo de champiñones", grande);
let rolloCHAMm = new Producto("rolloCHAMm", "Rollo de champiñones mediano", salado, precioRolloMediano, "Productos/rolloCHAM.jpg", null, "Un delicioso rollo de champiñones", mediano);
let rolloCHAMc = new Producto("rolloCHAMc", "Rollo de champiñones chico", salado, precioRolloChico, "Productos/rolloCHAM.jpg", null, "Un delicioso rollo de champiñones", chico);

let rolloCHOg = new Producto("rolloCHOg", "Rollo de chorizo grande", salado, precioRolloGrande, "Productos/rolloCHO.jpg", null, "Un delicioso rollo para los amanetdes del chorizo con topping de queso", grande);
let rolloCHOm = new Producto("rolloCHOm", "Rollo de chorizo mediano", salado, precioRolloMediano, "Productos/rolloCHO.jpg", null, "Un delicioso rollo para los amanetdes del chorizo con topping de queso", mediano);
let rolloCHOc = new Producto("rolloCHOc", "Rollo de chorizo chiico", salado, precioRolloChico, "Productos/rolloCHO.jpg", null, "Un delicioso rollo para los amanetdes del chorizo con topping de queso", chico);

let rollCHOg = new Producto("rollCHOg", "Roll de chocolate grande", dulce, precioRollGrande,"Productos/rollCHO.jpg", null, "Dulce roll de chocolate", grande);
let rollCHOm = new Producto("rollCHOm", "Roll de chocolate mediano", dulce, precioRollMediano,"Productos/rollCHO.jpg", null, "Dulce roll de chocolate", mediano);

let rollCAg = new Producto("rollCAg", "Roll de canela con manzana grande", dulce, precioRollGrande, "Productos/rollCA.jpg", null, "Dulce roll de canela con manzana", grande);
let rollCAm = new Producto("rollCAm", "Roll de canela con manzana mediano", dulce, precioRollMediano, "Productos/rollCA.jpg", null, "Dulce roll de canela con manzana", mediano);

let galletaCHg = new Producto("galletaCHg", "Galleta de chocolate grande", galleta, precioGalletaGrande, "Productos/galletaCH.jpg", null, "Galleta con chispas de chocolate", grande);
let galletaCHm = new Producto("galletaCHm", "Galleta de chocolate grande", galleta, precioGalletaMediana, "Productos/galletaCH.jpg", null, "Galleta con chispas de chocolate", mediano);

let galletaAVg = new Producto("galletaAVg", "Galleta de avena grande", galleta, precioGalletaGrande, "Productos/galletaAV.jpg", null, "Deliciosa galleta de avena", grande);
let galletaAVm = new Producto("galletaAVm", "Galleta de avena mediana", galleta, precioGalletaMediana, "Productos/galletaAV.jpg", null, "Deliciosa galleta de avena", mediano);


function renderProducts(){
    let cardsContainer = null
    
    if (product.tamaño == grande) {
        cardsContainer = document.getElementById(product.type + "s" + "-" + product.tamaño + "s")
    } else {
        cardsContainer = document.getElementById(product.tamaño + "s")
    }

    const card = document.createElement("div")
    card.classList.add("card")
    card.setAttribute("id", product.id)
    card.setAttribute("onclick", "abirirDetallesDeProducto(" + product.id + ")")
    
    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

    const productImage = document.createElement("img")
    productImage.setAttribute("src", product.image)

    const productName = document.createElement("h3")
    productName.classList.add("product-name")
    productName.innerText = product.name

    
    productInfo.appendChild(productImage)
    productInfo.appendChild(productName)

    card.appendChild(productInfo)

    cardsContainer.appendChild(card)
}

function renderDulces(){
    for(product of productList){
        if(product.type == dulce){   
            if (product.tamaño == grande){
                renderProducts()  
            } else { null }
        } else { null }
    }
}
function renderSalados(){
    for(product of productList){
        if(product.type == salado){   
            if (product.tamaño == grande){
                renderProducts()
            } else { null }
        } else { null }
    }
}
function renderGalletas(){
    for(product of productList){
        if(product.type == galleta){   
            if (product.tamaño == grande){
                renderProducts()  
            } else { null }
        } else { null }
    }
}
function renderMedianos(){
    for(product of productList){
        if(product.tamaño == mediano){   
            renderProducts()
        } else { null }
    }
}
function renderChicos(){
    for(product of productList){
        if(product.tamaño == chico){   
            renderProducts()
        } else { null }
    }
}

renderSalados();
renderDulces();
renderGalletas();
renderMedianos();
renderChicos();

BotonMenuMovil.addEventListener("click", showMenuMovil);

function showMenuMovil(){
    MenuMovil.classList.toggle("inactiveMovilMenu");
}

const detallesdeProducto = document.getElementById("detalles-de-producto");

const botonCerrarDetallesDeProducto = document.getElementById("boton-cerrar");

botonCerrarDetallesDeProducto.addEventListener("click", cerrarDetallesDeProducto)

function abirirDetallesDeProducto(producto){
    detallesdeProducto.classList.remove("inactive");
    carrito.classList.add("carrito-inactive");
    renderDetallesDeProducto(producto)
}

function cerrarDetallesDeProducto(){
    informacioDelProducto.innerHTML = null
    detallesdeProducto.classList.add("inactive");
    productDetails.pop();
    
}

function renderDetallesDeProducto(product){

    const ImagenNombreDescripcion = document.createElement("div");
    ImagenNombreDescripcion.classList.add("imagen-nombre-descripcion");

    const ImagenProductoEnDetalle = document.createElement("div");
    ImagenProductoEnDetalle.classList.add("imagen-producto-en-detalle");
    const ImagenDetalle = document.createElement("img");
    ImagenDetalle.setAttribute("src", product.image)
    const nombreProducto = document.createElement("h3");
    nombreProducto.innerText = product.name;
    const descripcionDeProducto = document.createElement("p");
    descripcionDeProducto.innerText = product.descripcion;
    
    
    const selectorDeCantidad = document.createElement("form");
    selectorDeCantidad.classList.add("selector-de-cantidad");

    const label = document.createElement("label");
    label.setAttribute("for", "cantidad");
    const span = document.createElement("span");
    span.innerText = "cantidad a pedir:";
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "cantidad-" + product.id)
    const añadirAlCarrito = document.createElement("div");
    añadirAlCarrito.classList.add("anadir-al-carrito");
    const carrito = document.createElement("img");
    carrito.setAttribute("src", "Imagenes/agregarAlcarrito.png")
    carrito.setAttribute("onclick", "agregarAlCarrito(" + product.id + ")" )

    selectorDeCantidad.appendChild(label);
    selectorDeCantidad.appendChild(añadirAlCarrito);

    añadirAlCarrito.appendChild(carrito);
    label.append(span);
    label.appendChild(input);

    ImagenProductoEnDetalle.appendChild(ImagenDetalle);

    ImagenNombreDescripcion.appendChild(ImagenProductoEnDetalle);
    ImagenNombreDescripcion.appendChild(nombreProducto);
    ImagenNombreDescripcion.appendChild(descripcionDeProducto);

    informacioDelProducto.appendChild(ImagenNombreDescripcion);
    informacioDelProducto.appendChild(selectorDeCantidad);
}

function agregarAlCarrito(product){
    const selectorDeCantidad = document.getElementById("cantidad-" + product.id );
    if (selectorDeCantidad.value < 1) {
        alert("Selecciona una cantidad")
    } else {
        if (productInCart.includes(product)){
            alert("Ya tienes este producto en el carrito, si quieres agregar mas, elimina el producto del carrito y vuelve a intentarlo");
        } else {
            productInCart.push(product);
            product.cantidad = selectorDeCantidad.value;
            renderCarrito();
            cerrarDetallesDeProducto();
            alert("Producto agregado con éxito");
            cantidadDeProductsEnCarrito.innerText = productInCart.length;
        }
    }
}

function renderCarrito(){
    carrito.innerHTML = null
    for (product of productInCart){
        const productoEnCarrito = document.createElement("div");
        productoEnCarrito.classList.add("producto-en-carrito");

        const imagenDeProductEnCariito = document.createElement("div");
        imagenDeProductEnCariito.classList.add("imagen-de-producto-en-carrito");
        const imagen = document.createElement("img");
        imagen.setAttribute("src", product.image);
        imagenDeProductEnCariito.appendChild(imagen);

        const informacionEnCarrito = document.createElement("div");
        informacionEnCarrito.classList.add("informacio-en-carrito");
        const nombreDeProducto = document.createElement("h3");
        nombreDeProducto.innerText = product.name;
        const cantidadDeProducto = document.createElement("h4");
        cantidadDeProducto.innerText = "Cantidad";
        const cantidadDeProductoNumero = document.createElement("p");
        cantidadDeProductoNumero.innerText = product.cantidad;
        informacionEnCarrito.appendChild(nombreDeProducto);
        informacionEnCarrito.appendChild(cantidadDeProducto);
        informacionEnCarrito.appendChild(cantidadDeProductoNumero);

        const botonEliminarDeCarrito = document.createElement("h3");
        botonEliminarDeCarrito.innerText = "x"
        botonEliminarDeCarrito.classList.add("boton-quitar-de-carrito");
        botonEliminarDeCarrito.setAttribute("onclick", "eliminarDeCarrito(" + product.id + ")")

        productoEnCarrito.appendChild(imagenDeProductEnCariito);
        productoEnCarrito.appendChild(informacionEnCarrito);
        productoEnCarrito.appendChild(botonEliminarDeCarrito);

        carrito.appendChild(productoEnCarrito);
    }
}

function eliminarDeCarrito(product){
    togglecarrito();
    const eliminar = productInCart.indexOf(product)
    productInCart.splice(eliminar, 1);
    renderCarrito();
    cantidadDeProductsEnCarrito.innerText = productInCart.length;
}

crearPedido.addEventListener("click", hacerPedido)
crearPedidoMov.addEventListener("click", hacerPedido)

function hacerPedido() {
    if (productInCart.length > 0){
        const pedido = document.getElementById("pedido");
        pedido.classList.remove("inactive")
        for (product of productInCart){
            const productoCheckout = document.createElement("div");
            productoCheckout.classList.add("producto-checkut");

            const nombre = document.createElement("h3");
            nombre.innerText = product.name;
            const cantidad = document.createElement("h4");
            cantidad.innerText = "cantidad: " + product.cantidad;
            const precio = document.createElement("h4");
            precio.innerText = "precio: " + product.price;

            productoCheckout.appendChild(nombre);
            productoCheckout.appendChild(cantidad);
            productoCheckout.appendChild(precio);

            listaDeProductosCheckout.appendChild(productoCheckout);
        }
    } else {
        alert("Primer tienes que agregar productos a tu carrito")
    }
}