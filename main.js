(function($){
  $(function(){ //this makes it so that jquery doesnt load, even if the script tags are at the top, until the html has loaded
'use strict';

$(".drop-down-one").hide();
$(".drop-down-two").hide();
$(".drop-down-three").hide();


$(".files").click(function() {
  $(".drop-down-one").slideToggle( 200, function() {
  });
});

$(".mail").click(function() {
  $(".drop-down-two").slideToggle( 200, function() {
  });
});

$(".cloud").click(function() {
  $(".drop-down-three").slideToggle( 200, function() {
  });
});

});
}(jQuery));
