angular.module("Tables",[])
.controller("tableCtrl",function($scope){
    $scope.student={
        firstName:"Babu",
        lastName:"Prasath",
        fee:500,
        subject:[
            {name:'Java',marks:95},
            {name:'Python',marks:90},
            {name:'SE',marks:85}
        ],
        fullName: function() {  
            var studentObject;  
            studentObject = $scope.student;  
            return studentObject.firstName + " " + studentObject.lastName;  
         }  

    }
})