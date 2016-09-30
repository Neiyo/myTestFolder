
/**
 * Author:
 * Date: 2016-8-26
 */
'use strict';

define([
    'app',
    '../directives/indexHeader.Directive',
    '../directives/recentBill.Directive',
    '../directives/buttonGroup.Directive'
],function(app) {
    app.registerController('index', function ($scope,$http) {
        var vm = $scope.vm = {};
        vm.title = 'hello';
        $http.get('test.json').success(function(data){
            //head数据
            $scope.headInfo = data.head;
            //bill数据
            $scope.billInfo = data.bill;
            console.log(data,333);
        });
    });
});