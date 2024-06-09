// hero product slider
$(".hero__product--slider").owlCarousel({
    loop: true,
    // margin: 200,
    // stagePadding: 40,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1.5,
        },
        600: {
            items: 2,
        },

        767: {
            items: 2,
        },

        1024: {
            items: 3,
        },
    },
});

// product slider
$(".product__slider").owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },

        767: {
            items: 2,
        },

        991: {
            items: 3,
        },

        1300: {
            items: 4,
            margin: 32,
            // stagePadding: 100,
        },
    },
});

// nav menu
const navMenu = document.querySelector(".header__content--items");
const menuItems = document.querySelector(".menu__items");
const menuOpenBtn = document.querySelector(".header__menu");
const menuCloseBtn = document.querySelector(".header__close--btn");
menuOpenBtn.addEventListener("click", function () {
    menuItems.style.left = "0";
    navMenu.classList.toggle("overlay");
});

const closeNav = function () {
    menuItems.style.left = "-100%";
    navMenu.classList.toggle("overlay");
};
menuCloseBtn.addEventListener("click", closeNav);

// active link
var header = document.querySelector(".header");
var navLinks = header.querySelectorAll(".header__items--link");

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        if (window.matchMedia("(max-width: 850px)").matches) {
            closeNav(); //close side navbar
        }

        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        console.log(this);
    });
}

//changing theme
const themeCheckbox = document.getElementById("checkbox");
const themeButton = document.querySelector(".theme__button");

// saving theme on localStorage
const setTheme = function (e) {
    localStorage.removeItem("theme");
    if (themeCheckbox.checked) {
        localStorage.setItem("theme", "dark__theme");
    } else {
        localStorage.setItem("theme", "light__theme");
    }
};

// adding theme from localStorage
const changeTheme = function () {
    setTheme();
    let theme = localStorage.getItem("theme");
    document.getElementsByTagName("body")[0].classList.toggle(`${theme ? theme : "light__theme"}`);
};

// setting default theme
document.getElementsByTagName("body")[0].classList.toggle(`${localStorage.getItem("theme") ? localStorage.getItem("theme") : "light__theme"}`);
themeButton.addEventListener("click", changeTheme); //changing theme on nav toggle button

// retaining the toggle button state on refress
if (localStorage.getItem("theme") === "dark__theme") {
    themeCheckbox.checked = true;
} else {
    themeCheckbox.checked = false;
}

// sticky navbar
window.addEventListener("scroll", function () {
    const navBar = document.querySelector(".navbar");
    navBar.classList.toggle("sticky", this.window.scrollY > 100);
});

//timer countdown
var offterTill = new Date("Aug 3, 2024").getTime();
console.log(offterTill);

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = offterTill - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
}, 1000);
