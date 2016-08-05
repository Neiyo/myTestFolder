var array = [];
for(var i = 0;i < 7;i++){
  array.push('<a class="pagenumber" href="www.baidu.com">' + (i+1) + '</a>');
}

//每页显示条数
var sizePage = 10;
//总数据
var count = array.length;
//总页数
var countPage = Math.floor(count/sizePage);
//最后一页的数目
var lastCount = count % sizePage;
console.log(countPage,lastCount);


//若数据小于7条，则直接显示
if( count <=7 ){
  var length = array.length;
  for(var a = 0; a < length; a++){
    $("#previous").after(array.pop());
  }
}

if( count > 7 ){

}
