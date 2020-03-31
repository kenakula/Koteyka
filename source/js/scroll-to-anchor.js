'use strict';

(function () {

  const mainNavList = document.querySelector('.main-nav__list');
  const anchors = mainNavList.querySelectorAll('a[href*="#"]');

  let timeout;

  const scrollToAnchor = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  };

  const onAnchorClickDocumentScroll = (evt) => {
    evt.preventDefault();

    let blockId = evt.target.getAttribute('href').substr(1);
    console.log('blockId:', blockId)
    scrollToAnchor(blockId);
  }

  const onWindowResiseSetScroll = () => {
    if (window.matchMedia("(min-width: 678px)").matches) {
      console.log('good')

      for (let anchor of anchors) {
        anchor.addEventListener('click', function (evt) {
          onAnchorClickDocumentScroll(evt);
        });
      }

    }
  }

  window.addEventListener('resize', function () {
    if (timeout) {
      this.clearTimeout(timeout);
    }

    timeout = this.setTimeout(onWindowResiseSetScroll, 500);
  })

})();
