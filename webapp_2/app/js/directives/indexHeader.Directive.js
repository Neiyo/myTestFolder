/**
 * Created by Administrator on 2016/8/27.
 */
define(['app'],function(app){
    app.directive("indexHeader",function(){
       return {
           scope:{},
           templateUrl:"./app/templates/indexDirective/indexHeader.template.html",
           restrict:'E',
           replace:false,
           link:function($scope){
               console.log(111);
               $scope.data = $scope.$parent.headInfo;
           }
       }
    });
})