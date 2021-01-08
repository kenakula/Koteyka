/* eslint object-curly-spacing: ["error", "always"] */

import { toggleMenu, closeMenu, closePopup, showPopup, scrollEnable, scrollDisable } from './vendor.min.js';
// import { closeMenu } from './vendor.min.js';
// import { closePopup } from './vendor.min.js';
// import { showPopup } from './vendor.min.js';

$(function () {
  const sliderDot = '<button class="slide-controls__dot" type="button"></button>';
  const previousArrow = '<button class="slide-controls__arrow slide-controls__arrow--left" tabindex="0">предыдущий слайд</button>';
  const nextArrow = '<button class="slide-controls__arrow slide-controls__arrow--right" tabindex="0">следующий слайд</button>';

  const ESC_KEY = 'Escape';

  // фолбек
  $(document.body).removeClass('no-js');

  // попапы
  const onEscButtonPopupClose = function (evt) {
    if (evt.key === ESC_KEY) {
      closePopup();
      scrollEnable();
      document.removeEventListener('keydown', onEscButtonPopupClose);
    }
  };

  const onOverlayClickPopupClose = function (evt) {
    if (evt.target.classList.contains('popup--show')) {
      evt.target.classList.remove('popup--show');
      scrollEnable();
    }
  };

  const onFormSubmitPopupClose = function (evt) {
    evt.preventDefault();
    evt.target.reset();
    closePopup();
    showPopup($('.success'));
    $('.success').on('click', onOverlayClickPopupClose);
  };

  $('.button--book').on('click', function () {
    showPopup($('.booking'));
    document.addEventListener('keydown', onEscButtonPopupClose);
    $('.booking').on('click', onOverlayClickPopupClose);
  });

  $('.popup__close').on('click', function () {
    closePopup();
    document.removeEventListener('keydown', onEscButtonPopupClose);
  });

  $('.success button').on('click', function () {
    closePopup();
    document.removeEventListener('keydown', onEscButtonPopupClose);
  });

  $('.booking__form').on('submit', onFormSubmitPopupClose);

  $('.filter__toggler').on('click', function () {
    showPopup($('.filter'));
    document.addEventListener('keydown', onEscButtonPopupClose);
    $('.filter').on('click', onOverlayClickPopupClose);
  });

  // окошко сортировки

  const toggleSortingPopup = function () {
    $('.sorting__list').toggleClass('sorting__list--show');
  };

  const onEscButtonSortingListClose = function (evt) {
    if (evt.key === ESC_KEY) {
      toggleSortingPopup();
      document.removeEventListener('keydown', onEscButtonSortingListClose);
    }
  };

  $('.sorting__toggler').on('click', function () {
    toggleSortingPopup();
    document.addEventListener('keydown', onEscButtonSortingListClose);
  });

  $('.sorting__list').on('click', function () {
    toggleSortingPopup();
    document.removeEventListener('keydown', onEscButtonSortingListClose);
  });

  // ------------------------------------------ menu
  $('.toggler').on('click', toggleMenu);
  $('.main-nav a').on('click', closeMenu);

  // ------------------------------------------ sliders
  // suits
  $('.slider__list').slick({
    mobileFirst: true,
    dots: true,
    appendDots: $('.slide-controls__indicators--suits'),
    dotsClass: 'slide-controls__list',
    customPaging: function () {
      return sliderDot;
    },
    appendArrows: $('.slide-controls__arrows--suits'),
    prevArrow: previousArrow,
    nextArrow: nextArrow,
  });

  // feedback
  $('.feedback__list').slick({
    mobileFirst: true,
    arrows: false,
    dots: true,
    appendDots: $('.slide-controls__indicators--feedback'),
    dotsClass: 'slide-controls__list',
    customPaging: function () {
      return sliderDot;
    },
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          arrows: true,
          appendArrows: $('.slide-controls__arrows--feedback'),
          prevArrow: previousArrow,
          nextArrow: nextArrow,
          slidesToShow: 3,
        }
      }
    ]
  });

  // lightcase

  $('a[data-rel^=lightcase]').lightcase();
});
