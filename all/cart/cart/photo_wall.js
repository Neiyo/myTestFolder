$(document).ready(function(){
  //play
  var timer = setInterval(function(){
    $(".picture").eq(i-1).removeAttr('id');
    $(".picture").eq(i).prop('id','focus');
    $("#show").children('img').fadeOut();
    setTimeout(function(){
      $("#show").children('img').prop('src',$(".picture").eq(i-1).prop('src'));
      $("#show").children('img').fadeIn();
    },400);
    if( i > length-2 ){
      i = 0;
    }
    else{
      i++;
    }
  },1000);


  //焦点事件
  $("img[class='picture']").mouseover(function(){

    //清空计时器
    clearInterval(timer);

    $(this).attr('id','focus');
    $(this).siblings("img").removeAttr('id');


    var src = $(this).prop('src');
    var img = $("#show").children("img");
    img.stop().fadeOut();
    setTimeout(function(){
      console.log(1);
      img.prop("src",src);
      img.stop().fadeIn();
    },400);

  });

  //焦点取消事件
  $("img[class='picture']").mouseout(function(){
    //setInterval("play()",1000);
    $(this).siblings("img").removeAttr('id');
  });

  //切换图片事件
  /*$("img[class='picture']").click(function(){

  });*/
  var i = 1;
  var length = $(".picture").length;



});
