import {products, search} from "./products.js";
import {buildProductsList, displayCart} from "./ui.js";
import {cart} from "./cart.js";

// Fonction d'initialisation de l'application
function init(){

    // Fonctionnalité : Ajout de produits au panier (la fonction est une callback passée à buildProductsList qui sera appelée lorsqu'on cliquera sur l'icône "ajouter au panier")
    buildProductsList(products, function (product) {
        cart.addToCart(product);
        console.log("produit ajouté !");
    });

    // Fonctionnalité : Recherche de produits
    let searchField = document.getElementById("product-search");
    searchField.addEventListener("keyup", (event) => {
        if(event.key === 'Enter'){
            let searchedProducts = search(searchField.value);
            buildProductsList(searchedProducts);
        }
    });

    // Fonctionnalité : Vider le panier
    let emptyCartLink = document.getElementById("empty-cart");
    emptyCartLink.addEventListener("click", (event) => {
        cart.emptyCart(); // Pour réinitialiser le panier avant le nouvel affichage
        displayCart(); // pour mettre à jour l'affichage du panier
    });

    // Affiche par défaut le contenu du panier au chargement de la page (prend son sens si le panier est persistant (localStorage) car on veut afficher le contenu du panier même après un rechargement de la page)
    displayCart();
}

export default init;