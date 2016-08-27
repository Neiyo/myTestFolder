/**
 * Created by Administrator on 2016/8/27.
 */
define(['app'],function(app){
   app.directive("buttonGroup",function(){
      return {
          scope:{
              routes:'@forRoute'
          },
          replace:false,
          templateUrl:"./app/templates/indexDirective/buttonGroup.template.html"
      } 
   }); 
});