let = productList = [];
let productInCart = [];
let productDetails = [];

// Tipos
const rol = "rol";
const rollo = "rollo";
const otro = "otro";
const galleta = "galleta";


// Productos
function Producto(idProducto, name, type, image, description) {
    this.id = idProducto;
    this.name = name;
    this.type = type;
    this.image = image;
    this.description = description;
    productList.push(this)
}

let rollPP = new Producto(1, "Rollo de peperoni ", rollo, "Productos/rolloPP.jpg", null,"delicioso rollo de pizza de peperoni", );
let rollPH = new Producto(2, "Rollo de jamon con philadelphia ", rollo, "Productos/rolloPH.jpg", null, "delicioso rollo de jamon con philadelphia", );
let rolloIT = new Producto(3, "Rollo Italiano", rollo, "Productos/rolloIT.jpg", null, "Undelicioso rollo de pizza italiano", );
let rolloHA = new Producto(4, "Rollo hawaiano ", rollo, "Productos/rolloHA.jpg", null, "Rollo de pizza hawaiano con piña, queso y salsa de tomate", );
let rolloCHAM = new Producto(5, "Rollo de champiñones ", rollo, "Productos/rolloCHAM.jpg", null, "Un delicioso rollo de champiñones", );
let rolloCHO = new Producto(6, "Rollo de chorizo ", rollo, "Productos/rolloCHO.jpg", null, "Un delicioso rollo para los amanetdes del chorizo con topping de queso", );
let rollCHO = new Producto(7, "Roll de chocolate ", rol,"Productos/rollCHO.jpg", null, "Dulce roll de chocolate", );
let rollCA = new Producto(8, "Roll de canela con manzana ", rol, "Productos/rollCA.jpg", null, "Dulce roll de canela con manzana", );
let galletaCH = new Producto(9, "Galleta de chocolate ", galleta, "Productos/galletaCH.jpg", null, "Galleta con chispas de chocolate", );
let galletaAV = new Producto(10, "Galleta de avena ", galleta, "Productos/galletaAV.jpg", null, "Deliciosa galleta de avena", );

function renderProducts(){
    let cardsContainer = null

    cardsContainer = document.getElementById(product.type)

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

function renderRoles(){
    for(product of productList){
        if(product.type == rol){   
            renderProducts()  
        } else { null }
    }
}
function renderRollos(){
    for(product of productList){
        if(product.type == rollo){   
            renderProducts()
        } else { null }
    }
}
function renderGalletas(){
    for(product of productList){
        if(product.type == galleta){   
            renderProducts()  
        } else { null }
    }
}
function renderOtros(){
    for(product of productList){
        if(product.type == otro){   
            renderProducts()  
        } else { null }
    }
}


renderRoles();
renderRollos();
renderGalletas();
renderOtros();

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
