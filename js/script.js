$(document).ready(function() {
  $(".main-navigation").delay(1000).fadeTo(800,1, function() {
      $(this).css("pointer-events","auto");
  });
  $(".main-logo").delay(300).fadeTo(800,1, function() {
      $(".main-video").css("pointer-events","auto");
  });

  $(".main-video").hover(function() {
      $(this).fadeTo(200,1, function() {
          $(this).get(0).currentTime = 0.42;
          $(this).get(0).play();
      });
  },function() {
      $(this).fadeTo(500,0);
  });

  $(".right-navigator").hover(function() {
      $(".content").css("left","0%");
  });
  $(".left-navigator").hover(function() {
      $(".content").css("left","100%");
  });
});
