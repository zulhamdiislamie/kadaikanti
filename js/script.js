// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hambuerge menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan nav

const hambuerge = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hambuerge.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
