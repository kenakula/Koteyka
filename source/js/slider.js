'use strict';

(function () {
  const FIRST_SLIDE_POSITION = '0';
  const SECOND_SLIDE_POSITION = '-320px';
  const THIRD_SLIDE_POSITION = '-640px';

  const slider = document.querySelector('.slider');
  const sliderList = slider.querySelector('.slider__list');
  const sliderDotsContainer = slider.querySelector('.slide-controls__indicators');

  const getNewSlideIndex = (evt) => {
    return evt.target.dataset.slide - 1;
  };

  const getListPosition = (slide) => {
    let slideListPosition;

    switch (slide) {
      case 0:
        slideListPosition = FIRST_SLIDE_POSITION;
        break;
      case 1:
        slideListPosition = SECOND_SLIDE_POSITION;
        break;
      default:
        slideListPosition = THIRD_SLIDE_POSITION;
    }

    return slideListPosition;
  };

  const changeSlidePosition = (position, slider) => {
    slider.style.left = position;
  };

  const changeActiveDot = (evt, container) => {
    const currentActiveDot = container.querySelector('.slide-controls__dot--active');
    currentActiveDot.classList.remove('slide-controls__dot--active');
    evt.target.classList.add('slide-controls__dot--active');
  };

  const changeSlide = (evt, slidesContainer, dotsContainer) => {
    let ListPosition = getListPosition(getNewSlideIndex(evt));
    changeSlidePosition(ListPosition, slidesContainer);
    changeActiveDot(evt, dotsContainer);
  };

  const onSliderDotClickSlideChange = (evt) => {
    if (evt.target.classList.contains('slide-controls__dot')) {
      changeSlide(evt, sliderList, sliderDotsContainer);
    }
  };

  sliderDotsContainer.addEventListener('click', onSliderDotClickSlideChange);

  if (document.querySelector('.feedback')) {
    const feedbackSlider = document.querySelector('.feedback');
    const feedbackList = feedbackSlider.querySelector('.feedback__list');
    const feedbackSliderDotsContainer = feedbackSlider.querySelector('.slide-controls__indicators');

    const onFeedbackDotsClickSlideChange = (evt) => {
      if (evt.target.classList.contains('slide-controls__dot')) {
        changeSlide(evt, feedbackList, feedbackSliderDotsContainer);
      }
    };

    feedbackSliderDotsContainer.addEventListener('click', onFeedbackDotsClickSlideChange);
  }

})();
