const BotonMenuMovil = document.getElementById("boton-menu-movil");
const MenuMovil = document.getElementById("menu-movil");

const seccionProductosSalados = document.getElementById("salados");
const seccionProductosDulces = document.getElementById("dulces");
const seccionProductosGalletas = document.getElementById("galletas");
const seccionProductosMedianos = document.getElementById("medianos");
const seccionProductosChicos = document.getElementById("chicos");

const seccionRollos = document.getElementById("rollos-section");
const seccionRoles = document.getElementById("roles-section");
const seccionGalletas = document.getElementById("galletas-section");
const seccionOtros = document.getElementById("otros-section");

const botonRollosSectionNav = document.getElementById("rollos-nav-button");
const botonRolesSectionNav = document.getElementById("roles-nav-button");
const botonGalletasSectionNav = document.getElementById("galletas-nav-button");
const botonOtrosSectionNav = document.getElementById("otros-nav-button");
const botonRollosSectionMovil = document.getElementById("rollos-nav-button-mov");
const botonRolesSectionMovil = document.getElementById("roles-nav-button-mov");
const botonGalletasSectionMovil = document.getElementById("galletas-nav-button-mov");
const botonOtrosSectionMovil = document.getElementById("otros-nav-button-mov");

const informacioDelProducto = document.getElementById("informacio-del-producto");

const cantidadDeProductsEnCarrito = document.getElementById("cantidad-productos-en-carrito");

const crearPedido = document.getElementById("hacer-pedido");
const crearPedidoMov = document.getElementById("hacer-pedido-mov");

const listaDeProductosCheckout = document.getElementById("lista-de-productos-checkout");

botonRollosSectionNav.addEventListener("click", () => scrollToSection(seccionRollos));
botonRolesSectionNav.addEventListener("click", () => scrollToSection(seccionRoles));
botonGalletasSectionNav.addEventListener("click", () => scrollToSection(seccionGalletas));
botonOtrosSectionNav.addEventListener("click", () => scrollToSection(seccionOtros));
botonRollosSectionMovil.addEventListener("click", () => scrollToSection(seccionRollos));
botonRolesSectionMovil.addEventListener("click", () => scrollToSection(seccionRoles));
botonGalletasSectionMovil.addEventListener("click", () => scrollToSection(seccionGalletas));
botonOtrosSectionMovil.addEventListener("click", () => scrollToSection(seccionOtros));

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
