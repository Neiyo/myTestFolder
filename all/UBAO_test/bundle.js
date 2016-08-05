(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./js/UbaoSend":2}],2:[function(require,module,exports){
var UbaoSend = function(ctx){
  ctx.find('#sub').click(function(){
    var checkNum = /^\d{17}[xX0-9]$/;
    var val = ctx.find('input[name="userId"]').val();
    if ( checkNum.test(val) ){
      window.location.href = "oldUser.html";
    }
  });
}

module.exports = UbaoSend;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmaWxlcy9BcHAuanMiLCJmaWxlcy9qcy9VYmFvU2VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBVYmFvU2VuZCA9IHJlcXVpcmUoXCIuL2pzL1ViYW9TZW5kXCIpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICB2YXIgSU5ERVhfSEVBRCA9ICdodHRwOi8vbG9jYWxob3N0L1VCQU9fdGVzdC9maWxlcy90ZW1wbGF0ZXMvJztcclxuXHJcbiAgJChcIi5tYWlubGVmdFwiKS5sb2FkKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgX3RoaXMgID0gJyc7XHJcbiAgICB2YXIgYV9ocmVmID0gJyc7XHJcbiAgICAkKHRoaXMpLmNvbnRlbnRzKCkuZmluZChcImFcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgYV9ocmVmID0gJCh0aGlzKS5wcm9wKFwiaHJlZlwiKTtcclxuICAgICAgY29uc29sZS5sb2coYV9ocmVmKTtcclxuICAgICAgJChcIi5tYWlucmlnaHRcIikubG9hZChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfdGhpcyA9ICQoXCIubWFpbnJpZ2h0XCIpLmNvbnRlbnRzKCk7XHJcbiAgICAgICAgc3dpdGNoIChhX2hyZWYpe1xyXG4gICAgICAgICAgY2FzZSBJTkRFWF9IRUFEICsgJ2FjY291bnQuaHRtbCc6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBJTkRFWF9IRUFEICsgJ2NvbXBhbnlBY2NvdW50Lmh0bWwnOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgSU5ERVhfSEVBRCArICdsaXN0Lmh0bWwnOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgSU5ERVhfSEVBRCArICduZXdVc2VyLmh0bWwnOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgSU5ERVhfSEVBRCArICdvbGRVc2VyLmh0bWwnOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgSU5ERVhfSEVBRCArICdvcmRlcl9tYW5hZ2VyLmh0bWwnOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgSU5ERVhfSEVBRCArICdvcmRlcl9zdXJlLmh0bWwnOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgSU5ERVhfSEVBRCArICdwYXljb25maXJtLmh0bWwnOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgSU5ERVhfSEVBRCArICdwaWxpYW5nZGFvcnUuaHRtbCc6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBJTkRFWF9IRUFEICsgJ1ViYW9TZW5kLmh0bWwnOlxyXG4gICAgICAgICAgICBVYmFvU2VuZChfdGhpcyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXREb20oc3RyKXtcclxuICByZXR1cm4gICQoXCIubWFpbnJpZ2h0XCIpLmNvbnRlbnRzKCkuZmluZChzdHIpO1xyXG59XHJcbiIsInZhciBVYmFvU2VuZCA9IGZ1bmN0aW9uKGN0eCl7XG4gIGN0eC5maW5kKCcjc3ViJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICB2YXIgY2hlY2tOdW0gPSAvXlxcZHsxN31beFgwLTldJC87XG4gICAgdmFyIHZhbCA9IGN0eC5maW5kKCdpbnB1dFtuYW1lPVwidXNlcklkXCJdJykudmFsKCk7XG4gICAgaWYgKCBjaGVja051bS50ZXN0KHZhbCkgKXtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJvbGRVc2VyLmh0bWxcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFViYW9TZW5kO1xuIl19
