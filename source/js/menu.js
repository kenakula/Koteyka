'use strict';

(function () {
  const pageHeader = document.querySelector('.page-header');
  const nav = pageHeader.querySelector('.main-nav');
  const navMenu = nav.querySelector('.main-nav__menu');
  const navLinks = nav.querySelectorAll('.main-nav__link');
  const buttonToggler = nav.querySelector('.toggler');

  const closeMenu = () => {
    navMenu.classList.toggle('main-nav__menu--active');
    buttonToggler.classList.toggle('toggler--active');
    pageHeader.classList.toggle('page-header--expanded');
  };

  const onToggleButtonCloseMenu = () => {
    closeMenu();
  };

  navLinks.forEach((it) => {
    it.addEventListener('click', closeMenu)
  });

  buttonToggler.addEventListener('click', onToggleButtonCloseMenu);

})();
