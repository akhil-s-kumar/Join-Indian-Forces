$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    $(".navbar").addClass("floatingNav");
  } else {
    $(".navbar").removeClass("floatingNav");
  }
});
