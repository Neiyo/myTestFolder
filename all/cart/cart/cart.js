$(document).ready(function(){
  //点击购物车图标事件
  var flag = 0;
  $("#cart_img").click(function(){
    if(flag == 0){
      $("iframe").animate({height:'170px'});
      flag = 1;
    }else{
      $("iframe").animate({height:"0"});
      flag = 0;
    }
  });


  //购物车内增减删操作

  //增加商品
  $(".product_container").delegate('.add_button','click',function(){
    var dom = $(this);
    var value = parseInt(dom.prev().val());
    if( value ){
      value++;
    }
    dom.prev().val( value );
    console.log(value);
  });


  //减少一个商品
  $(".product_container").delegate('.minus_button','click',function(){
    var dom = $(this);
    var value = parseInt(dom.next().val());
    if( value > 1 ){
      value--;
    }
    dom.next().val( value );
    console.log(value);
  });

  //删除商品
  $(".product_container").delegate('.delete_button','click',function(){
    console.log($(this).parent().parent());
    $(this).parent().parent().remove();
  });


  //点击商品进入购物车
  $(".product").click(function(e){
    //生成新的div
    var img_div = $("<img></img>");
    img_div.attr('src',$(this).attr('src'));
    img_div.addClass("img_div");
    img_div.css('bottom',$(window).height() - e.pageY);
    img_div.css('right',$(window).width() - e.pageX);
    img_div.appendTo('body');
    img_div.animate({bottom:"100px", right:"150px", width:0, height:0},800,function(){
      $(this).remove();
      console.log(1);
      var html  = '<li>';
            html += '<img src="' + $(this).prop('src') + '" />';
            html += '<span class="calculate">';
              html += '<button class="minus_button">-</button>';
              html += '<input type="text" value="1" />';
              html += '<button class="add_button">+</button>';
              html += '<button class="delete_button">x</button>';
            html  += '</span>';
          html  += '</li>';
          console.log(2);
      $("iframe").contents().find(".product_container").append(html);
      console.log(3);
    });
  });

});
