

define(['app'], function (app) {
    app.service('sShoppingCart', function($http,$q,AppConfig) {
        this.getCartCount = function () {
            var d = $q.defer();
            app.httpHelper.get(AppConfig, AppConfig.pages.getCartCount, null, $http, function (data) {
                d.resolve(data);
            });
            return d.promise;
        };

    });

});


