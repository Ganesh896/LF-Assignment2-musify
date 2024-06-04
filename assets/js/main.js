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
const menuOpenBtn = document.querySelector(".header__menu");
const menuCloseBtn = document.querySelector(".header__close--btn");
menuOpenBtn.addEventListener("click", function () {
    navMenu.style.left = "0";
});

menuCloseBtn.addEventListener("click", function () {
    navMenu.style.left = "-100%";
});

//changing theme
const themeCheckbox = document.getElementById("checkbox");
const themeButton = document.querySelector(".theme__button");

const setTheme = function (e) {
    localStorage.removeItem("theme");
    if (themeCheckbox.checked) {
        localStorage.setItem("theme", "dark__theme");
    } else {
        localStorage.setItem("theme", "light__theme");
    }
};

const changeTheme = function () {
    setTheme();
    let theme = localStorage.getItem("theme");
    document.getElementsByTagName("body")[0].classList.toggle(`${theme ? theme : "light__theme"}`);
};

document.getElementsByTagName("body")[0].classList.toggle(`${localStorage.getItem("theme") ? localStorage.getItem("theme") : "light__theme"}`);

themeButton.addEventListener("click", changeTheme);

if (localStorage.getItem("theme") === "dark__theme") {
    themeCheckbox.checked = true;
} else {
    themeCheckbox.checked = false;
}

// sticky navbar
// STICKY NAVBAR
window.addEventListener("scroll", function () {
    const navBar = document.querySelector(".navbar");
    navBar.classList.toggle("sticky", this.window.scrollY > 100);
});

//Timer Countdown
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
