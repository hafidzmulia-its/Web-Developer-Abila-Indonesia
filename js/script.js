// Toggle class active
// Toggle itu memunculkan yang ga ada dan meniadakan yang ada
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
