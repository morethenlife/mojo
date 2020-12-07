const ready = require('../../js/utils/documentReady.js');
const $ = require('jquery');
const slick = require('slick-slider');

ready(function(){
  const $productSlider = $('.js-home-product');
  const $pasteSlider = $('.js-paste');

  function initSlider (element, slideShow, slideScroll) {
    element.on('init', function(event, slick){
      const $dotsCount = slick.$dots[0].childElementCount;
      const $widthDots = 100 / $dotsCount;
      const $dotsItem = slick.$dots[0].children;
      for (let item of $dotsItem) {
        item.style.width = `${$widthDots}%`
      }
    });

    element.slick({
      arrows: true,
      dots: true,
      infinite: false,
      slidesToShow: slideShow,
      slidesToScroll: slideScroll,
    })
  }

  initSlider($productSlider, 5, 1);
  initSlider($pasteSlider, 3, 1);

});
