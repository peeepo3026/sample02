$(function(){
  // ヘッダーの途中固定
  $('header').each(function (){

    let fvHeight = $('.contact').offset().top;
  
  
    $(window).on('scroll', function () {
      if($(window).width() > 768){
        if ($(window).scrollTop() > fvHeight) {
          $('header').addClass('sticky');
        } else {
          $('header').removeClass('sticky');
        }
      }
    });

    $(window).trigger('scroll');
  });

  // ハンバーガーメニューの開閉
  $(window).on('load resize', function(){
    var winW = $(window).width();
    var devW = 768;
    if (winW <= devW) {
      $('.nav_contents').hide();
    } else {
      $('.nav_contents').show();
    }
  });

  $('.openbtn').on('click', function() {
    $(this).toggleClass('active');
    $('.nav_contents').fadeToggle(500);
    $('body').toggleClass('noscroll');
  });

});