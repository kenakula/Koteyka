'use strict';

(function () {

  const mainNavList = document.querySelector('.main-nav__list');
  const anchors = mainNavList.querySelectorAll('a[href*="#"]');

  const scrollToAnchor = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  };

  const onAnchorClickDocumentScroll = (evt) => {
    evt.preventDefault();

    let blockId = evt.target.getAttribute('href').substr(1);
    scrollToAnchor(blockId);
  }

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (evt) {
      onAnchorClickDocumentScroll(evt);
    });
  }

})();
