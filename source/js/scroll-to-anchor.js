'use strict';

(function () {

  const mainNavList = document.querySelector('.main-nav__list');
  const anchors = mainNavList.querySelectorAll('a[href*="#"]');

  const onAnchorClickDocumentScroll = (evt) => {
    evt.preventDefault();

    let blockId = evt.target.getAttribute('href').substr(1);

    document.getElementById(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

  };

  for (let anchor of anchors) {
    anchor.addEventListener('click', onAnchorClickDocumentScroll);
  }

})();
