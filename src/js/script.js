$(document).ready(function(){

  // бургер в header
  var toggler = document.getElementById('toggler');
  toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
}
});
