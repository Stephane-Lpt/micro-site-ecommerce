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
    document.getElementById("product-list").appendChild(productBox);
}

function buildProductsList(products){
    let productsList = document.getElementById("product-list");
    while(productsList.firstChild) productsList.removeChild(productsList.firstChild);

    for(let product of products){
        displayProduct(product);
    }
}

export default buildProductsList;

