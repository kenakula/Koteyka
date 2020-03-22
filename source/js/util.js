'use strict';

(function () {

  const getSlidePosition = (evt, slide) => {
    let newSlideIndex = evt.target.dataset.slide - 1;
    let slideWidth = slide.clientWidth;

    return -1 * slideWidth * newSlideIndex + 'px';
  };

  const changeActiveDot = (evt, dotsContainer) => {
    let activeDot = dotsContainer.querySelector('.slide-controls__dot--active');
    activeDot.classList.remove('slide-controls__dot--active');
    evt.target.classList.add('slide-controls__dot--active');
  };

  const showPopup = (popup) => {
    popup.classList.add('popup--show');
  };

  const closePopup = (popup) => {
    popup.classList.remove('popup--show');
  }

  window.util = {
    getSlidePosition: getSlidePosition,
    changeActiveDot: changeActiveDot,
    showPopup: showPopup,
    closePopup: closePopup
  }
})();
