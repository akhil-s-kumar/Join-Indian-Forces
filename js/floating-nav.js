$(window).scroll(function () {
  if ($(window).scrollTop() > 5) {
    $(".navbar").addClass("floatingNav");
  } else {
    $(".navbar").removeClass("floatingNav");
  }
});
