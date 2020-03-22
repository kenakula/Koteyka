'use strict';

(function () {
  const slider = document.querySelector('.slider');
  const sliderList = slider.querySelector('.slider__list');
  const sliderItem = slider.querySelector('.slider__item');
  const sliderDotsContainer = slider.querySelector('.slide-controls__indicators');

  const changeSlide = (evt) => {
    sliderList.style.left = window.util.getSlidePosition(evt, sliderItem);
  };

  const onSliderDotClickSlideChange = (evt) => {
    if (evt.target.classList.contains('slide-controls__dot')) {
      changeSlide(evt);
      window.util.changeActiveDot(evt, sliderDotsContainer);
    }
  };

  sliderDotsContainer.addEventListener('click', onSliderDotClickSlideChange);

})();
