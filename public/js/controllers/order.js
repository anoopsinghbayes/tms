'strict'
angular.module('mean').controller('orderCtrl', ['$scope','Order',function ($scope,Order) {
    $scope.data={
        date:2014-01-01,
        status:'open',
        customer:'sameer',




        trips:[{

            pickupLocation:
                "Thane",
            dropOfflocation:
                "Dadar",
            pickUpdate:"2014-01-01"
            ,
            dropOffdate:
                "2014-01-01"

            ,
            distance:
                200,
            vehicleno:
                "RGNNO"
            ,
            capacity:100
            ,
            dieselUsed:100
            ,
            product:"sulpher",
            pickupWeight :{
                tyreweight:200,
                netweight:200,
                grossweight:100

            }
            ,
            dropOffWeight:{
                tyreweight:200,
                netweight:200,
                grossweight:100

            }

        }]
    };
    $scope.tabs = [
        { title:"Dynamic Title 1", content:"Dynamic content 1" },
        { title:"Dynamic Title 2", content:"Dynamic content 2", disabled: true }
    ];

    $scope.alertMe = function() {
        setTimeout(function() {
            alert("You've selected the alert tab!");
        });
    };

    $scope.navType = 'pills';
	 $scope.people = [
    { name: 'Adam',      email: 'adam@email.com',      age: 10 },
    { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
    { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
    { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
    { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
    { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
    { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
    { name: 'Adrian',    email: 'adrian@gmail.com',    age: 21 }
  ];

    $scope.save=function(){
      console.log(JSON.stringify($scope.data));
      Order.post($scope.data);
    }
}]);