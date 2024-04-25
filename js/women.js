let cartItems = [];

function addToCart(productName, price) {
    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        const item = { name: productName, price: price, quantity: 1 };
        cartItems.push(item);
    }

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear previous items
    cartList.innerHTML = '';

    // Add current items
    let total = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity} `;

        // Add a button to modify the quantity
        const modifyButton = createButton('Modify', () => modifyQuantity(item.name));
        listItem.appendChild(modifyButton);

        // Add a button to remove the item
        const removeButton = createButton('Remove', () => removeFromCart(item.name));
        listItem.appendChild(removeButton);

        cartList.appendChild(listItem);
        total += item.price * item.quantity;
    });

    // Update total
    cartTotal.textContent = total;
}

function createButton(text, clickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
}

function modifyQuantity(productName) {
    // Implement modification logic as needed
    // For example, you can prompt the user for a new quantity
    updateCart();
}

function removeFromCart(productName) {
    // Implement removal logic as needed
    // For example, you can use array filter to remove the item
    cartItems = cartItems.filter(item => item.name !== productName);
    updateCart();
}

function clearCart() {
    cartItems = [];
    updateCart();
}
// women.js

function addToCart(productName, price) {
    // Appeler la fonction addToCart du script cart.js avec les détails du produit
    addToCartInCartPage(productName, price);
}
