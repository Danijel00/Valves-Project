"use strict";

// OPEN HEADER MENU
const hamburgerBtn = document.getElementById("hamburger");
// TRANSPARENT HAMBURGER BTN
const hamburgerMidBtn = document.querySelector(".header__middle-hamburger");
// HEADER SHOP BTN
const shopCategoryBtn = document.querySelector(".header__bottom-shop");
// CLOSE HEADER MENU
const closeMenuBtn = document.getElementById("close-menu");
// SCROLL TO TOP BTN
const scrollBtn = document.getElementById("scrollTop");
// SEARCH FORM
const searchForm = document.getElementById("search-form");
// STICKY HEADER
const fixedHeader = document.getElementById("fixed-header");
const sideNav = document.querySelector(".header__sidenav");
// GET ALL DROP-DOWNS
const dropDowns = document.querySelectorAll(".dropdown");

// EVENT LISTENERS
eventListeners();

// ALL EVENT LISTENERS
function eventListeners() {
  // MENU SHOW/HIDE LISTENER
  hamburgerBtn.addEventListener("click", showMenu);
  closeMenuBtn.addEventListener("click", hideMenu);
  // SCROLL ACTIVE HEADER LISTENER
  window.addEventListener("scroll", headerScroll);

  // SCROLL TO TOP BTN LISTENER
  scrollBtn.addEventListener("click", scrollToTop);
}

// SHOW HEADER MENU
function showMenu() {
  sideNav.classList.add("active");
}
// HIDE HEADER MENU
function hideMenu() {
  sideNav.classList.remove("active");
}

// FIXED HEADER
function headerScroll() {
  // this.scrollY >= 50
  //   ? fixedHeader.classList.add("fixed")
  //   : fixedHeader.classList.remove("fixed");

  if (this.scrollY >= 50) {
    fixedHeader.classList.add("fixed");
    hamburgerMidBtn.classList.add("fixed");
  } else {
    fixedHeader.classList.remove("fixed");
    hamburgerMidBtn.classList.remove("fixed");
  }
}

// WHEN THE USER CLICKS ON THE BUTTON, SCROLL TO THE TOP OF THE DOCUMENT
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
  });
}

searchForm.addEventListener("click", (e) => {
  e.preventDefault();
});

// DROP-DOWNS
dropDowns.forEach((dropdown) => {
  // Target info div
  const select = dropdown.querySelector(".select");
  // Target chevron icon
  const chevron = dropdown.querySelector(".chevron");
  // Target ul
  const menuContent = dropdown.querySelector(".content");
  // Target li
  const options = dropdown.querySelectorAll(".footer__main-item");

  // ADD CLICK EVENT TO THE SELECTED ELEMENT
  select.addEventListener("click", () => {
    chevron.classList.toggle("active-chevron");
    menuContent.classList.toggle("active-content");
  });

  // LOOP THROUGH ALL OPTION ELEMENTS
  options.forEach((option) => {
    option.addEventListener("click", () => {
      chevron.classList.remove("active-chevron");
      menuContent.classList.remove("active-content");
    });
  });
});

/* ======= COPYRIGHT YEAR ======= */

const year = new Date().getFullYear();
document.getElementById("year").textContent = year;
