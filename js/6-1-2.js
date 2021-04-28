$(function () {
  // ヘッダーの途中固定
  $('header').each(function () {

    let fvHeight = $('.concept').offset().top;


    $(window).on('scroll', function () {
      if ($(window).scrollTop() > fvHeight) {
        $('header').addClass('sticky');
      } else {
        $('header').removeClass('sticky');
      }
    });

    $(window).trigger('scroll');
  });


  // スライド
  $('.slider').slick({
    fade: true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed: 1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
  });

  //スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
  $('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
    $('.slider').slick('slickPlay');
  });

  // ハンバーガーメニューの開閉
  $(window).on('load resize', function () {
    var winW = $(window).width();
    var devW = 768;
    if (winW <= devW) {
      $('.nav_contents').hide();
    } else {
      $('.nav_contents').show();
    }
  });

  $('.openbtn').on('click', function () {
    $(this).toggleClass('active');
    $('.nav_contents').fadeToggle(500);
    $('body').toggleClass('noscroll');
  });

  // スムーススクロール
  // var headerHeight = 150;
  var headerHeight = $('header').outerHeight();
  $("a[href^='#']").click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHeight;

    $("html,body").animate({ scrollTop: position }, speed, "linear");
    return false;
  });

});