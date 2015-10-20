$(document).ready(function() {
  $(".content").hover(function() {
    console.log('hola');
      $("#video-logo").fadeTo(600,0, function() {
        $(this).get(0).pause();
        $(this).get(0).currentTime = 0.2;
      });
  },function() {
      $("#video-logo").fadeTo(1,1, function() {
          $(this).get(0).play()
      });
  });

});
