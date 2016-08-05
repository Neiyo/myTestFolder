/**
* @author 周仁杰
* @date : 2016/03/25
* @version:1.0
*/

//设置Cookie
function setCookie(c_name,value,expiredays){
  var exdate=new Date();
  exdate.setDate(exdate.getDate()+expiredays);
  document.cookie=c_name+ "=" +escape(value)+
  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

//获取Cookie
function getCookie(c_name){
  if (document.cookie.length>0)
  {
    c_start=document.cookie.indexOf(c_name + "=");
    if (c_start!=-1)
    {
        c_start=c_start + c_name.length+1 ;
        c_end=document.cookie.indexOf(";",c_start);
      if (c_end==-1)
      {
        c_end=document.cookie.length;
        return unescape(document.cookie.substring(c_start,c_end));
      }
    }
  }
  return ""
}

//储存数据
function saveData(data){
  //md5加密
  var tooken = hex_md5(data);

  //写入Cookie
  setCookie("tooken", tooken, 365);

  //若浏览器支持localStorage同时写入localStorage
  if(window.localStorage){
    localStorage["tooken"] = tooken;
  }
  console.log("数据已经成功写入本地缓存，有效期为1年");
}

//ajax发送
function ajax(url,method,jsonString,callback){
  var xmlhttp;
  //兼容性确保
  if (window.XMLHttpRequest){
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else{
    // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  //请求成功回调函数
  xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
      callback();
    }
  };
  xmlhttp.open(method,url,true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

  //若jsonString不为空，则需要发送数据，否则不发送数据
  if(jsonString != ''){
    xmlhttp.send("data=" + jsonString);
  }

}

//jsonString添加一个字段
function addJSONString(str,key,value){
  var temp = str.substring(0,str.length-1);
  temp = temp + ',"' + key + '":"' + value + '"}';
  return temp;
}


//jsonString批量添加新字段
function addJSONStrings(str,json){
  json['0'].map(function(object){
    str = addJSONString(str,object.key,object.value);
  });
  return str;
}



//用当前日期生成md5值，并且写入数据库
function Date_MD5_Save(){
  var date = Date.parse(new Date());
  saveData(date.toString());
}


//最终整合的方法
/*
  url 发送地址
  method 指定传送类型，POST/GET
  data 数据源，固定格式为：
  var data = {
    "0":[
      {'key': 'c' ,'value':'2'},
      {'key':'b','value':'3'},
      ........
    ]
  };
  若有其余字段请在省略号处参照上方数据格式继续添加
*/
function dataSend(data,send_url,send_method){
  //用当前日期生成md5 tooken，并且保存至Cookie和localStorage
  Date_MD5_Save();

  //发送数据至服务器
  var tooken = getCookie('tooken');
  var send_url = 'demo.php';
  var send_method = 'POST';

  //准备数据
  var head = '{"' + 'tooken_md5' + '"' + ':' + '"' + tooken + '"}';
  var send_jsonString = addJSONStrings(head, data);
  var send_callback = function callback(){
    //see you soon

  };

  //执行发送
  ajax(send_url, send_method, send_jsonString, send_callback);

}
