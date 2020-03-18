'use strict';

(function () {
  const pageHeader = document.querySelector('.page-header');
  const nav = pageHeader.querySelector('.main-nav');
  const navMenu = nav.querySelector('.main-nav__menu');
  const buttonToggler = nav.querySelector('.toggler');

  const toggleMenu = function () {
    navMenu.classList.toggle('main-nav__menu--active');
    buttonToggler.classList.toggle('toggler--active');
    pageHeader.classList.toggle('page-header--expanded');
  };

  buttonToggler.addEventListener('click', toggleMenu);

})();
