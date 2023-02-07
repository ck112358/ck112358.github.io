class Product {
  constructor(
    public name: string, 
    public image: string, 
    public description: string, 
    public price: number
  ) {}
}

const products: Product[] = [
  new Product("Product 1", "image1.jpg", "Description 1", 100),
  new Product("Product 2", "image2.jpg", "Description 2", 200),
  new Product("Product 3", "image3.jpg", "Description 3", 300),
];

function createProductElement(product: Product) {
  const productContainer = document.createElement("li");
  const productImage = document.createElement("img");
  const productName = document.createElement("h3");
  const productDescription = document.createElement("p");
  const productPrice = document.createElement("p");
  const addToCartButton = document.createElement("button");

  productImage.src = product.image;
  productName.innerText = product.name;
  productDescription.innerText = product.description;
  productPrice.innerText = `$${product.price}`;
  addToCartButton.innerText = "Add to Cart";

  productContainer.appendChild(productImage);
  productContainer.appendChild(productName);
  productContainer.appendChild(productDescription);
  productContainer.appendChild(productPrice);
  productContainer.appendChild(addToCartButton);

  return productContainer;
}

const featuredProducts = document.querySelector("#featured-products") as HTMLElement;

products.forEach((product) => {
  featuredProducts.appendChild(createProductElement(product));
});
