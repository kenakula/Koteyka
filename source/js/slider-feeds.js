'use strict';

(function () {
  const slider = document.querySelector('.feedback');
  const sliderList = slider.querySelector('.feedback__list');
  const sliderItem = slider.querySelector('.feedback__item');
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
