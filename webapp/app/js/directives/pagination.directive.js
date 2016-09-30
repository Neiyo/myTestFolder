/**
 * Created by Administrator on 2016/8/29.
 */
define(['app'],function(app){
   app.directive("pageDirective",function(){
       return {
           scope:{
               url:'@forUrl',
               size:'@forSize'
           },
           replace:false,
           restrict:'E',
           templateUrl:"./app/templates/pagination.template.html",
           controller:function($scope,$http){
               //刷新数据
               var _scope = $scope;
               $scope.$watch("page+size",function(){
                   $http.post($scope.url,{
                       pageNo :$scope.page,
                       pageSize :$scope.size
                   }).success(function(data){
                       $scope.totalPages = data.totalPages;
                       $scope.$emit("pageToParent",data.topOrderList);
                   });
               });
           },
           link:function($scope){
               $scope.$on("totalPages",function(event,data){
                   $scope.totalPages = data;
               });
               //判断长度 隐藏、显示
               var handleCP = function(){
                   var currentPage = angular.element(".currentP");
                   currentPage.siblings().css("display","none");
                   currentPage.prev().css("display","inline-block");
                   currentPage.prev().prev().css("display","inline-block");
                   currentPage.next().css("display","inline-block");
                   currentPage.next().next().css("display","inline-block");
               };
               
               //提示省略页数
               var omit = function(){
                   var prev = angular.element(".preOmit");
                   var next = angular.element(".nextOmit");
                   if( prev.next().css("display") == 'inline-block' ){
                       prev.css("display","none");
                   }
                   else if( prev.next().css("display") == 'none' ){
                       prev.css("display","inline-block");
                   }
                   if( next.prev().css("display") == 'inline-block' ){
                       next.css("display","none");
                   }
                   else if( next.prev().css("display") == 'none' ){
                       next.css("display","inline-block");
                   }
               };

               $scope.pageClick = function(){
                   //修改当前页
                   $scope.page = angular.element(this).html();
                   angular.element(this).addClass(".currentP");
                   angular.element(this).siblings().removeClass(".currentP");

                   //省略号的显示
                   omit();

                   //currentPage的前2页和后2页显示，其余隐藏
                   handleCP();
               };
           }
       }
   })
});