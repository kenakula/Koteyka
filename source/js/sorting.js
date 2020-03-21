'use strict';

(function () {
  const sortingList = document.querySelector('.sorting__list');
  const sortingToggler = document.querySelector('.sorting__toggler');

  const showSortingList = () => {
    if (!sortingList.classList.contains('sorting__list--show')) {
      sortingList.classList.add('sorting__list--show');
    }
  };

  const onClickSortingListClose = () => {
    sortingList.classList.remove('sorting__list--show');
  };

  sortingToggler.addEventListener('click', showSortingList);
  sortingList.addEventListener('click', onClickSortingListClose);
})();
