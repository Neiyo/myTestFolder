/**
 * Created by Administrator on 2016/8/26.
 */
define([],function(){
    var service = ['$http',function($http){
        $http.get('test.json').success(function(){
            console.log(data);
        });
    }];

    return service;
});