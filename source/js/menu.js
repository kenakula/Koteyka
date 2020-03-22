'use strict';

(function () {
  const pageHeader = document.querySelector('.page-header');
  const nav = pageHeader.querySelector('.main-nav');
  const navMenu = nav.querySelector('.main-nav__menu');
  const navLinks = nav.querySelectorAll('.main-nav__link');
  const buttonToggler = nav.querySelector('.main-nav__toggler');

  const closeMenu = () => {
    navMenu.classList.remove('main-nav__menu--active');
    pageHeader.classList.remove('page-header--expanded');
    buttonToggler.classList.remove('toggler--active');
  };

  const onToggleButtonToggleMenu = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      navMenu.classList.toggle('main-nav__menu--active');
      pageHeader.classList.toggle('page-header--expanded');
      buttonToggler.classList.toggle('toggler--active');

      navLinks.forEach((it) => {
        it.addEventListener('click', closeMenu);
      });
    }
  };

  buttonToggler.addEventListener('click', onToggleButtonToggleMenu);

})();
