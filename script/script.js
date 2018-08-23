$(document).ready(function() {
  $(".burger-button").click(function() {
    $(".side-nav").toggleClass("hide");

    if ($(".side-nav").hasClass("hide")) {
      $("main").css("grid-column-start", "1");
    } else {
      $("main").css("grid-column-start", "2");
    }
  });
});
