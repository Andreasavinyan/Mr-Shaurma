let cart = [];
let currentLanguage = "en";


const translations = {

    en: {

        home: "Home",
        menu: "Menu",
        contact: "Contact",
        cart: "Cart",

        heroTitle: "HOT. FRESH. DELICIOUS.",
        heroText: "Fresh shawarma, barbecue and fast food in Dilijan.",

        viewMenu: "VIEW MENU",
        callOrder: "CALL TO ORDER",
        scroll: "SCROLL",

        findUs: "FIND US",
        open: "OPEN",
        delivery: "DELIVERY",
        callUs: "CALL US",

        chooseFavorite: "CHOOSE YOUR FAVORITE",
        freshPrepared: "Freshly prepared for you.",
        mainFood: "MAIN MENU",

        tonirChicken: "Tonir Chicken",

        porkShaurma: "Pork Shaurma",
        porkShaurmaSmall: "Pork Shaurma — Small",
        porkShaurmaLarge: "Pork Shaurma — Large",

        chickenShaurma: "Chicken Shaurma",
        chickenShaurmaSmall: "Chicken Shaurma — Small",
        chickenShaurmaLarge: "Chicken Shaurma — Large",

        porkBBQ: "Pork Barbecue",
        chickenBBQ: "Chicken Barbecue",
        chickenKebab: "Chicken Kebab",

        lahmajo: "Lahmajo",
        lahmajoSmall: "Lahmajo — Small",
        lahmajoLarge: "Lahmajo — Large",

        fries: "French Fries",

        drinks: "DRINKS",
        tan: "Tan",

        chooseSize: "Choose size",
        small: "Small",
        large: "Large",

        add: "ADD +",

        madeDilijan: "MADE IN DILIJAN",
        hungry: "HUNGRY? WE'VE GOT YOU.",
        promoText: "Fresh food, bold flavor and fast service.",
        callRestaurant: "CALL 043 300800",

        comeVisit: "COME VISIT",
        findUsTitle: "FIND US",
        address: "ADDRESS",
        hours: "HOURS",
        phone: "PHONE",
        callNow: "CALL NOW →",

        yourOrder: "YOUR ORDER",
        myCart: "MY CART",
        total: "TOTAL",
        continueOrder: "CONTINUE TO ORDER →",

        almostThere: "ALMOST THERE",
        details: "YOUR DETAILS",

        name: "Name",
        deliveryAddress: "Delivery address",
        comment: "Comment",
        prepareOrder: "PREPARE MY ORDER",

        emptyCart: "Your cart is empty",
        emptyText: "Add something delicious from the menu.",
        remove: "REMOVE",

        cartEmptyAlert: "Your cart is empty.",
        fillInformation:
            "Please enter your name, phone number and delivery address.",

        confirmMessage:
            "Please call 043 300800 to confirm your order."
    },


    hy: {

        home: "Գլխավոր",
        menu: "Մենյու",
        contact: "Կապ",
        cart: "Զամբյուղ",

        heroTitle: "ՏԱՔ։ ԹԱՐՄ։ ՀԱՄԵՂ։",

        heroText:
            "Թարմ շաուրմա, խորոված և արագ սնունդ Դիլիջանում։",

        viewMenu: "ԴԻՏԵԼ ՄԵՆՅՈՒՆ",
        callOrder: "ԶԱՆԳԱՀԱՐԵԼ",
        scroll: "ԻՋՆԵԼ",

        findUs: "ՄԵՐ ՀԱՍՑԵՆ",
        open: "ԲԱՑ Է",
        delivery: "ԱՌԱՔՈՒՄ",
        callUs: "ԶԱՆԳԱՀԱՐԵԼ",

        chooseFavorite: "ԸՆՏՐԵՔ ՁԵՐ ՍԻՐԵԼԻՆ",
        freshPrepared: "Թարմ պատրաստված ձեզ համար։",
        mainFood: "ՀԻՄՆԱԿԱՆ ՄԵՆՅՈՒ",

        tonirChicken: "Թոնրի հավ",

        porkShaurma: "Խոզի շաուրմա",
        porkShaurmaSmall: "Խոզի շաուրմա — Փոքր",
        porkShaurmaLarge: "Խոզի շաուրմա — Մեծ",

        chickenShaurma: "Հավի շաուրմա",
        chickenShaurmaSmall: "Հավի շաուրմա — Փոքր",
        chickenShaurmaLarge: "Հավի շաուրմա — Մեծ",

        porkBBQ: "Խոզի խորոված",
        chickenBBQ: "Հավի խորոված",
        chickenKebab: "Հավի քյաբաբ",

        lahmajo: "Լահմաջո",
        lahmajoSmall: "Լահմաջո — Փոքր",
        lahmajoLarge: "Լահմաջո — Մեծ",

        fries: "Ֆրի",

        drinks: "ԸՄՊԵԼԻՔՆԵՐ",
        tan: "Թան",

        chooseSize: "Ընտրեք չափը",
        small: "Փոքր",
        large: "Մեծ",

        add: "ԱՎԵԼԱՑՆԵԼ +",

        madeDilijan: "ՊԱՏՐԱՍՏՎԱԾ Է ԴԻԼԻՋԱՆՈՒՄ",

        hungry: "ՍՈՎԱ՞Ծ ԵՔ։ ՄԵՆՔ ԱՅՍՏԵՂ ԵՆՔ։",

        promoText:
            "Թարմ սնունդ, հիանալի համ և արագ սպասարկում։",

        callRestaurant: "ԶԱՆԳԱՀԱՐԵԼ 043 300800",

        comeVisit: "ԱՅՑԵԼԵՔ ՄԵԶ",
        findUsTitle: "ԳՏԵՔ ՄԵԶ",

        address: "ՀԱՍՑԵ",
        hours: "ԱՇԽԱՏԱԺԱՄԵՐ",
        phone: "ՀԵՌԱԽՈՍ",

        callNow: "ԶԱՆԳԱՀԱՐԵԼ →",

        yourOrder: "ՁԵՐ ՊԱՏՎԵՐԸ",
        myCart: "ԶԱՄԲՅՈՒՂ",
        total: "ԸՆԴԱՄԵՆԸ",

        continueOrder: "ՇԱՐՈՒՆԱԿԵԼ ՊԱՏՎԵՐԸ →",

        almostThere: "ԳՐԵԹԵ ՊԱՏՐԱՍՏ Է",
        details: "ՁԵՐ ՏՎՅԱԼՆԵՐԸ",

        name: "Անուն",
        deliveryAddress: "Առաքման հասցե",
        comment: "Մեկնաբանություն",

        prepareOrder: "ՊԱՏՐԱՍՏԵԼ ՊԱՏՎԵՐԸ",

        emptyCart: "Ձեր զամբյուղը դատարկ է",

        emptyText:
            "Մենյուից ավելացրեք ձեր նախընտրած ուտեստները։",

        remove: "ՀԵՌԱՑՆԵԼ",

        cartEmptyAlert: "Ձեր զամբյուղը դատարկ է։",

        fillInformation:
            "Խնդրում ենք լրացնել անունը, հեռախոսահամարը և առաքման հասցեն։",

        confirmMessage:
            "Պատվերը հաստատելու համար զանգահարեք 043 300800։"
    },


    ru: {

        home: "Главная",
        menu: "Меню",
        contact: "Контакты",
        cart: "Корзина",

        heroTitle: "ГОРЯЧО. СВЕЖО. ВКУСНО.",

        heroText:
            "Свежая шаурма, шашлык и фастфуд в Дилижане.",

        viewMenu: "СМОТРЕТЬ МЕНЮ",
        callOrder: "ПОЗВОНИТЬ",
        scroll: "ЛИСТАТЬ",

        findUs: "АДРЕС",
        open: "ОТКРЫТО",
        delivery: "ДОСТАВКА",
        callUs: "ТЕЛЕФОН",

        chooseFavorite: "ВЫБЕРИТЕ ЛЮБИМОЕ",
        freshPrepared: "Готовим свежим специально для вас.",
        mainFood: "ОСНОВНОЕ МЕНЮ",

        tonirChicken: "Курица в тонире",

        porkShaurma: "Шаурма со свининой",
        porkShaurmaSmall: "Шаурма со свининой — Маленькая",
        porkShaurmaLarge: "Шаурма со свининой — Большая",

        chickenShaurma: "Куриная шаурма",
        chickenShaurmaSmall: "Куриная шаурма — Маленькая",
        chickenShaurmaLarge: "Куриная шаурма — Большая",

        porkBBQ: "Шашлык из свинины",
        chickenBBQ: "Куриный шашлык",
        chickenKebab: "Куриный кебаб",

        lahmajo: "Ламаджо",
        lahmajoSmall: "Ламаджо — Маленький",
        lahmajoLarge: "Ламаджо — Большой",

        fries: "Картофель фри",

        drinks: "НАПИТКИ",
        tan: "Тан",

        chooseSize: "Выберите размер",
        small: "Маленький",
        large: "Большой",

        add: "ДОБАВИТЬ +",

        madeDilijan: "СДЕЛАНО В ДИЛИЖАНЕ",

        hungry: "ГОЛОДНЫ? МЫ РЯДОМ.",

        promoText:
            "Свежая еда, яркий вкус и быстрое обслуживание.",

        callRestaurant: "ПОЗВОНИТЬ 043 300800",

        comeVisit: "ПРИХОДИТЕ К НАМ",
        findUsTitle: "КАК НАС НАЙТИ",

        address: "АДРЕС",
        hours: "ВРЕМЯ РАБОТЫ",
        phone: "ТЕЛЕФОН",

        callNow: "ПОЗВОНИТЬ →",

        yourOrder: "ВАШ ЗАКАЗ",
        myCart: "КОРЗИНА",
        total: "ИТОГО",

        continueOrder: "ПРОДОЛЖИТЬ ЗАКАЗ →",

        almostThere: "ПОЧТИ ГОТОВО",
        details: "ВАШИ ДАННЫЕ",

        name: "Имя",
        deliveryAddress: "Адрес доставки",
        comment: "Комментарий",

        prepareOrder: "ПОДГОТОВИТЬ ЗАКАЗ",

        emptyCart: "Корзина пуста",

        emptyText:
            "Добавьте что-нибудь вкусное из меню.",

        remove: "УДАЛИТЬ",

        cartEmptyAlert: "Ваша корзина пуста.",

        fillInformation:
            "Введите имя, номер телефона и адрес доставки.",

        confirmMessage:
            "Позвоните по номеру 043 300800, чтобы подтвердить заказ."
    }

};


