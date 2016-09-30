/**
 * Created by Administrator on 2016/8/26.
 */
define([
    'app',
    'angular',
    'services/index'
], function(app,angular,index) {
    "use strict";
    var services = [
        {
            name:"indexService",
            service:index
        }
    ];

    services.map(function(){

    });

    var init = function(){

    }
    angular.module("app").factory("indexService",function($http){
        var service = {
            getData:function(){
                var _data = '';
                $http.get('test.json').success(function(data){
                    console.log(data);
                    _data = data;
                });
                return _data;
            }
        }
        return service;
    });
});
