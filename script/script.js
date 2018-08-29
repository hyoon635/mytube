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
      '<div class="video-wrap col-xl-2 col-lg-2 col-md-2 col-sm-2 video-wrap"><a href="#"><img src="' +
      Video[i].img +
      '" alt="video" class="video-img"><img src="' +
      Video[i].img2 +
      '" alt="video" class="video-img2"><button type="button" class="clock" data-toggle="modal" data-target="#clock-modal"><i class="fas fa-clock"></i></button><span class="time">1:24:39</span><p>Wanderlust 🌲 - An Indie/Folk/Pop Playlist</p><span>alexrainbridMusic<i class="fas fa-check-circle"></i></span><span>조회수 16만회 ・ 3주전</span></a></div>';
  }
  $(".video-list").html(VideoList);

  $(".video-wrap:nth-child(6)").addClass("d-xl-none");

  //사이드바 toggle
  if ($(window).width() > 1277) {
    $(".video-list > .col-md-2").css("margin-right", "");
    $(".burger-button").click(function() {
      $(".side-nav").toggleClass("hide");

      if ($(".side-nav").hasClass("hide")) {
        $(".video-wrap:nth-child(5), .video-wrap:nth-child(6)").removeClass(
          "d-xl-none"
        );
        $(".video-list, .video-subject").toggleClass("wdt-1280");
        $(".video-list > .col-md-2").css("margin-right", "0")
      } else {
        $(".video-list, .video-subject").removeClass("wdt-1280");
        $(".video-wrap:nth-child(6)").toggleClass("d-xl-none");
        //$(".video-list > .col-md-2").removeClass("mr-0");
        $(".video-list > .col-md-2").css("margin-right", "");
      }
    });
  }

  if ($(window).width() < 1277) {
    $(".video-list > .col-md-2").css("margin-right", "");
    $("side-nav-slide").add();
    $(".burger-button").click(function() {
      $(".side-nav-slide, .overlay").addClass("show");
    });
    $(".nav-slide-button").click(function() {
      $(".side-nav-slide, .overlay").removeClass("show");
    });
  }

  // var mql = window.matchMedia("screen and (max-width: 1276px)");

  // mql.addListener(function(e) {
  //   if (e.matches) {
  //     console.log("모바일 화면 입니다.");
  //   } else {
  //     console.log("데스크탑 화면 입니다.");
  //   }
  // });

  $(window).resize(function() {
    var width_size = window.outerWidth;
    console.log(width_size);

    if (width_size >= 1277) {
      console.log("데스크탑 화면 입니다.");
      $(".video-list > .col-md-2").css("margin-right", "");
      $("side-nav-slide").remove();
      $(".burger-button").click(function () {
        $(".side-nav").toggleClass("hide");
        $(".side-nav-slide, .overlay").removeClass("show");

        if ($(".side-nav").hasClass("hide")) {
          $(".video-wrap:nth-child(5), .video-wrap:nth-child(6)").removeClass(
            "d-xl-none"
          );
          $(".video-list, .video-subject").toggleClass("wdt-1280");
          $(".video-list > .col-md-2").css("margin-right", "0");
          //$(".video-list > .col-md-2").toggleClass("mr-0");
        } else {
          $(".video-list, .video-subject").removeClass("wdt-1280");
          $(".video-wrap:nth-child(6)").toggleClass("d-xl-none");
          $(".video-list > .col-md-2").css("margin-right", "");
          //$(".video-list > .col-md-2").removeClass("mr-0");
        }
      });

    } else {
      console.log("모바일 화면 입니다.");
      $(".video-list > .col-md-2").css("margin-right", "");
      $("side-nav-slide").add();
      $(".video-list, .video-subject").removeClass("wdt-1280");
      $(".burger-button").click(function () {
        $(".side-nav-slide, .overlay").addClass("show");
      });
      $(".nav-slide-button").click(function () {
        $(".side-nav-slide, .overlay").removeClass("show");
      });
    }
  });
});
