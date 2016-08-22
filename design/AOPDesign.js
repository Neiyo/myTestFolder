Function.prototype.before = function(beforefn){
  var _self = this;
  return function(){
    before.apply(this,arguments);
    return _self.apply(this,arguments);
  }
}

var func = function(){
  console.log(2);
}
func =  func.before(function(){
   console.log(1);
});
func();
