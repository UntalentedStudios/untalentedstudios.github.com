$(document).ready(function() {
  $(".main-logo").fadeTo(700,1, function() {
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
});
