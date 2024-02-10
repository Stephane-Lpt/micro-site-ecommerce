class Cart{
    constructor(){
        this.content =  [];
    }

    addToCart(product){
        let itemAlreadyInItem = this.content.find(item => item.product === product);

        if(itemAlreadyInItem){
            itemAlreadyInItem.qty++;
        }else{
            this.contenu.push({product: product, qty:1});
        }
    }
}

export let cart = new Cart();