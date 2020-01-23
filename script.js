
//   <link  href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet">
//  <script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script> 

let show = function(state){
  document.getElementById('modalForm').style.display = state;
  document.getElementById('filter').style.display = state;
}


$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.elementor-menu,.slider,.dostopremechatelnosti,.residence_text_span,.slider_container,.residence_slider_1,.restoran,.menu_1,.yslygi_slider,.oplata_karta').toggleClass('active');   
    });
    
});

$(function(){

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  
  $('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  
$('.filtering').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
{
  breakpoint: 1086, 
  settings: {
      slidesToShow: 4, 
      slidesToScroll: 1
  }
},
{
  breakpoint: 610, 
  settings: {
      slidesToShow: 2, 
      slidesToScroll: 1
  }
}
    
  ]

  
});

let filtered = false;

$('.js-filter').on('click', function(){
  if (filtered === false) {
    $('.filtering').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});
});


jQuery(document).ready(function() {
  
  let btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});








// function openbox(box){
//   display = document.getElementById(box).style.display;
//   if(display=='none'){
//         document.getElementById(box).style.display='block';
//   }else{
//         document.getElementById(boxy).style.display='none';
//   }
// }
// function openbox(boxy){
//   display = document.getElementById(boxy).style.display;
//   if(display=='none'){
//         document.getElementById(boxy).style.display='block';
//   }else{
//         document.getElementById(boxy).style.display='none';
//   }
// }

// function openbox(bo){
//   display = document.getElementById(bo).style.display;
//   if(display=='none'){
//         document.getElementById(bo).style.display='block';
//   }else{
//         document.getElementById(bo).style.display='none';
//   }
// }

// &('#bloki .blok').hide()
 
// $('#' + box).show()


// function openbox(bloki){
//   $('.bloki').click(function(event){
//     $('.box,.boxy').toggleClass('box');   
//     $('#bloki .blok').hide()
// });

// }
// function openbox(box){$('#bloki .blok').hide();
// $('#' + box).show();
// }
