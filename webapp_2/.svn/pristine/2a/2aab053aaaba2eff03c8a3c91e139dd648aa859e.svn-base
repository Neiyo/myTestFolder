require.config({

    paths: {
        angular: './libs/angular/angular',
        'uiRoute' : './libs/angular-ui-router/release/angular-ui-router',
        "angular-route": './libs/angular-route/angular-route',
        jquery: './libs/jquery/dist/jquery',
        amazeui: './libs/amazeui/dist/js/amazeui'
        //res:'../resources/nls/res'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'uiRoute' : {
            deps : ['angular']
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
        'jquery',
        'amazeui'
], function (angular) {
    angular.bootstrap(document, ['app']);
});

