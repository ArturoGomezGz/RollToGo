const BotonMenuMovil = document.getElementById("boton-menu-movil");
const MenuMovil = document.getElementById("menu-movil");

const seccionProductosSalados = document.getElementById("salados");
const seccionProductosDulces = document.getElementById("dulces");
const seccionProductosGalletas = document.getElementById("galletas");

const seccionSalados = document.getElementById("salados-section");
const seccionDulces = document.getElementById("dulces-section");
const seccionGalletas = document.getElementById("galletas-section");

const botonSaladosSectionNav = document.getElementById("salados-nav-button");
const botonDulcesSectionNav = document.getElementById("dulces-nav-button");
const botonGalletasSectionNav = document.getElementById("galletas-nav-button");
const botonSaladosSectionMovil = document.getElementById("salados-nav-button-mov");
const botonDulcesSectionMovil = document.getElementById("dulces-nav-button-mov");
const botonGalletasSectionMovil = document.getElementById("galletas-nav-button-mov");

const informacioDelProducto = document.getElementById("informacio-del-producto");

const cantidadDeProductsEnCarrito = document.getElementById("cantidad-productos-en-carrito");

const crearPedido = document.getElementById("hacer-pedido");
const crearPedidoMov = document.getElementById("hacer-pedido-mov");

const listaDeProductosCheckout = document.getElementById("lista-de-productos-checkout");

botonSaladosSectionNav.addEventListener("click", () => scrollToSection(seccionSalados));
botonDulcesSectionNav.addEventListener("click", () => scrollToSection(seccionDulces));
botonGalletasSectionNav.addEventListener("click", () => scrollToSection(seccionGalletas));
botonSaladosSectionMovil.addEventListener("click", () => scrollToSection(seccionSalados));
botonDulcesSectionMovil.addEventListener("click", () => scrollToSection(seccionDulces));
botonGalletasSectionMovil.addEventListener("click", () => scrollToSection(seccionGalletas));

const carrito = document.getElementById("carrito");
const botonCarrito = document.getElementById("carritoButton");

botonCarrito.addEventListener("click", togglecarrito);

cantidadDeProductsEnCarrito.innerText = 0 ;

function togglecarrito(){
    if (productInCart.length == 0) {
        alert("El carrito esta vacío")
    } else {
        carrito.classList.toggle("carrito-inactive");
    }
}

function scrollToSection(seccion){
    seccion.scrollIntoView({
        behavior: "smooth"
    })
}

let productList = [];
let productInCart = [];
let productDetails = [];

let rolloPP = {
    id: "rolloPP",
    name: "Rollo De Peperoni",
    price: 20,
    imagen: "Imagenes/RollDeCanela.jpeg",
    cantidad: 0,
    type: "salado"
}
let rolloPH = {
    id: "rolloPH",
    name: "Rollo De Philadelphia",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    cantidad: 0,
    type: "salado"
}
let rolloIT = {
    id: "rolloIT",
    name: "Rollo Italiano",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    cantidad: 0,
    type: "salado"
}
let rolloCHAM = {
    id: "rolloCHAM",
    name: "Rollo De Champiñones",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    cantidad: 0,
    type: "salado"
}
let rolloCHO = {
    id: "rolloCHO",
    name: "Rollo De Chorizo",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    cantidad: 0,
    type: "salado"
}
let rollCHO = {
    id: "rollCHO",
    name: "Roll De Chocolate",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    cantidad: 0,
    type: "dulce"
}
let rollCA = {
    id: "rollCA",
    name: "Roll De Canela Con Manzana",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    cantidad: 0,
    type: "dulce"
}
let galletaCH = {
    id: "galletaCH",
    name: "Galleta De Chocolate",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    cantidad: 0,
    type: "galleta"
}
let galletaAV = {
    id: "galletaAV",
    name: "Galleta De Avena",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    cantidad: 0,
    type: "galleta"
}

function createProducts(){
    productList.push(rolloPP);
    productList.push(rolloPH);
    productList.push(rolloIT);
    productList.push(rolloCHAM);
    productList.push(rolloCHO);
    productList.push(rollCHO);
    productList.push(rollCA);
    productList.push(galletaCH);
    productList.push(galletaAV);
}
createProducts();


BotonMenuMovil.addEventListener("click", showMenuMovil);
function showMenuMovil(){
    MenuMovil.classList.toggle("inactiveMovilMenu");
}

function renderProducts(){
    
    const cardsContainer = document.getElementById(product.type + "s")

    const card = document.createElement("div")
    card.classList.add("card")
    card.setAttribute("id", product.id)
    card.setAttribute("onclick", "abirirDetallesDeProducto(" + product.id + ")")
    
    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

    const productImage = document.createElement("img")
    productImage.setAttribute("src", product.imagen)

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
        if(product.type == "dulce"){   
        renderProducts()    
        } else {
            null
        }
    }
}
function renderSalados(){
    for(product of productList){
        if(product.type == "salado"){   
        renderProducts()    
        } else {
            null
        }
    }
}
function renderGalletas(){
    for(product of productList){
        if(product.type == "galleta"){   
        renderProducts()    
        } else {
            null
        }
    }
}

renderSalados();
renderDulces();
renderGalletas();

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
    ImagenDetalle.setAttribute("src", product.imagen)
    const nombreProducto = document.createElement("h3");
    nombreProducto.innerText = product.name;
    const descripcionDeProducto = document.createElement("p");
    descripcionDeProducto.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi atque sit tempore magna";
    
    
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
        imagen.setAttribute("src", product.imagen);
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