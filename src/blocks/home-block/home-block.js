const ready = require('../../js/utils/documentReady.js');
const $ = require('jquery');
const slick = require('slick-slider');

ready(function(){
  const $productSlider = $('.js-home-product');

  function initSlider (element) {
    $productSlider.on('init', function(event, slick){
      const $dotsCount = slick.$dots[0].childElementCount;
      const $widthDots = 100 / $dotsCount;
      const $dotsItem = slick.$dots[0].children;
      for (let item of $dotsItem) {
        item.style.width = `${$widthDots}%`
      }
    });

    $productSlider.slick({
      arrows: true,
      dots: true,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
    })
  }

  initSlider($productSlider);

});
