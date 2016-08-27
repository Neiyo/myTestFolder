define(['app'],function(app){
    app.registerController('goods',function($scope){
        var vm = $scope.vm = {};
        vm.title = 'hello';
    });
});