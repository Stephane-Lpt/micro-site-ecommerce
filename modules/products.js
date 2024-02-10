class Product{
    constructor(ref, price, description){
        this.ref = ref;
        this.price = price;
        this.description = description;
    }
}

export let products= [new Product('ref1', 100, 'description1'), new Product('ref2', 200, 'description2'), new Product('ref3', 300, 'description3')];

export function search(keywords){
    return products.filter(product => product.ref.includes(keywords) || product.description.includes(keywords));
}