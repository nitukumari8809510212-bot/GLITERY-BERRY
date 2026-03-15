let cart = JSON.parse(localStorage.getItem("cart")) || []
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

function loadProducts(){

const container = document.getElementById("productContainer")

if(!container) return

container.innerHTML = ""

products.forEach((p,index)=>{

container.innerHTML += `

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p class="rating">${p.rating}</p>

<p>₹${p.price}</p>

<button onclick="addCart(${index})">Add to Cart</button>

<button onclick="addWishlist(${index})">❤️ Wishlist</button>

<button onclick="buyNow(${index})">Buy Now</button>

</div>

`

})

}

function addCart(i){

cart.push(products[i])

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart 🛒")

}

function addWishlist(i){

wishlist.push(products[i])

localStorage.setItem("wishlist",JSON.stringify(wishlist))

alert("Added to wishlist ❤️")

}

function buyNow(i){

let orders = JSON.parse(localStorage.getItem("orders")) || []

orders.push(products[i])

localStorage.setItem("orders",JSON.stringify(orders))

alert("Order placed. Proceed to payment.")

}

function liveSearch(){

let input = document.getElementById("searchBar").value.toLowerCase()

let resultBox = document.getElementById("searchResults")

if(!resultBox) return

resultBox.innerHTML = ""

if(input.length === 0){

resultBox.style.display = "none"

return

}

products.forEach((product)=>{

if(product.name.toLowerCase().includes(input)){

resultBox.style.display = "block"

resultBox.innerHTML += `

<div class="searchItem">

<img src="${product.image}" width="40">

<span>${product.name}</span>

<p>₹${product.price}</p>

</div>

`

}

})

}

loadProducts()