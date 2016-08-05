$(document).ready(function(){

  //确认转账，显示支付页面
  $("#ensure").click(function(){
    $(".pwd").fadeIn(400);
  });
  //支付页面点击事件
  //点击X返回上一个页面
  $("#imgCancel").click(function(){
    history.back();
  });
  //点击确认支付
  $("#confirm").click(function(){
    $(".pwd").fadeOut(400,function(){
      //AjAX支付
      $.post("test.php",{'test':'ok'},function(data){
        if( data == 'success' ){
          $(".success").fadeIn(400);
          var i = 3;
          setInterval(function(){
            i--;
            if( i >= 0 ){
              console.log($(".success").find("span").find("b").html(i));
            }
            else{
              clearInterval(this);
              window.location.href = "UbaoSend.html";
            }
          },1000);
        }
        else{

        }
      });
    });
  });

  //分页功能
  //填充数据
  var html = '<tr>';
      html += '<td >1</td>';
      html += '<td>3408281991036841265</td>';
      html += '<td>张三</td>';
      html += '<td>定期存款 </td>';
      html += '<td>80.00</td>';
      html += '<td>发放备注</td>';
      html += '</tr>'
  for(var i = 0;i < 200;i++){
    $('#itemContainer').append(html);
  }
  //调用分页插件
  $("span.footer").jPages({
    containerID : "itemContainer"
  });
  //修改样式
  var temp_arr = $(".footer").find("a");
  var page_arr = [];
  for(var i = 1; i < temp_arr.length - 1; i++){
    page_arr.push(temp_arr[i]);
  }
  page_arr.map(function(a){
    $(a).addClass("pagenumber");
  });
});
