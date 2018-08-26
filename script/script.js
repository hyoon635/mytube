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
      '<div class="video-wrap col-md-2"><a href="#"> <img src="' +
      Video[i].img +
      '" alt="video" class="video-img"><span class="time">1:24:39</span><p>Wanderlust 🌲 - An Indie/Folk/Pop Playlist</p><span>alexrainbridMusic<i class="fas fa-check-circle"></i></span><span>조회수 16만회 ・ 3주전</span></a></div>';
  }
  $(".video-list").html(VideoList);

  //사이드바 toggle
  if ($(".video-list").css("width", "1070px")) {
    $(".video-wrap:last-child").css("display", "none");
  }
  $(".burger-button").click(function() {
    $(".side-nav").toggleClass("hide");

    if ($(".side-nav").hasClass("hide")) {
      $("main").css("grid-column-start", "1");
      $(".video-list, .video-subject")
        .css("max-width", "1285px")
        .css("width", "1285px");
      $(".video-list > .col-md-2").css("margin-right", "0");
      $(".video-wrap:last-child").css("display", "block");
    } else {
      $("main").css("grid-column-start", "2");
      $(".video-list, .video-subject").css("width", "1070px");
      $(".video-list > .col-md-2").css("margin-right", "35px");
      $(".video-wrap:last-child").css("display", "none");
    }
  });
});
