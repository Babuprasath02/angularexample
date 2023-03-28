angular.module("select",[])
.controller("option",function($scope){
    $scope.list=[  {model : "Ford", color : "red"},  
    {model : "Honda", color : "white"},  
    {model : "Volvo", color : "black"},  
    {model : "Hundai", color : "gray"}  ];
})