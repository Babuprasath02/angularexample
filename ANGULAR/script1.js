angular.module("myApp",[])
        .controller("Hello",function($scope){
          
            $scope.hello="Welcome Back";
            $scope.name=function(msg){
                alert(msg);
            }

        });