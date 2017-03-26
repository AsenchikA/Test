$(document).ready(function(){

  // бургер в header
  var toggler = document.getElementById('toggler');
  toggler.onclick = function(e){
    e.preventDefault();
    toggler.classList.toggle('toggler--close');
  };

  $("#promo-slider").owlCarousel({
    loop: true,
    items:1,
    dots:true,
    dotsEach: true
  });

  $('.footer-menu__item').click(function(){
    $(this).toggleClass("footer-menu__item--open");
    $(this).children().toggleClass("footer-submenu--visible");
  });
});
