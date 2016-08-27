/**
 * Created by Administrator on 2016/8/27.
 */

define([
    'app'
],function(app){
    app.directive("recentBill",function(){
       return {
           scope:{
               data:'@'
           },
           replace:false,
           templateUrl:"./app/templates/indexDirective/recentBill.template.html",
           link:function($scope){
               $scope.data = $scope.$parent.billInfo;
           }
       }
    });
});