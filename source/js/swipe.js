const LEFT_DIRECTION = 'left';
const RIGHT_DIRECTION = 'right';

const slider = document.querySelector('.slider');
const sliderInner = slider.querySelector('.slider__inner');
const sliderList = slider.querySelector('.slider__list');
const sliderItems = slider.querySelectorAll('.slider__item');

const dotsContainer = slider.querySelector('.slide-controls__indicators');
const dots = dotsContainer.querySelectorAll('.slide-controls__dot');

const onSliderTouchStart = function (startEvt) {
  startEvt.preventDefault();
  let activeDot = dotsContainer.querySelector('.slide-controls__dot--active');
  let activeDotIndex = activeDot.dataset.slide - 1;

  let startX = startEvt.touches[0].clientX - sliderInner.getBoundingClientRect().left;

  const onTouchEnd = function (endEvt) {
    let movedX = endEvt.changedTouches[0].clientX;
    let deltaX = startX - movedX;

    if (deltaX > 50) {
      let newIndex = window.util.dotIndexMisscarry(activeDotIndex, 1);
      window.util.switchActiveDotByArrows(activeDot, dots, newIndex);

      window.util.changeSlideByArrows(sliderList, sliderItems[0], RIGHT_DIRECTION);
    } else if (deltaX < -50) {
      let newIndex = window.util.dotIndexMisscarry(activeDotIndex, -1);
      window.util.switchActiveDotByArrows(activeDot, dots, newIndex);

      window.util.changeSlideByArrows(sliderList, sliderItems[0], LEFT_DIRECTION);
    }

    document.removeEventListener('touchend', onTouchEnd);
  }

  document.addEventListener('touchend', onTouchEnd);
}

sliderInner.addEventListener('touchstart', onSliderTouchStart);
