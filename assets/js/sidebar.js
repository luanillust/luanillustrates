$(document).ready(function($) {
  $('.sidebar-button').sideMenu();
  (function($) {
    $(window).resize(function resize() {
      if ($(window).width() < 1440) {
        $('body').removeClass('push-body-toright');
        $('.sidebar-button').removeClass('active');
        $('.sidebar').removeClass('open');
        return $('.sidebar-button').addClass('push-body');
      }
      $('.sidebar-button').removeClass('push-body');
    }).trigger('resize');
  })(jQuery);

});

(function($) {
  $.fn.sideMenu = function() {
    if ($('.splash-background').length == 0) {
      $('body').addClass('push-body');
    }

    $(this).click(function(e) {

      e.stopPropagation();
      $(this).toggleClass('active');
      $('.sidebar').toggleClass('open');

      if ($(this).is('.push-body')) {
        $('body').toggleClass('push-body-toright');
      }

      return;
    });

    var sideMenu = {
      close: function () {
        $('body').removeClass('push-body-toright');
        $('.sidebar').removeClass('open');
        $('.sidebar-button').removeClass('active');
      }
    }

    // if ($(window).width() <= 1440) {
      $(document).click(function() {
        sideMenu.close();
      });
    // }

    // $('.sidebar a').on('click',function() {
    //   sideMenu.close();
    // });

  };

})(jQuery);

$(document).ready(function() {
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });

  $(window).resize(function resize() {
    $('#toggle').removeClass('active');
    $('#overlay').removeClass('open');
  }).trigger('resize');

})