$('input.form-control').jvFloat();

(function () {
    $(window).scroll(function () {
        var oVal;
        oVal = $(window).scrollTop() / 240;
        return $('.blur').css('opacity', oVal);
    });
}.call(this));

// (function () {
//     $(window).scroll(function () {
//         var oVal;
//         oVal = $(window).scrollTop() / 240;
//         return $('.unblur').css('opacity', 1 - oVal);
//     });
// }.call(this));

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        // document.getElementById("fieldone").focus();
        return false;
      }
    }
  });
});