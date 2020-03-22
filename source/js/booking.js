'use strict';

(function () {
  const ESC_KEY = 'Escape';

  const bookingPopup = document.querySelector('.booking');
  const bookingForm = bookingPopup.querySelector('.booking__form');
  const bookingButtons = document.querySelectorAll('.button--book');
  const bookingCloseButton = bookingPopup.querySelector('.popup__close');
  const successPopup = document.querySelector('.success');
  const successButton = successPopup.querySelector('.success__button');

  const showBookingPopup = () => {
    if (!bookingPopup.classList.contains('popup--show')) {
      window.util.showPopup(bookingPopup);
      document.addEventListener('keydown', onEscButtonBookingPopupClose);
    }
  };

  const onCloseButtoonBookingPopupClose = (evt) => {
    evt.preventDefault();
    window.util.closePopup(bookingPopup);
    document.removeEventListener('keydown', onEscButtonBookingPopupClose);
  };

  const onEscButtonBookingPopupClose = (evt) => {
    if (evt.key === ESC_KEY) {
      window.util.closePopup(bookingPopup);
      document.removeEventListener('keydown', onEscButtonBookingPopupClose);
    }
  };

  const showSuccessPopup = () => {
    if (!successPopup.classList.contains('popup--show')) {
      window.util.showPopup(successPopup);
      document.addEventListener('keydown', onEscButtonSuccessPopupClose);
    }
  };

  const onEscButtonSuccessPopupClose = (evt) => {
    if (evt.key === ESC_KEY) {
      window.util.closePopup(successPopup);
      document.removeEventListener('keydown', onEscButtonSuccessPopupClose);
    }
  };

  const onSuccessButtonClosePopup = () => {
    window.util.closePopup(successPopup);
  };

  const onFormSubmitPopupClose = (evt) => {
    evt.preventDefault();
    bookingForm.reset();
    window.util.closePopup(bookingPopup);
    document.removeEventListener('keydown', onEscButtonSuccessPopupClose);
    showSuccessPopup();
  };

  bookingButtons.forEach((it) => {
    it.addEventListener('click', showBookingPopup);
  });

  bookingCloseButton.addEventListener('click', onCloseButtoonBookingPopupClose);
  bookingForm.addEventListener('submit', onFormSubmitPopupClose)
  successButton.addEventListener('click', onSuccessButtonClosePopup);
})();
