import {displayCart} from './ui.js';
class Cart{
    constructor(){
        // Récupération du panier dans le localStorage ou initialisation d'un panier vide si rien n'avait été sauvegardé
        this.content =  JSON.parse(localStorage.getItem('cart')) || [];
    }

    // Ajoute d'un produit au panier
    addToCart(product){
        // On vérifie si le produit est déjà dans le panier
        let itemAlreadyInItem = this.content.find(item => item.product.ref === product.ref); // Je vérifie bien la référence du produit et non pas l'objet en lui-même.

        // Si le produit est déjà dans le panier, on incrémente la quantité
        if(itemAlreadyInItem){
            itemAlreadyInItem.qty++;
        }else{
            this.content.push({product: product, qty:1}); // Sinon, on ajoute le produit au panier
        }

        // On sauvegarde le panier dans le localStorage
        localStorage.setItem('cart', JSON.stringify(this.content));

        // On actualise la vue du panier
        displayCart();
    }

    // Renvoie le total du panier
    genericCalc(callback, initialValue) {
        return this.content.reduce(callback, initialValue);
    }

    // Vide le panier
    emptyCart(){
        this.content = [];
        localStorage.removeItem('cart');
    }
}

// On exporte une instance unique de la classe Cart
export let cart = new Cart();