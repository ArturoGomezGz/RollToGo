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

