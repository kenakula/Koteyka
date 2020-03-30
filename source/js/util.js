'use strict';

(function () {
  const FIRST_SLIDE_POSITION = '';
  const MIN_SLIDE_INDEX = 0;
  const MAX_SLIDE_INDEX = 2;
  const LEFT_DIRECTION = 'left';
  const RIGHT_DIRECTION = 'right';

  const switchActiveDotByArrows = (activeDot, dots, newIndex) => {
    activeDot.classList.remove('slide-controls__dot--active');
    dots[newIndex].classList.add('slide-controls__dot--active');
  };

  const dotIndexMisscarry = (index, increment) => {
    index += increment;

    if (index < MIN_SLIDE_INDEX) {
      return MAX_SLIDE_INDEX;
    } else if (index > MAX_SLIDE_INDEX) {
      return MIN_SLIDE_INDEX;
    } else {
      return index;
    }

  };

  const getSlidePosition = (evt, slide) => {
    let newSlideIndex = evt.target.dataset.slide - 1;
    let slideWidth = slide.clientWidth;

    return -1 * slideWidth * newSlideIndex + 'px';
  };

  const changeSlideByDots = (evt, slide, slidesList) => {
    slidesList.style.left = getSlidePosition(evt, slide);
  };

  const switchActiveDotByDots = (evt, dotsContainer) => {
    let activeDot = dotsContainer.querySelector('.slide-controls__dot--active');
    activeDot.classList.remove('slide-controls__dot--active');
    evt.target.classList.add('slide-controls__dot--active');
  };

  const changeSlideByArrows = (list, slide, direction) => {
    let currentPosition = list.style.left;

    if (direction === LEFT_DIRECTION) {
      switch (currentPosition) {
        case slide.clientWidth * -2 + 'px':
          list.style.left = slide.clientWidth * -1 + 'px';
          break;
        case slide.clientWidth * -1 + 'px':
          list.style.left = FIRST_SLIDE_POSITION;
          break;
        default:
          list.style.left = slide.clientWidth * -2 + 'px';
      }
    }

    if (direction === RIGHT_DIRECTION) {
      switch (currentPosition) {
        case slide.clientWidth * -2 + 'px':
          list.style.left = FIRST_SLIDE_POSITION;
          break;
        case slide.clientWidth * -1 + 'px':
          list.style.left = slide.clientWidth * -2 + 'px';
          break;
        default:
          list.style.left = slide.clientWidth * -1 + 'px';
      }
    }
  }

  const showPopup = (popup) => {
    popup.classList.add('popup--show');
  };

  const closePopup = (popup) => {
    popup.classList.remove('popup--show');
  }

  const forbidFocus = (slider, slides) => {
    let activeSlide = slider.querySelectorAll('.slider__item--active');

    slides.forEach((it) => {
      it.classList.add('slide-inactive');
    })

    activeSlide.classList.remove('slide-inactive');
  };

  window.util = {
    switchActiveDotByArrows: switchActiveDotByArrows,
    dotIndexMisscarry: dotIndexMisscarry,
    changeSlideByDots: changeSlideByDots,
    changeSlideByArrows: changeSlideByArrows,
    switchActiveDotByDots: switchActiveDotByDots,
    showPopup: showPopup,
    closePopup: closePopup,
    forbidFocus: forbidFocus
  }
})();
