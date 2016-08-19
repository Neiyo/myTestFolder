/**
  * Module dependcies
  */
var fs = require('fs');

fs.readdir(process.cwd(),function(err,files){
  console.log('');

  if(!files.length){
    return console.log('  \033[31m No files to show!\033[039m\n');
  }

  console.log('   Select which file or directory you want to see\n');
  function file(i){
    var fileName = files[i];
    fs.stat(__dirname + '/' + fileName,function(err,stat){
      if( stat.isDirectory() ){
          console.log('   ' + i + '   \33[36m' + fileName + '/\33[39m');
      }
      else{
          console.log('   ' + i + '   \33[90m' + fileName + '/\33[39m');
      }

      i++;
      if( i == files.length ){
        console.log('');
        process.stdout.write('    \33[33mEnter your choice: \33[39m');
        process.stdin.resume();
      }
      else{
        file(i);
      }
    });
  }

  file(0);
});
