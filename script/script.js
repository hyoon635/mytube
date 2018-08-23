$(document).ready(function() {
  $(".burger-button").click(function() {
    $(".side-nav").toggleClass("hide");

    if ($(".side-nav").hasClass("hide")) {
      $("main").css("grid-column-start", "1");
      //$("main").css("padding", "15px 11%");
    } else {
      $("main").css("grid-column-start", "2");
      //$("main").css("padding", "15px 5%");
    }
  });

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
      '<a href="#" class="no' +
      i +
      '"><div class="video-wrap"><img src="' +
      Video[i].img +
      '" alt="video" class="video-img"><img src="' +
      Video[i].img2 +
      '" alt="video" class="video-img hide"><span class="time">1:24:39</span><p>Wanderlust 🌲 - An Indie/Folk/Pop Playlist</p><span>alexrainbridMusic<i class="fas fa-check-circle"></i></span><span>조회수 16만회 ・ 3주전</span></div></a>';
  }
  $(".video-list").html(VideoList);
});
