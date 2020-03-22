'use strict';

(function () {
  const LEFT_DIRECTION = 'left';
  const RIGHT_DIRECTION = 'right';

  const slider = document.querySelector('.feedback');
  const sliderList = slider.querySelector('.feedback__list');
  const sliderItem = slider.querySelector('.feedback__item');
  const sliderDotsContainer = slider.querySelector('.slide-controls__indicators');
  const sliderDots = sliderDotsContainer.querySelectorAll('.slide-controls__dot');
  const sliderArrowsContainer = slider.querySelector('.slide-controls__arrows');
  const leftArrow = sliderArrowsContainer.querySelector('.slide-controls__arrow--left');
  const rightArrow = sliderArrowsContainer.querySelector('.slide-controls__arrow--right');

  const activeDotChange = (evt) => {
    let activeDot = sliderDotsContainer.querySelector('.slide-controls__dot--active');
    let activeDotIndex = activeDot.dataset.slide - 1;
    let newActiveDotIndex;

    if (evt.target === leftArrow) {
      newActiveDotIndex = window.util.dotIndexMisscarry(activeDotIndex, -1);
      window.util.switchActiveDotByArrows(activeDot, sliderDots, newActiveDotIndex);
    }

    if (evt.target === rightArrow) {
      newActiveDotIndex = window.util.dotIndexMisscarry(activeDotIndex, 1);
      window.util.switchActiveDotByArrows(activeDot, sliderDots, newActiveDotIndex);
    }

  };

  const onSliderDotClickSlideChange = (evt) => {
    if (evt.target.classList.contains('slide-controls__dot')) {
      window.util.changeSlideByDots(evt, sliderItem, sliderList);
      window.util.switchActiveDotByDots(evt, sliderDotsContainer);
    }
  };

  const onSliderLeftArrowsClickSlideChange = (evt) => {
    window.util.changeSlideByArrows(sliderList, sliderItem, LEFT_DIRECTION);
    activeDotChange(evt);
  };

  const onSliderRightArrowsClickSlideChange = (evt) => {
    window.util.changeSlideByArrows(sliderList, sliderItem, RIGHT_DIRECTION);
    activeDotChange(evt);
  };

  sliderDotsContainer.addEventListener('click', onSliderDotClickSlideChange);
  leftArrow.addEventListener('click', onSliderLeftArrowsClickSlideChange);
  rightArrow.addEventListener('click', onSliderRightArrowsClickSlideChange);

})();
