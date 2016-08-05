var UbaoSend = require("./js/UbaoSend");

$(document).ready(function(){
  var INDEX_HEAD = 'http://localhost/UBAO_test/files/templates/';

  $(".mainleft").load(function(){
    var _this  = '';
    var a_href = '';
    $(this).contents().find("a").click(function(){
      a_href = $(this).prop("href");
      console.log(a_href);
      $(".mainright").load(function(){
        var _this = $(".mainright").contents();
        switch (a_href){
          case INDEX_HEAD + 'account.html':
            break;
          case INDEX_HEAD + 'companyAccount.html':
            break;
          case INDEX_HEAD + 'list.html':
            break;
          case INDEX_HEAD + 'newUser.html':
            break;
          case INDEX_HEAD + 'oldUser.html':
            break;
          case INDEX_HEAD + 'order_manager.html':
            break;
          case INDEX_HEAD + 'order_sure.html':
            break;
          case INDEX_HEAD + 'payconfirm.html':
            break;
          case INDEX_HEAD + 'piliangdaoru.html':
            break;
          case INDEX_HEAD + 'UbaoSend.html':
            UbaoSend(_this);
            break;
        }
      });
    });
  });


});


function getDom(str){
  return  $(".mainright").contents().find(str);
}
