if(('#news-carousel').length){
	$('#news-carousel').bxSlider({
	  pager: false
	});
}
if(('#main-slider').length){
	$('#main-slider').bxSlider({
	  
	});
}
if(('.product-carousel .owl-carousel').length){
	$('.product-carousel .owl-carousel').owlCarousel({
    loop:false,
    margin: 15,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
	})
}
if(('#brand-carousel').length){
	$('#brand-carousel').owlCarousel({
    loop:false,
    margin: 25,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
	})
}
$('.toggle-menu').click(function(e) {
  e.preventDefault();
  var menu = $('#nav');
  if(menu.is(':hidden')){
    menu.show();
    menu.animate({"right": "+=260px"}, "middle");
  }
});
$('.nav-close').click(function(e) {
  e.preventDefault();
  var menu = $('#nav');
  if(menu.is(':visible')){
    menu.animate({"right": "-260px"}, "middle").delay(50).fadeOut(100);
  }
});

$('.catalog-toggle').click(function(e) {
  e.preventDefault();
  var catalog = $('#catalog-menu');
  if(catalog.is(':hidden')){
    catalog.fadeIn(250);
    $('body').addClass('catalog-open')
  }
  else{
    $('body').removeClass('catalog-open')
    catalog.fadeOut(250)
  }
});

var top_show = 250;
var delay = 1000;
$(document).ready(function() {
  $(window).scroll(function () { 
    if ($(this).scrollTop() > top_show) $('.up-button').fadeIn();
    else $('.up-button').fadeOut();
  });
  $('.up-button').click(function () { 
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });
});

$(".slider-range").slider({
   min: 50,
   max: 50000,
   values: [50,50000],
   range: true,
   stop: function(event, ui) {
      $(".minCost").val($(".slider-range").slider("values",0));
      $(".maxCost").val($(".slider-range").slider("values",1));
    },
    slide: function(event, ui){
      $(".minCost").val($(".slider-range").slider("values",0));
      $(".maxCost").val($(".slider-range").slider("values",1));
    }
  });
   $(".minCost").change(function(){
   var value1=$(".minCost").val();
   var value2=$(".maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
      value1 = value2;
      $(".minCost").val(value1);
   }
   $(".slider-range").slider("values",0,value1); 
  });
  $(".maxCost").change(function(){
   var value1=$(".minCost").val();
   var value2=$(".maxCost").val();
   
   if (value2 > 50000) { value2 = 50000; $(".maxCost").val(50000)}

   if(parseInt(value1) > parseInt(value2)){
      value2 = value1;
      $(".maxCost").val(value2);
   }
   $(".slider-range").slider("values",1,value2);
 });

function toggleFilter(){
  $('.filter-toggle').click(function(e) {
    e.preventDefault();
    var filter = $('#sidebar-filter');
    if(filter.is(':hidden')){
      filter.slideDown(250);
      $(this).addClass('active')
    }
    else{
      filter.slideUp(250);
      $(this).removeClass('active')
    }
  });
}

if (window.matchMedia("(max-width: 767px)").matches){
  $('.filter').after($('#filter'));
  toggleFilter()
}
if($('#card-slider').length){
  $('#card-slider').bxSlider({
    pagerCustom: '#bx-pager',
    mode: 'fade'
  });
}

$('.tab-item').click(function(e) {
  $('.tab-item').removeClass('active')
  $(this).addClass('active')
});

var tab = new Array('#description','#char', '#review');

function opcl(arr, e){
  if ($(e).css('display') == 'none'){
    for(var i in arr){   
       $(arr[i]).hide();     
    }
    $(e).show();       
  }
}
$(document).ready(function(){
  $('.phone-input').inputmask("+7 (999) 999-99-99"); 
})

$('.open-menu').click(function(e) {
  e.preventDefault();
  var menu = $(this).next();
  if(menu.is(':hidden')){
    $(this).addClass('active')
    menu.slideDown(250)
  }
  else{
    $(this).removeClass('active')
    menu.slideUp(250)
  }
});