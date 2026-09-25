let cart = [];


/* =========================
   SCROLL ANIMATIONS
========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});


/* =========================
   CART
========================= */

function addToCart(name, price) {

    const existingItem = cart.find(
        item => item.name === name
    );

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
    openCart();
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


function updateCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const totalPrice =
        document.getElementById("total-price");


    let total = 0;
    let count = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <span>🌯</span>

                <h3>Your cart is empty</h3>

                <p>
                    Add something delicious
                    from the menu.
                </p>
            </div>
        `;

    } else {

        cartItems.innerHTML = "";


        cart.forEach((item, index) => {

            const itemTotal =
                item.price * item.quantity;

            total += itemTotal;
            count += item.quantity;


            const element =
                document.createElement("div");


            element.className = "cart-item";


            element.innerHTML = `

                <div>

                    <h4>${item.name}</h4>

                    <p>
                        ${item.quantity} ×
                        ${item.price.toLocaleString()} ֏
                    </p>

                </div>


                <div>

                    <strong>
                        ${itemTotal.toLocaleString()} ֏
                    </strong>

                    <br>

                    <button
                        class="remove-btn"
                        onclick="removeFromCart(${index})"
                    >
                        REMOVE
                    </button>

                </div>

            `;


            cartItems.appendChild(element);

        });

    }


    cartCount.textContent = count;

    totalPrice.textContent =
        total.toLocaleString();
}


function openCart() {

    document
        .getElementById("cart-panel")
        .classList.add("active");

    document
        .getElementById("cart-overlay")
        .classList.add("active");

}


function closeCart() {

    document
        .getElementById("cart-panel")
        .classList.remove("active");

    document
        .getElementById("cart-overlay")
        .classList.remove("active");

}


/* =========================
   CHECKOUT
========================= */

function showCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    closeCart();


    document
        .getElementById("checkout-modal")
        .classList.add("active");

}


function closeCheckout() {

    document
        .getElementById("checkout-modal")
        .classList.remove("active");

}


/* =========================
   PREPARE ORDER
========================= */

function placeOrder() {

    const name =
        document
            .getElementById("customer-name")
            .value
            .trim();


    const phone =
        document
            .getElementById("customer-phone")
            .value
            .trim();


    const address =
        document
            .getElementById("customer-address")
            .value
            .trim();


    const comment =
        document
            .getElementById("customer-comment")
            .value
            .trim();


    if (!name || !phone || !address) {

        alert(
            "Please enter your name, phone number and delivery address."
        );

        return;
    }


    let total = 0;

    let order =
        "MR. SHAURMA ORDER\n\n";


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        order +=
            `${item.name} x${item.quantity} — ` +
            `${itemTotal} AMD\n`;

    });


    order +=
        `\nTOTAL: ${total} AMD`;


    order +=
        `\n\nName: ${name}`;


    order +=
        `\nPhone: ${phone}`;


    order +=
        `\nAddress: ${address}`;


    if (comment) {

        order +=
            `\nComment: ${comment}`;

    }


    alert(
        order +
        "\n\nPlease call 043 300800 to confirm your order."
    );

}