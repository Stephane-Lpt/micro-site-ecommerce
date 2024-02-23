import {products, search} from "./products.js";
import {buildProductsList, displayCart} from "./ui.js";
import {cart} from "./cart.js";

function init(){
    buildProductsList(products);

    let searchField = document.getElementById("product-search");
    searchField.addEventListener("keyup", (event) => {
        if(event.key === 'Enter'){
            let searchedProducts = search(searchField.value);
            buildProductsList(searchedProducts);
        }
    });


    let emptyCartLink = document.getElementById("empty-cart");
    emptyCartLink.addEventListener("click", (event) => {
        cart.emptyCart();
        displayCart();
    });
}

export default init;