let cart = [];

function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const totalPrice = document.getElementById("total-price");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

    } else {

        cart.forEach((item, index) => {

            total += item.price * item.quantity;
            count += item.quantity;

            const itemElement = document.createElement("div");

            itemElement.className = "cart-item";

            itemElement.innerHTML = `
                <div>
                    <strong>${item.name}</strong>
                    <br>
                    ${item.quantity} × ${item.price.toLocaleString()} ֏
                </div>

                <button
                    class="remove-button"
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>
            `;

            cartItems.appendChild(itemElement);
        });
    }

    cartCount.textContent = count;

    totalPrice.textContent = total.toLocaleString();
}


function scrollToOrder() {

    document
        .getElementById("order")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function placeOrder() {

    if (cart.length === 0) {

        alert("Please add something to your order first.");

        return;
    }


    const name =
        document.getElementById("customer-name").value.trim();

    const phone =
        document.getElementById("customer-phone").value.trim();

    const address =
        document.getElementById("customer-address").value.trim();

    const comment =
        document.getElementById("customer-comment").value.trim();


    if (!name || !phone || !address) {

        alert(
            "Please enter your name, phone number and delivery address."
        );

        return;
    }


    let orderText = "MR. SHAURMA ORDER\n\n";

    let total = 0;


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        orderText +=
            `${item.name} x${item.quantity} - ${itemTotal} AMD\n`;
    });


    orderText += `\nTOTAL: ${total} AMD`;

    orderText += `\n\nCustomer: ${name}`;

    orderText += `\nPhone: ${phone}`;

    orderText += `\nAddress: ${address}`;


    if (comment) {

        orderText += `\nComment: ${comment}`;
    }


    alert(
        "Your order is ready!\n\n" +
        orderText +
        "\n\nPlease call 043 300800 to confirm your order."
    );
}