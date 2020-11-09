// This is for the Cart section //

// variables //
var quant;
var glaze;
var price;

var cart = [];

// objects //
function bunSelection(quant, glaze, price){
	this.buntitle = title;
	this.quant = quant;
	this.glaze = glaze;
	this.price = price;
}


//Options from product detail //
function glazeOne() {
	bunSelection.glaze= document.getElementById("glaze1").value;
}

function glazeTwo() {
	bunSelection.glaze= document.getElementById("glaze2").value;
}

function glazeThree() {
	bunSelection.glaze= document.getElementById("glaze3").value;
}

function glazeFour() {
	bunSelection.glaze= document.getElementById("glaze4").value;
}

function quantOne() {
	bunSelection.quant= document.getElementById("quant1").value;
	bunSelection.price = 2;
}

function quantTwo() {
	bunSelection.quant= document.getElementById("quant2").value;
	bunSelection.price = 6;
}

function quantThree() {
	bunSelection.quant= document.getElementById("quant3").value;
	bunSelection.price = 10;
}

function quantFour() {
	bunSelection.quant= document.getElementById("quant4").value;
	bunSelection.price = 20;
}



//Add item to cart
var addToCartBtn = document.getElementsByClassName('add-to-cart-btn');
for (var i = 0; i < addToCartBtn.length; i++){
	var button = addToCartBtn[i]
	button.addEventListener('click', addToCartClicked);
}



// add name, price, quantity in cart //
function addToCartClicked(event){
	// add to cart button 
	var button = event.target; 
	// modal-bg div
	var modalBg = button.parentElement.parentElement.parentElement.parentElement;
	// console.log(modalBg)
	var title = modalBg.getElementsByClassName('bun-name')[0].innerText;

	var modalContent = button.parentElement.parentElement;

	if(quant !== null && glaze !== null){
        cart.push([title, bunSelection.quant, bunSelection.glaze, bunSelection.price]);
        //console.log(cart)

        //store it to local storage
        var JSONcart = JSON.stringify(cart);
        localStorage.setItem("cart", JSONcart);
    }
    displayCartNumber();	
}


// Remove Items From Cart //
// select one of remove button from cart 
var removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++){
	var button = removeBtn[i];
	button.addEventListener('click', removeCartItem);
};

//removes cart item 
function removeCartItem(item) {

	// item is the remove button

	// get index of the cart item /row
	var index = item.parentElement.parentElement.parentElement.getAttribute("index");
	//console.log(index);
	var getCart = JSON.parse(localStorage.getItem("cart"));

	// remove item at index from cart
	getCart.splice(index, 1);

	localStorage.setItem("cart", JSON.stringify(getCart));
	updateCart();
}


// Show number of items in the cart icon //
function displayCartNumber() {
	var getCart = JSON.parse(localStorage.getItem("cart"));
	var cartTotal = document.getElementById("cartnumber");
	// cartTotal.appendChild(document.createTextNode(getCart.length));
	document.getElementById("cartnumber").innerHTML = getCart.length;
}

// Store product details in cart //
function updateCart() {

	// Getting the cart stored in local storage 
	var getCart = JSON.parse(localStorage.getItem("cart"));
	console.log(getCart, getCart.length)

	// Resetting the .all-cart-items div every time function is called 
	document.getElementById("all-cart-items").innerHTML = "";

	// Getting element to display the total price of the items in cart (tprice)
	var totalPriceLabel = document.getElementById("tprice");
	
	// when nothing is in the cart  
	if (getCart.length == 0) {
		document.getElementById("all-cart-items").innerHTML = "Your cart is empty";
		totalPriceLabel.innerHTML = "$" + 0
	}
	else {
		// initialize total price
		var totalPrice = 0;
		for (var i = 0; i < getCart.length; i++) {

			// creating div element for each cart row 
			var cartItem = document.createElement("div");
			cartItem.setAttribute("class", "cart-item-grid");
			// set index of cart item for deletion later
			cartItem.setAttribute("index", i);

			// adding image to the row
			var img = document.createElement("img");
			img.setAttribute("src", "bun_photos/detail_original.png");
			img.setAttribute("class", "cart-tn");
			cartItem.append(img);

			// div for item information
			var itemGrid = document.createElement("div");
			itemGrid.setAttribute("class", "cart-item-info1");

			// div for item title 
			var itemTitle = document.createElement("div");
			itemTitle.setAttribute("class", "palatino-tw-bold");
			var title = document.createTextNode(getCart[i][0] + ", " + getCart[i][2]);

			// h4 element (shows quantity)
			var quantity = document.createElement("h4");
			quantity.setAttribute("class", "cart-item-quant");
			quantity.setAttribute("style", "margin-right:10px;");
			quantity.appendChild(document.createTextNode("Quantity: " + getCart[i][1]));

			// remove button 
			var remove = document.createElement("button");
			remove.setAttribute("type", "button");
			remove.setAttribute("class", "remove-btn remove-action");
			remove.setAttribute("onclick", "removeCartItem(this);");
			remove.appendChild(document.createTextNode("Remove"));

			//div for item price 
			var priceInfo = document.createElement("div");
			priceInfo.setAttribute("class", "cart-item-info2");
			var price = document.createElement("div");
			price.setAttribute("class", "palatino-tw-bold cart-item-price");
			// add text for the price 
			price.appendChild(document.createTextNode("$" + getCart[i][3]));
			priceInfo.appendChild(price)

			// add to total price
			totalPrice += getCart[i][3]

			// append all elements 
			itemTitle.appendChild(title);
			itemTitle.appendChild(quantity);
			itemTitle.appendChild(remove);

			itemGrid.appendChild(itemTitle);

			cartItem.appendChild(itemGrid);
			cartItem.appendChild(priceInfo);
			allCartItems = document.getElementById("all-cart-items");
			allCartItems.appendChild(cartItem);
		}
		
		totalPriceLabel.innerHTML = "$" + totalPrice
	}
	displayCartNumber();
}







