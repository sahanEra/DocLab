'use strict';

/*============================== 
      add event on element 
==============================*/
const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback)
    }
}


/*==============================
          Preloader 
==============================*/
const preloader = document.querySelector("[data-preloader]");

addEventOnElem(window, "load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});


/*==============================
        Toggle Navbar
==============================*/
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
//const navLogo = document.querySelector("[data-logo]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    //navLogo.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElem(navTogglers, "click", toggleNav);


/*==============================
        Active Header
==============================*/
const header = document.querySelector("[data-header]");

const activeHeader = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", activeHeader);


/*==============================
        About Tab List
==============================*/
const visionBtn = document.querySelector("[data-tab-vision]");
const missionBtn = document.querySelector("[data-tab-mission]");
const strategyBtn = document.querySelector("[data-tab-strategy]");
const tabtext = document.querySelector("[data-tab-text]");

const visionBtnActive = function () {
    visionBtn.classList.add("active");
    missionBtn.classList.remove("active");
    strategyBtn.classList.remove("active");
    tabtext.innerHTML = "Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum";
}

const missionBtnActive = function () {
    missionBtn.classList.add("active");
    visionBtn.classList.remove("active");
    strategyBtn.classList.remove("active");
    tabtext.innerHTML = "Faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi,";
}

const strategyBtnActive = function () {
    strategyBtn.classList.add("active");
    visionBtn.classList.remove("active");
    missionBtn.classList.remove("active");
    tabtext.innerHTML = "Odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum";
}

addEventOnElem(missionBtn, "click", missionBtnActive);
addEventOnElem(visionBtn, "click", visionBtnActive);
addEventOnElem(strategyBtn, "click", strategyBtnActive);


/*==============================
          Back To Top
==============================*/
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeBackTopBtn = function () {
    if (window.scrollY > 100) {
        backTopBtn.classList.add("active");
    } else {
        backTopBtn.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", activeBackTopBtn);


/*==============================
        Scroll Reveal
==============================*/
const revealelements = document.querySelectorAll("[data-reveal]");

const revealelementOnScroll = function () {
    for (var i = 0, len = revealelements.length; i < len; i++) {
        if (revealelements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
            revealelements[i].classList.add("revealed");
        } else {
            revealelements[i].classList.remove("revealed");
        }
    }
}

addEventOnElem(window, "scroll", revealelementOnScroll);
addEventOnElem(window, "load", revealelementOnScroll);