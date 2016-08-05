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
