const products = [
{
name: "Matte Lipstick",
price: 499,
image: "images/lipstick.jpg"
},
{
name: "Liquid Foundation",
price: 799,
image: "images/foundation.jpg"
},
{
name: "Waterproof Eyeliner",
price: 299,
image: "images/eyeliner.jpg"
},
{
name: "Blush Powder",
price: 399,
image: "images/blush.jpg"
}
];

function displayProducts(){

const container = document.getElementById("product-list");

products.forEach(product => {

const card = document.createElement("div");
card.classList.add("product");

card.innerHTML = `
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p class="price">₹${product.price} INR</p>
<button onclick="addToCart('${product.name}',${product.price})">Add to Cart</button>
<button onclick="buyNow('${product.name}',${product.price})">Buy Now</button>
`;

container.appendChild(card);

});

}

let cart = [];

function addToCart(name,price){
cart.push({name,price});
alert(name + " added to cart");
}

function buyNow(name,price){
alert("You are buying " + name + " for ₹" + price + " INR");
}

window.onload = displayProducts;