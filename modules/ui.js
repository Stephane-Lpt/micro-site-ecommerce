import {cart} from "./cart.js";

function displayProduct(product) {
    let productBox = document.createElement('div');
    productBox.className = "product";
    productBox.innerHTML = `<div class="photo">
						picto
						<a class="product-add2cart">
							<span class="mdi mdi-cart"></span>
						</a>
					</div>
					<div class="details">
						<div class="details-top">
							<strong class="bigger">${product.ref}</strong>
							<strong class="bigger">${product.price} en €</strong>
						</div>
						<div class="details-description">
                            ${product.description}
						</div>
					</div>`;


    let iconCart = productBox.querySelector(".product-add2cart");
    productBox.addEventListener("click", (event) => {
        cart.addToCart(product);
        console.log("produit ajouté !");
    });

    document.getElementById("product-list").appendChild(productBox);
}

function buildProductsList(products){
    let productsList = document.getElementById("product-list");
    while(productsList.firstChild) productsList.removeChild(productsList.firstChild);

    for(let product of products){
        displayProduct(product);
    }
}

function displayCart() {
    const cartTable = document.getElementById('cart-content');
    const totalProducts = document.getElementById('total-products');
    const cartTotal = document.getElementById('cart-total');

    let tableContent = cart.content.map(item => `<tr><td>${item.product.ref}</td><td>${item.qty}</td><td>${item.product.price}</td></tr>`).reduce((a, b) => a + b, '');
    cartTable.innerHTML = tableContent;

    let totalPrice = cart.genericCalc((total, item) => total + (item.qty * item.product.price), 0);
    cartTotal.textContent = totalPrice + ' €';
    totalProducts.textContent = cart.content.length;
}

export {buildProductsList, displayCart};

