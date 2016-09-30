require.config({
    paths: {
        angular: './libs/angular/angular',
        'uiRoute' : './libs/angular-ui-router/release/angular-ui-router',
        "angular-route": './libs/angular-route/angular-route',
        jquery: './libs/jquery/dist/jquery',
        amazeui: './libs/amazeui/dist/js/amazeui',
        uapp: './utils/app',

    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'uiRoute' : {
            deps : ['angular']
        },
        'uapp' : {
            deps : ['amazeui']
        }
    },
    priority: [
        "angular"
    ],/*,
    i18n: {
        locale: 'ja-jp'
    },*/
    urlArgs: 'v=1.0.0.4'
});

require(['angular',
        'app',
        'routes',
        'uiRoute',
        'utils/httpHelper',
        'directives/pageView',
        'services/OrderService',
        'services/ShoppingCart',
        'jquery',
        'amazeui',
        'uapp',

], function (angular) {
    angular.bootstrap(document, ['app']);
});
