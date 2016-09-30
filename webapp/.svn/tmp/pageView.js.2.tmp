define(['app'], function (app) {
    app.directive("pageView", function () {
        console.log(12312313);
        return {
            templateUrl: "./app/templates/dires/pageView.html",
            restrict: 'ECAM',
            replace: true,
            controller: function ($scope) {
                console.log($scope);

                $scope.$watch('pageData', function () {
                    if ($scope.pageData != null) {
                        var pageNos = new Array();
                        for (var i = $scope.pageData.startNo; i <= $scope.pageData.endNo; i++) {
                            pageNos.push(i);
                        }
                        console.log(pageNos);
                        $scope.pageData.pageNos = pageNos;
                    }
                });

                $scope.pageClick=function(toPageNo)
                {
                    $scope.params.pageNo=toPageNo;
                    $scope.getData();
                }

            }
        }
    });
})