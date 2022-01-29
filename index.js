$(function () {
  $(".my-works img").on('click', function() {
    let workData = $(this).data('modal-name');
    let sameItem = document.querySelector('.' + workData);
    
    if(workData === 'workD') {
      $('.modal-movie #biwaichi').attr('src', 'https://www.youtube.com/embed/wGgpYVoCsY0');
      $(sameItem).fadeIn();
      $('html, body').addClass('cancel-scroll');
    } else if(workData === 'workE') {
      $('.modal-movie #pice-partner').attr('src', 'https://www.youtube.com/embed/1vxnKMw26mg');
      $(sameItem).fadeIn();
      $('html, body').addClass('cancel-scroll');
    } else {
      $(sameItem).fadeIn();
      $('html, body').addClass('cancel-scroll');
    }
  });

  $(".close-btn").on('click', function() {
    $('.modal-movie iframe').attr('src', '');
    $('.modal').fadeOut();
    $('html, body').removeClass('cancel-scroll');
  });


  $('.footer-nav li').on('click', function() {
    let order = $(this).index();
    let sameOrder = $('.scroll-target').eq(order).offset().top;
    console.log(sameOrder);
    $('html, body').animate({scrollTop: sameOrder});
  });
});