/**
 * Created by Administrator on 2016/8/27.
 */

define([
    'app'
],function(app){
    app.directive("recentBill",function(){
       return {
           scope:{},
           replace:false,
           restrict:'E',
           templateUrl:"./app/templates/dires/recentBill.html",
           controller:function($scope,OrderService){
               $scope.$on("oderList",function(event,data){
                   data.map(function (orderInfo) {
                      orderInfo.orderStatus = OrderService.ToString('status',orderInfo.orderStatus);
                   });
                   $scope.data = data;
               });
           },
           link:function(){
               
           }
       }
    });
});