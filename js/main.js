$(function () {
  $(".slider__inner").slick({
    prevArrow: `<button type="button" class="slider__btn-slick slick-prev"></button>`,
    nextArrow: `<button type="button" class="slider__btn-slick slick-next"></button>`,
    dots: true,
    infinite: false,
  });
  $(".header__btn-menu").on("click", function(){
    $(".menu ul").slideToggle();
  })
  $("#form").on("submit", function(){
    $.ajax({
      url: '/handler.php',
      method: 'post',
      dataType: 'html',
      data: $(this).serialize(),
      success: function(data){
        $('#message').html(data);
      }
    });
  });
});
