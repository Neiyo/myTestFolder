var EventEmitter = require('events').EventEmitter;

var eventEmitter = new EventEmitter;

var responseData = '';
//主事件
var start = function(){
  console.log('事件开始...........');
  eventEmitter.emit('send');
}

//发送数据事件
var send = function(){
  var str = '数据正在发送';
  process.stdout.write(str);
  setInterval(function(){
    str += '.';
    process.stdout.write('.');
    if(str.length > 10){
        clearInterval(this);
        eventEmitter.emit('waiting');
    }
  },1000);
}

//等待服务器响应事件
var waiting = function(){
  var str = '\n等待服务器响应';
  process.stdout.write(str);
  setInterval(function(){
    str += '.';
    process.stdout.write('.');
    if(str.length > 10){
        clearInterval(this);
        responseData = '这是从服务器获取到的数据';
        eventEmitter.emit('wait');
    }
  },1000);
}

//获取数据事件
var response = function(){
  console.log('这里是一些数据:' + responseData);
  eventEmitter.emit('end');
}

//结束事件
var end = function(){
  console.log('请求结束');
}


eventEmitter.on('start',start);
eventEmitter.on('send',send);
eventEmitter.on('waiting',waiting);
eventEmitter.on('response',response);
eventEmitter.on('end',end);

eventEmitter.emit('start');
