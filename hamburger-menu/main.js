const menu = document.querySelector('.menu');
const menuIconContainer = document.querySelector('.icon-container');
const menuIcon = document.querySelector('.hamburger');

menuIconContainer.addEventListener('click', openSidebar);

function openSidebar() {
  menu.classList.toggle('active');
  menuIcon.classList.toggle('active-icon');
}