/**
 * Author:
 * Date: 2016-8-26
 */
'use strict';

define([
    'app'
], function (app) {
    app.registerController('index', function ($scope,OrderService) {
        var params = {"pageSize":5};
        var promise = OrderService.getRecentOrder(params);
        promise.then(function(data){

            //header
            $scope.orderCount = data.orderCount;
            $scope.noFaHuoCount = data.noFaHuoCount;
            $scope.moneyCount = data.moneyCount;
            $scope.noMoneyCount = data.noMoneyCount;

            //recentBill
            $scope.$broadcast("oderList",data.topOrderList);

        },function(reason){
            console.log(reason);
        });
        // app.httpHelper.get(AppConfig, AppConfig.pages.indexSearch, params, $http, function(data){
        //     var headArr = [];
        //     headArr.push({
        //         "name":"全部订单",
        //         "count":data.orderCount
        //     });
        //     headArr.push({
        //         "name":"待收货",
        //         "count":data.noFaHuoCount
        //     });
        //     headArr.push({
        //         "name":"已转账",
        //         "count":data.moneyCount
        //     });
        //     headArr.push({
        //         "name":"待转账",
        //         "count":data.noMoneyCount
        //     });
        //     console.log('head',headArr);
        //     $scope.$broadcast("indexHeader",headArr);
        //
        //     $scope.$broadcast("oderList",data.topOrderList);
        // });
    });
});
