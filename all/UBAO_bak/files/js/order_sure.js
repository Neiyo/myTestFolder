$(document).ready(function(){
  $(".tab1").mouseover(function(){
    $(this).css("background-color","#ccc");
  });
  $(".tab1").mouseout(function(){
    $(this).css("background-color","#fff");
  });
  $(".tab1").click(function(){
    $(".tabs_content").css("display","block");
    $(".post").css("display","none");
    $(".tab1").css("background-color","#ccc");
    $(".tab2").css("background-color","#fff");
  });
  
  $(".tab2").mouseover(function(){
    $(this).css("background-color","#ccc");
  });
  $(".tab2").mouseout(function(){
    $(this).css("background-color","#fff");
  });
  $(".tab2").click(function(){
    $(".tabs_content").css("display","none");
    $(".tabs_content").after().css("display","block");
    $(".tab1").css("background-color","#fff");
    $(".tab2").css("background-color","#ccc");
  });
});
