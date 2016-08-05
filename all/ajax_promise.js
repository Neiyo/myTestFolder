
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

  //写入Cahche
  setCookie("tooken", tooken, 365);

  //若浏览器支持localStorage同时写入localStorage
  if(window.localStorage){
    localStorage["tooken"] = tooken;
  }
  console.log("数据已经成功写入本地缓存，有效期为1年");
}

//ajax发送
function ajax(url,method,jsonString,successFcuntion){
  var xmlhttp;
  //兼容性确保
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  //请求成功回调函数
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      console.log(67);
      successFcuntion();
    }
  };
  xmlhttp.open(method,url,true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  if(jsonString != ''){
    xmlhttp.send("data=" + jsonString);
  }
}


var jsonString = {"fname" : "Bill","lname" : "Gates"};
new Promise(ajax("demo.php",'POST',JSON.stringify(jsonString),a)).then(function(val){
    console.info(val);
    return new Promise(saveData(val));
}).then(function(val){
    console.info(val);
    return val;
});
