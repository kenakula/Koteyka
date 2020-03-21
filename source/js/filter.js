'use strict';

(function () {
  const ESC_KEY = 'Escape';

  const filterToggler = document.querySelector('.filter__toggler');
  const filter = document.querySelector('.filter');
  const closeButton = filter.querySelector('.popup__close');

  const showFilter = () => {
    filter.classList.add('popup--show');
  };

  const closeFilter = () => {
    filter.classList.remove('popup--show');
  };

  const onFilterTogglerFilterShow = () => {
    showFilter();
  };

  const onCloseButtonPopupClose = (evt) => {
    evt.preventDefault();
    closeFilter();
  }

  const onEscButtonPopupClose = (evt) => {
    if (evt.key === ESC_KEY) {
      closeFilter();
    }
  };

  filterToggler.addEventListener('click', onFilterTogglerFilterShow);
  closeButton.addEventListener('click', onCloseButtonPopupClose);
  document.addEventListener('keydown', onEscButtonPopupClose);
})();
