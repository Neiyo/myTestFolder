require('./module_B');
require('./module_C');

var module_A = {
  privateVariable:'this is private',
  name:'john',
  data: new Date().toString(),
  getPrivate:function(){
    return privateVariable;
  }
}

module.exports = module_A;
