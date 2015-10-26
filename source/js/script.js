(function($) {
  $('.js_nav_link').localScroll({ offset: -80 });

  $('#sponsors').on('mouseover click', 'li', function(event) {
    $('.big-sponsor').addClass('hidden')
    $('.' + this.id + '.big-sponsor').removeClass('hidden')
  });

  checkMobile();

  $(window).resize(function() {
    checkMobile();
  });
})(jQuery)

function checkMobile() {
  if (matchMedia('only screen and (max-width: 540px)').matches) {
    $('.fancybox').unbind('click');

    $('.fancybox').on('click', function(event) {
      event.preventDefault()
    });

    $('.speaker').on('click', function(event) {
      var details = $(this).children('.detail:first')
      details.toggle();
      details.children('.name:first').toggle()
    });
  } else {
    $('.fancybox').fancybox({
      maxWidth:    800,
      fitToView:   false,
      width:       '80%',
      autoSize:    false,
      closeClick:  false,
      openEffect:  'none',
      closeEffect: 'none',
			autoHeight:  'true'
    });
  }
};