/* LANGUAGE */

function selectLanguage(language) {

    currentLanguage = language;

    localStorage.setItem(
        "mrShaurmaLanguage",
        language
    );

    applyLanguage();

    document
        .getElementById("language-screen")
        .classList.add("hidden");

}


function changeLanguage() {

    document
        .getElementById("language-screen")
        .classList.remove("hidden");

}


function applyLanguage() {

    document.documentElement.lang =
        currentLanguage;


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (translations[currentLanguage][key]) {

                element.textContent =
                    translations[currentLanguage][key];

            }

        });


    updateCart();
}


/* CART */

function addTranslatedItem(key, price) {

    const name =
        translations[currentLanguage][key];

    addToCart(name, price);
}


function addToCart(name, price) {

    const existing =
        cart.find(item => item.name === name);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            name,
            price,
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

    const container =
        document.getElementById("cart-items");

    if (!container) return;


    const t =
        translations[currentLanguage];


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <span>🌯</span>

                <h3>${t.emptyCart}</h3>

                <p>${t.emptyText}</p>

            </div>

        `;

    } else {

        container.innerHTML = "";


        cart.forEach((item, index) => {

            const total =
                item.price * item.quantity;


            container.innerHTML += `

                <div class="cart-item">

                    <div>

                        <h4>${item.name}</h4>

                        <p>
                            ${item.quantity} ×
                            ${item.price.toLocaleString()} ֏
                        </p>

                    </div>

                    <div>

                        <strong>
                            ${total.toLocaleString()} ֏
                        </strong>

                        <br>

                        <button
                            class="remove-btn"
                            onclick="removeFromCart(${index})"
                        >
                            ${t.remove}
                        </button>

                    </div>

                </div>

            `;

        });

    }


    const count =
        cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    document.getElementById("cart-count").textContent =
        count;


    document.getElementById("total-price").textContent =
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


/* CHECKOUT */

function showCheckout() {

    const t =
        translations[currentLanguage];


    if (cart.length === 0) {

        alert(t.cartEmptyAlert);

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


function placeOrder() {

    const t =
        translations[currentLanguage];


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

        alert(t.fillInformation);

        return;
    }


    let total = 0;

    let order = "MR. SHAURMA\n\n";


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        order +=
            `${item.name} × ${item.quantity} — ` +
            `${itemTotal} ֏\n`;

    });


    order += `\n${t.total}: ${total} ֏`;

    order += `\n\n${t.name}: ${name}`;

    order += `\n${t.phone}: ${phone}`;

    order +=
        `\n${t.deliveryAddress}: ${address}`;


    if (comment) {

        order +=
            `\n${t.comment}: ${comment}`;

    }


    alert(
        order +
        "\n\n" +
        t.confirmMessage
    );

}


/* SCROLL ANIMATION */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* START */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        const savedLanguage =
            localStorage.getItem(
                "mrShaurmaLanguage"
            );


        if (savedLanguage) {

            currentLanguage =
                savedLanguage;

            applyLanguage();

            document
                .getElementById("language-screen")
                .classList.add("hidden");

        } else {

            updateCart();

        }

    }
);