const burger = document.querySelector('.humburger-menu');
const burgerMenu = document.querySelector('.menu');
const menuList = document.querySelectorAll('.menu-list__link');

const toggleMenu = () => {
  burgerMenu.classList.toggle('menu-active');
  burger.classList.toggle('humburger-menu-active');
};

burger.addEventListener('click', () => {
  toggleMenu();
});

menuList.forEach((link) => {
  link.addEventListener('click', () => toggleMenu());
});
