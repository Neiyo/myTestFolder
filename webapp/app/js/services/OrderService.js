/**
 * Created by Administrator on 2016/8/30.
 */
define(["app"],function(app){
    app.factory("OrderService",function($http,AppConfig,$q){    
        var service = {
            getRecentOrder:function(params,fn){
                var d = $q.defer();
                app.httpHelper.get(AppConfig, AppConfig.pages.indexSearch, params, $http, function(data){
                    d.resolve(data)
                });
                return d.promise;
            },
            ToString:function(type,str){
                var result = '';
                if(type == 'status'){
                    if( str == 0 ){
                        result =  '未转账';
                    }
                    if( str == 1 ){
                        result =  '已转账';
                    }
                    if( str == 2 ){
                        result =  '待收货';
                    }
                    if( str == 3 ){
                        result =  '已完成';
                    }
                    if( str == 4){
                        result =  '已取消';
                    }
                }
                return result;
            }
        };
        return service;
    });
    // app.orderStatusToString = function(str){
    //     str = parseInt(str);
    //     if( str == 0 ){
    //         return '未转账';
    //     }
    //     if( str == 1 ){
    //         return '已转账';
    //     }
    //     if( str == 2 ){
    //         return '待收货';
    //     }
    //     if( str == 3 ){
    //         return '已完成';
    //     }
    //     if( str == 4){
    //         return '已取消';
    //     }
    // }
})