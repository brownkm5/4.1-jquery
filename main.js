(function($){
  $(function(){ //this makes it so that jquery doesnt load, even if the script tags are at the top, until the html has loaded
'use strict';

$(".closed").hide();

  $('.list').click(function(){
    if($(this).next().is(':visible')){
      $(this).next().slideUp(200, function(){

      });
    } else {
      $(this).next().slideDown(200, function(){

      });
      $(this).siblings('.list').next().slideUp(200, function(){

      });
    }
  });


  $(this).next().slideToggle(200, function(){

  });


});
}(jQuery));
