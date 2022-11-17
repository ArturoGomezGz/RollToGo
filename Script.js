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

botonSaladosSectionNav.addEventListener("click", () => scrollToSection(seccionSalados));
botonDulcesSectionNav.addEventListener("click", () => scrollToSection(seccionDulces));
botonGalletasSectionNav.addEventListener("click", () => scrollToSection(seccionGalletas));
botonSaladosSectionMovil.addEventListener("click", () => scrollToSection(seccionSalados));
botonDulcesSectionMovil.addEventListener("click", () => scrollToSection(seccionDulces));
botonGalletasSectionMovil.addEventListener("click", () => scrollToSection(seccionGalletas));

const carrito = document.getElementById("carrito");
const botonCarrito = document.getElementById("carritoButton");

botonCarrito.addEventListener("click", togglecarrito);

function togglecarrito(){
    carrito.classList.toggle("carrito-inactive")
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
    type: "salado"
}
let rolloPH = {
    id: "rolloPH",
    name: "Rollo De Philadelphia",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    type: "salado"
}
let rolloIT = {
    id: "rolloIT",
    name: "Rollo Italiano",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    type: "salado"
}
let rolloCHAM = {
    id: "rolloCHAM",
    name: "Rollo De Champiñones",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    type: "salado"
}
let rolloCHO = {
    id: "rolloCHO",
    name: "Rollo De Chorizo",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    type: "salado"
}
let rollCHO = {
    id: "rollCHO",
    name: "Roll De Chocolate",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    type: "dulce"
}
let rollCA = {
    id: "rollCA",
    name: "Roll De Canela Con Manzana",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    type: "dulce"
}
let galletaCH = {
    id: "galletaCH",
    name: "Galleta De Chocolate",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
    type: "galleta"
}
let galletaAV = {
    id: "galletaAV",
    name: "Galleta De Avena",
    price: 20,
    imagen: "Imagenes/MisterRollo.jpeg",
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
    const remover1 = document.querySelector(".imagen-nombre-descripcion")
    const remover2 = document.querySelector(".selector-de-cantidad")
    detallesdeProducto.classList.add("inactive");
    productDetails.pop();
    remover1.remove()
    remover2.remove()
    
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
    const añadirAlCarrito = document.createElement("div");
    añadirAlCarrito.classList.add("anadir-al-carrito");
    const carrito = document.createElement("img");
    carrito.setAttribute("src", "Imagenes/agregarAlcarrito.png")

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