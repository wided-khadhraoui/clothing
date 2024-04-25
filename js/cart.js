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

function removeFromCart(productName) {
    cartItems = cartItems.filter(item => item.name !== productName);
    updateCart();
}

function updateCart() {
    const cartTable = document.getElementById('cart-table');
    const cartItemsBody = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    while (cartItemsBody.firstChild) {
        cartItemsBody.removeChild(cartItemsBody.firstChild);
    }

    let total = 0;
    cartItems.forEach(item => {
        const row = cartItemsBody.insertRow();
        
        const cellProduct = row.insertCell(0);
        cellProduct.textContent = item.name;

        const cellPrice = row.insertCell(1);
        cellPrice.textContent = `$${item.price.toFixed(2)}`;

        const cellQuantity = row.insertCell(2);
        cellQuantity.textContent = item.quantity;

        const cellTotal = row.insertCell(3);
        const itemTotal = item.price * item.quantity;
        cellTotal.textContent = `$${itemTotal.toFixed(2)}`;
        total += itemTotal;

        const cellAction = row.insertCell(4);
        const removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fas fa-trash-alt" align="center"></i> '
        removeButton.addEventListener('click', () => removeFromCart(item.name));
        cellAction.appendChild(removeButton);
    });

    cartTotal.textContent = total.toFixed(2);
}

function clearCart() {
    cartItems = [];
    updateCart();
}

function toggleCart() {
    
}




function addToCartInCartPage(productName, price) {
    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
        // Si l'article existe déjà, incrémentez la quantité
        existingItem.quantity++;
    } else {
        // Si l'article n'existe pas, ajoutez-le au panier
        const item = { name: productName, price: price, quantity: 1 };
        cartItems.push(item);
    }

    updateCart();
}

// Fonction updateCart() et autres fonctions du panier restent inchangées

