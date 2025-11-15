const mobile = document.querySelector(".fa-duotone");
const mobileLink = document.querySelector(".sidebar");

mobile.addEventListener("click", function () {
  mobile.classList.toggle("is-active");
  mobileLink.classList.toggle("active");
});
mobileLink.addEventListener("click", function () {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
  }
});
const mainWapper = document.querySelector(".main-wrapper");
const filterWrapper = document.querySelector(".filter-wrapper");
const leftBtn = document.querySelector(".bi-arrow-left-circle");
const rightBtn = document.querySelector(".bi-arrow-right-circle");
const leftMmenu = document.querySelector(".left-menu");
const rightMenu = document.querySelector(".right-menu");

const step = 100;

rightBtn.addEventListener("click", () => {
  mainWapper.scrollBy({ left: step, behavior: "smooth" });
});
leftBtn.addEventListener("click", () => {
  mainWapper.scrollBy({ left: -step, behavior: "smooth" });
});

rightMenu.addEventListener("click", () => {
  filterWrapper.scrollBy({ left: step, behavior: "smooth" });
});
leftMmenu.addEventListener("click", () => {
  filterWrapper.scrollBy({ left: -step, behavior: "smooth" });
});
