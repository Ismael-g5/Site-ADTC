$('.portfolio-menu ul li').click(function() {
  $('.portfolio-menu ul li').removeClass('active');
  $(this).addClass('active');
  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
    filter: selector
  });
  return false;
});
// $(document).ready(function() {
//   var popup_btn = $('.popup-btn');
//   popup_btn.magnificPopup({
//     type: 'image',
//     gallery: {
//       enabled: true
//     }
//   });
// });

// -------------------------------------------------------------


(function ($) {
  var x = document.getElementsByClassName("views-field-field-botao");

if(x.innerHTML === ""){
    x.style.display = "none";
}
})(jQuery);

//arruma os itens do slide
function ordemItensSlider(){
  var botoes = $('.views-field.views-field-field-botao > .field-content')
  var containers = $('.slides > li > .flex-caption')
  var count = 0

  containers.each(function(){
    $(this).append(botoes[count])
    count++
  })
}

ordemItensSlider()

// adiciona classe na linha do tempo
$('.views-element-container.form-group > .d-flex > .view-content > ul > li').addClass('py-5')
$('.views-element-container.form-group > .d-flex > .view-content > ul > li').css('border', 'none')
$('.views-element-container.form-group > .d-flex > .view-content > ul').css('padding', '0')
$('.views-element-container.form-group > .d-flex > .view-content > ul').addClass('container')

// navbar da linha do tempo
$('#block-linhadotempo').addClass('navbar navbar-expand navbar-dark bg-light py-0 px-0 shadow-sm nav-internal-menu')
$('#block-linhadotempo > ul').addClass('navbar-nav')
$('#block-linhadotempo').addClass('d-flex')
$('#block-linhadotempo > ul > li').addClass('nav-link')
$('#block-linhadotempo > ul > li > a').addClass('nav-item')
$('#block-linhadotempo').css('justify-content', 'center')


// webform campo assunto
$("#edit-assunto").prop('required',true);

// menu mobile
$('.navbar > .mobile-only.menu-mobile > .menu > .holder > div > ul').removeClass('menu menu--main nav')

// muda navbar pro local correto
$('.dialog-off-canvas-main-canvas').prepend($('.navbar.navbar-expand-lg.navbar-light.bg-white.sticky-top'))



// adiciona classe actv nos itens clicados na navbar
$('#sticky-menu > .container > #nav-internal-menu > .navbar-nav > .nav-item > a').click(function(){
  $('#sticky-menu > .container > #nav-internal-menu > .navbar-nav > .nav-item > a').each(function (){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
    }
  })
  $(this).addClass('active')
})



// resolve bug de menu sobreposto desktop
setTimeout(() => {
	$('.menu.menu--main.nav.navbar-nav > li').click(function () {
		$('.menu.menu--main.nav.navbar-nav > li').each(function () {
			$(this).removeClass('open show')
			$(this).find('ul').removeClass('open show')
		})
		$(this).addClass('open show')
	})	
}, 1000);

// resolve bug de menu sobreposto mobile
setTimeout(() => {
	$('.navbar-nav > li').click(function () {
		$('.navbar-nav > li').each(function () {
			$(this).removeClass('open show')
			$(this).find('ul').removeClass('open show')
		})
		$(this).addClass('open show')
	})	
}, 1000);