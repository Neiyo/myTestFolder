require.config({

    paths: {
        jquery: './libs/jquery/dist/jquery',
        angular: './libs/angular/angular',
        "angular-route": './libs/angular-route/angular-route',
        amazeui: './libs/amazeui/dist/js/amazeui'
        //res:'../resources/nls/res'
    },
    shim: {
        'angular' : {
            exports : 'angular'
        },
        'angular-route' : {
            deps : ['angular'],
            exports : "angular-route"
        }
        /*,
        'res':{exports:'res'}*/

    },
    priority: [
        "angular"
    ],/*,
    i18n: {
        locale: 'ja-jp'
    },*/
    urlArgs: 'v=1.0.0.2'
});

require(['angular',
         'angular-route',
         'app',
         'controllers/index',
         'jquery',
         'amazeui',
         'controllers/goods',
         'controllers/order',
         'controllers/shoppingCart',    
         'routes'
], function (angular,angularRoute,app) {
    angular.bootstrap(document, ['app']);
});
