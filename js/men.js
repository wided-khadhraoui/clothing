let cartItems = [];

function addToCart(productName, price) {
    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
        // If the item already exists, increment the quantity
        existingItem.quantity++;
    } else {
        // If the item doesn't exist, add it to the cart
        const item = { name: productName, price: price, quantity: 1 };
        cartItems.push(item);
    }

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear previous items
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }

    // Add current items
    let total = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity} `;
        
        // Add a button to modify the quantity
        const modifyButton = document.createElement('button');
        modifyButton.innerHTML = '<i class="fas fa-edit"></i> Modify';
        modifyButton.onclick = () => modifyQuantity(item.name);
        listItem.appendChild(modifyButton);

        // Add a button to remove the item
        const removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fas fa-trash-alt"></i> Remove';
        removeButton.onclick = () => removeFromCart(item.name);
        listItem.appendChild(removeButton);

        cartList.appendChild(listItem);
        total += item.price * item.quantity;
    });

    // Update total
    cartTotal.textContent = total;
}

function clearCart() {
    cartItems = [];
   
}