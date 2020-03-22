'use strict';

(function () {
  const ESC_KEY = 'Escape';

  const sortingList = document.querySelector('.sorting__list');
  const sortingToggler = document.querySelector('.sorting__toggler');

  const showSortingList = () => {
    if (!sortingList.classList.contains('sorting__list--show')) {
      sortingList.classList.add('sorting__list--show');
      document.addEventListener('keydown', onEscButtonSortingListClose);
    }
  };

  const onClickSortingListClose = () => {
    sortingList.classList.remove('sorting__list--show');
    document.removeEventListener('keydown', onEscButtonSortingListClose);
  };

  const onEscButtonSortingListClose = (evt) => {
    if (evt.key === ESC_KEY) {
      sortingList.classList.remove('sorting__list--show');
      document.removeEventListener('keydown', onEscButtonSortingListClose);
    }
  };

  sortingToggler.addEventListener('click', showSortingList);
  sortingList.addEventListener('click', onClickSortingListClose);
})();
