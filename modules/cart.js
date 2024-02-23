import {displayCart} from './ui.js';
class Cart{
    constructor(){
        this.content =  [];
    }

    addToCart(product){
        let itemAlreadyInItem = this.content.find(item => item.product === product);

        if(itemAlreadyInItem){
            itemAlreadyInItem.qty++;
        }else{
            this.content.push({product: product, qty:1});
        }
        displayCart();
    }

    genericCalc(callback, initialValue) {
        return this.content.reduce(callback, initialValue);
    }

    emptyCart(){
        this.content = [];
    }
}

export let cart = new Cart();