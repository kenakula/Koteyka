'use strict';

(function () {
  const ESC_KEY = 'Escape';

  const bookingPopup = document.querySelector('.booking');
  const bookingButtons = document.querySelectorAll('.button--book');
  const bookingCloseButton = bookingPopup.querySelector('.popup__close');

  const showBookingPopup = () => {
    if (!bookingPopup.classList.contains('popup--show')) {
      bookingPopup.classList.add('popup--show');
    }
  };

  const closeBookingPopup = () => {
    bookingPopup.classList.remove('popup--show');
  }

  const onCloseButtoonPopupClose = (evt) => {
    evt.preventDefault();
    closeBookingPopup();
  };

  const onEscButtonPopupClose = (evt) => {
    if (evt.key === ESC_KEY) {
      closeBookingPopup();
    }
  };

  bookingButtons.forEach((it) => {
    it.addEventListener('click', showBookingPopup);
  });

  bookingCloseButton.addEventListener('click', onCloseButtoonPopupClose);
  document.addEventListener('keydown', onEscButtonPopupClose);
})();
