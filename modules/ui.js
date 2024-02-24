import {cart} from "./cart.js";

// Génère la boîte produit et l'ajoute à la liste de produits
function displayProduct(product, callback) {

    // Création de la boîte produit
    let productBox = document.createElement('div');
    productBox.className = "product";
    productBox.innerHTML = `<div class="photo">
						<img src="${product.photo || 'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'}" alt="picto">
						<a class="product-add2cart">
							<span class="mdi mdi-cart"></span>
						</a>
					</div>
					<div class="details">
						<div class="details-top">
							<strong class="bigger">${product.ref}</strong>
							<strong class="bigger">${product.price}€</strong>
						</div>
						<div class="details-description">
                            ${product.description}
						</div>
					</div>`;

    // Ajout d'un listener sur l'icône "ajouter au panier"
    let iconCart = productBox.querySelector(".product-add2cart");
    iconCart.addEventListener("click", (event) => {
        callback(product);
    });
    // Ajout de la boîte créée à la liste de produits
    document.getElementById("product-list").appendChild(productBox);
}

// Affiche tous les produits de la liste passée en paramètre
function buildProductsList(products, callback){
    let productsList = document.getElementById("product-list");
    while(productsList.firstChild) productsList.removeChild(productsList.firstChild);

    for(let product of products){
        displayProduct(product, callback);
    }
}

// Affiche le panier avec son contenu (référence, quantité, prix) et son total
function displayCart() {
    const cartTable = document.getElementById('cart-content');
    const totalProducts = document.getElementById('total-products');
    const cartTotal = document.getElementById('cart-total');

    cartTable.innerHTML = cart.content.map(item => `<tr><td>${item.product.ref}</td><td>${item.qty}</td><td>${item.product.price}</td></tr>`).reduce((a, b) => a + b, '');

    let totalPrice = cart.genericCalc((total, item) => total + (item.qty * item.product.price), 0);
    cartTotal.textContent = totalPrice + ' €';
    totalProducts.textContent = cart.content.length;
}

export {buildProductsList, displayCart};

