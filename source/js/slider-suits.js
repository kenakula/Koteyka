'use strict';

(function () {
  const LEFT_DIRECTION = 'left';
  const RIGHT_DIRECTION = 'right';
  const ENTER_KEY = 'Enter';

  const slider = document.querySelector('.slider');
  const sliderList = slider.querySelector('.slider__list');
  const sliderItems = slider.querySelectorAll('.slider__item');
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

  const setActiveSlideClassByArrows = () => {
    let activeSlide = sliderList.querySelector('.slider__item--active');
    let activeDot = sliderDotsContainer.querySelector('.slide-controls__dot--active');
    let newIndex = activeDot.dataset.slide - 1;
    activeSlide.classList.remove('slider__item--active');
    sliderItems[newIndex].classList.add('slider__item--active');
  };

  const switchActiveSlideClass = (evt) => {
    let activeSlide = sliderList.querySelector('.slider__item--active');
    let newIndex = evt.target.dataset.slide - 1;

    activeSlide.classList.remove('slider__item--active');
    sliderItems[newIndex].classList.add('slider__item--active');
  };

  const inactivateHiddenSlidesButton = () => {
    sliderItems.forEach((it) => {
      if (!it.classList.contains('slider__item--active')) {
        it.querySelector('button').tabIndex = -1;
      } else {
        it.querySelector('button').tabIndex = 0;
      }
    })
  };

  const changeSlideByDots = (evt, slide, list, dotsContainer) => {
    window.util.changeSlideByDots(evt, slide, list);
    window.util.switchActiveDotByDots(evt, dotsContainer);
    switchActiveSlideClass(evt);
    inactivateHiddenSlidesButton();
  }

  const onSliderLeftArrowsClickSlideChange = (evt) => {
    window.util.changeSlideByArrows(sliderList, sliderItems[0], LEFT_DIRECTION);
    activeDotChange(evt);
    setActiveSlideClassByArrows();
    inactivateHiddenSlidesButton();
  };

  const onSliderRightArrowsClickSlideChange = (evt) => {
    window.util.changeSlideByArrows(sliderList, sliderItems[0], RIGHT_DIRECTION);
    activeDotChange(evt);
    setActiveSlideClassByArrows();
    inactivateHiddenSlidesButton();
  };

  const onSliderDotClickSlideChange = (evt) => {
    if (evt.target.classList.contains('slide-controls__dot')) {
      changeSlideByDots(evt, sliderItems[0], sliderList, sliderDotsContainer);
    }
  };

  const onSliderDotEnterPressSlideChange = (evt) => {
    if (evt.key === ENTER_KEY) {
      changeSlideByDots(evt, sliderItems[0], sliderList, sliderDotsContainer);
    }
  }

  sliderDotsContainer.addEventListener('click', onSliderDotClickSlideChange);
  sliderDotsContainer.addEventListener('keydown', onSliderDotEnterPressSlideChange);
  leftArrow.addEventListener('click', onSliderLeftArrowsClickSlideChange);
  rightArrow.addEventListener('click', onSliderRightArrowsClickSlideChange);

  inactivateHiddenSlidesButton();

})();
