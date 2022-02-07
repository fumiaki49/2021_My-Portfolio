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

  $(document).on('click', function(event) {
    let target = $(event.target);

    if (target.hasClass('modal')) {
      $('.modal').fadeOut();
      $('.modal-movie iframe').attr('src', '');
      $('html, body').removeClass('cancel-scroll');
    } else if (target.hasClass('close-btn')) {
      $('.modal').fadeOut();
      $('.modal-movie iframe').attr('src', '');
      $('html, body').removeClass('cancel-scroll');
    }
  });


  $('.footer-nav li').on('click', function() {
    let order = $(this).index();
    let sameOrder = $('.scroll-target').eq(order).offset().top;
    $('html, body').animate({scrollTop: sameOrder});
  });
});