$(document).ready(function() {
  var Video = [
    { img: "assets/img/video1.jpg", img2: "assets/img/video2.jpg" },
    { img: "assets/img/video2.jpg", img2: "assets/img/video3.jpg" },
    { img: "assets/img/video3.jpg", img2: "assets/img/video4.jpg" },
    { img: "assets/img/video4.jpg", img2: "assets/img/video5.jpg" },
    { img: "assets/img/video5.jpg", img2: "assets/img/video6.jpg" },
    { img: "assets/img/video6.jpg", img2: "assets/img/video1.jpg" }
  ];

  var VideoList = "";
  for (var i = 0; i < Video.length; i++) {
    VideoList +=
      '<div class="video-wrap col-xl-2 col-lg-2 col-md-2 col-sm-2"><a href="#"> <img src="' +
      Video[i].img +
      '" alt="video" class="video-img"><span class="time">1:24:39</span><p>Wanderlust 🌲 - An Indie/Folk/Pop Playlist</p><span>alexrainbridMusic<i class="fas fa-check-circle"></i></span><span>조회수 16만회 ・ 3주전</span></a></div>';
  }
  $(".video-list").html(VideoList);

  $(".video-wrap:nth-child(6)").addClass("d-xl-none");

  //사이드바 toggle
  if ($(window).width() > 1389) {
    $(".burger-button").click(function() {
      $(".side-nav").toggleClass("hide");

      if ($(".side-nav").hasClass("hide")) {
        $("main").addClass("grid-c-start-1");
        $(".video-wrap:nth-child(5), .video-wrap:nth-child(6)").removeClass(
          "d-xl-none"
        );
        $(".video-list, .video-subject").addClass("wdt-1280");
        $(".video-list > .col-md-2").addClass("mr-0");
      } else {
        $("main").addClass("grid-c-start-2");
        $(".video-list, .video-subject").removeClass("wdt-1280");
        $(".video-list, .video-subject").addClass("wdt-1070");
        $(".video-wrap:nth-child(6)").addClass("d-xl-none");
        $(".video-list > .col-md-2").removeClass("mr-0");
      }
    });
  }

  if ($(window).width() < 1389) {
    $(".burger-button").click(function() {
      $(".side-nav-slide").toggleClass("show");
    });
  }
});
