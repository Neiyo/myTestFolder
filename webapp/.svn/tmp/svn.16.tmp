define(['app'], function (app) {
    app.config(function($stateProvider, $urlRouterProvider, $controllerProvider){
        app.registerController = $controllerProvider.register;
        app.loadJs = function(js){
            return function($rootScope, $q){
                var def = $q.defer(),deps=[];
                angular.isArray(js) ? (deps = js) : deps.push(js);
                require(deps,function(){
                    $rootScope.$apply(function(){
                        def.resolve();
                    });
                });
                return def.promise;
            };
        };
        $urlRouterProvider.otherwise('/index');
        $stateProvider.state('index',{
            url : '/index',
            templateUrl : 'app/templates/index.html',
            resolve:{
                deps:app.loadJs('controllers/index'),
                indexInfo:function($http){
                    $http({
                        method:'GET',
                        url:"test.json"
                    });
                }
            },
            controller : 'index'
        });
        $stateProvider.state('goods',{
            url : '/goods',
            templateUrl : 'app/templates/goods.html',
            controller : 'goods',
            resolve:{
                deps:app.loadJs('controllers/goods')
            }
        });
    });
});

