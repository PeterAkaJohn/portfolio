
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) { // this refers to window
        $("nav").addClass("scrolled-nav");
    }

    if ($(this).scrollTop() <=0) {
      $("nav").removeClass("scrolled-nav");
    }
});
