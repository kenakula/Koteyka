'use strict';

(function () {
  const ESC_KEY = 'Escape';

  const filterToggler = document.querySelector('.filter__toggler');
  const filter = document.querySelector('.filter');
  const closeButton = filter.querySelector('.popup__close');

  const onFilterTogglerFilterShow = () => {
    window.util.showPopup(filter);
    document.addEventListener('keydown', onEscButtonPopupClose);
  };

  const onCloseButtonPopupClose = (evt) => {
    evt.preventDefault();
    window.util.closePopup(filter);
    document.removeEventListener('keydown', onEscButtonPopupClose);
  }

  const onEscButtonPopupClose = (evt) => {
    if (evt.key === ESC_KEY) {
      window.util.closePopup(filter);
      document.removeEventListener('keydown', onEscButtonPopupClose);
    }
  };

  filterToggler.addEventListener('click', onFilterTogglerFilterShow);
  closeButton.addEventListener('click', onCloseButtonPopupClose);

})();
