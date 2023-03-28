var app=angular.module("parent",[]);
app.controller("parentctrl",function($scope){
    $scope.info="parentController";
});
app.controller("childctrl",function($scope){
    $scope.info1="childController";
});