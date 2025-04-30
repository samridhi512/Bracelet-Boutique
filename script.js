let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelectorAll('.bracelet-item button');
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    addButton.forEach(function(button) {
        button.addEventListener('click', function() {
            const braceletItem = button.parentNode;
            const braceletPrice = braceletItem.querySelector('p').textContent;
            const braceletName = braceletItem.querySelector('h3').textContent;

            cart.push({
                name: braceletName,
                price: braceletPrice
            });

            updateCart();
        });
    });

    checkoutBtn.addEventListener('click', function() {
        alert('Checkout successful!');
        cart = [];
        updateCart();
    });

    function updateCart() {
        cartList.innerHTML = '';
        cartTotal.textContent = 'Total: ₹0.00';

        cart.forEach(function(item) {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - ₹${item.price}`;
            cartList.appendChild(cartItem);

            const totalPrice = cart.reduce(function(acc, current) {
                return acc + parseFloat(current.price.replace('₹', ''));
            }, 0);

            cartTotal.textContent = `Total: ₹${totalPrice.toFixed(2)}`;
        });
    }
});