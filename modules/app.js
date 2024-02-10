import {products, search} from "./products.js";
import buildProductsList from "./ui.js";

function init(){
    buildProductsList(products);

    let searchField = document.getElementById("product-search");
    searchField.addEventListener("keyup", (event) => {
        if(event.key === 'Enter'){
            let searchedProducts = search(searchField.value);
            buildProductsList(searchedProducts);
        }
    });
}

export default init;