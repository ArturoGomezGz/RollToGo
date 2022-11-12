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

botonSaladosSectionNav.addEventListener("click", () => scrollToSection(seccionSalados));
botonDulcesSectionNav.addEventListener("click", () => scrollToSection(seccionDulces));
botonGalletasSectionNav.addEventListener("click", () => scrollToSection(seccionGalletas));
botonSaladosSectionMovil.addEventListener("click", () => scrollToSection(seccionSalados));
botonDulcesSectionMovil.addEventListener("click", () => scrollToSection(seccionDulces));
botonGalletasSectionMovil.addEventListener("click", () => scrollToSection(seccionGalletas));

function scrollToSection(seccion){
    seccion.scrollIntoView({
        behavior: "smooth"
    })
}

let productList = [];
let productInCart = [];

let rolloPP = {
    id: "rolloPP",
    name: "Rollo De Peperoni",
    price: 20,
    type: "salado"
}
let rolloPH = {
    id: "rolloPH",
    name: "Rollo De peperoni",
    price: 20,
    type: "salado"
}
let rolloIT = {
    id: "rolloIT",
    name: "Rollo Italiano",
    price: 20,
    type: "salado"
}
let rolloCHAM = {
    id: "rolloCHAM",
    name: "Rollo De Champiñones",
    price: 20,
    type: "salado"
}
let rolloCHO = {
    id: "rolloCHO",
    name: "Rollo De Chorizo",
    price: 20,
    type: "salado"
}
let rollCHO = {
    id: "rollCHO",
    name: "Roll De Chocolate",
    price: 20,
    type: "dulce"
}
let rollCA = {
    id: "rollCA",
    name: "Roll De Canela Con Manzana",
    price: 20,
    type: "dulce"
}
let galletaCH = {
    id: "galletaCH",
    name: "Galleta De Chocolate",
    price: 20,
    type: "galleta"
}
let galletaAV = {
    id: "galletaAV",
    name: "Galleta De Avena",
    price: 20,
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
    
    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

    const productImage = document.createElement("img")
    productImage.setAttribute("src", "Imagenes/MisterRollo.jpeg")

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
            console.log(product.id + " si se renderizo correctamente")
        }
    }
}
function renderSalados(){
    for(product of productList){
        if(product.type == "salado"){   
        renderProducts()    
        } else {
            console.log(product.id + " si se renderizo correctamente")
        }
    }
}
function renderGalletas(){
    for(product of productList){
        if(product.type == "galleta"){   
        renderProducts()    
        } else {
            console.log(product.id + " si se renderizo correctamente")
        }
    }
}

renderSalados();
renderDulces();
renderGalletas();