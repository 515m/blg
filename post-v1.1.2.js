const navbarMenu = document.getElementById("menu-p");
const burgerMenu = document.getElementById("burger-p");
const headerMenu = document.getElementById("header-p");

// Toggle Navbar Menu on Burger Click
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Closed Navbar Menu on Links Click
document.querySelectorAll(".menu-link-post").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth >= 769) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});


const d = new Date();
let copyrightyear = d.getFullYear();
document.getElementById("copyright").innerText = copyrightyear;

var $temp = $("<input>");
var $url = $(location).attr('href');

$('.clipboard').on('click', function() {
  $("body").append($temp);
  $temp.val($url).select();
  document.execCommand("copy");
  $temp.remove();
  $(".clipboard").text("URL copied!");
})