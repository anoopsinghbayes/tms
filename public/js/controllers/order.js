'strict'
angular.module('mean').controller('orderCtrl', ['$scope','Order','$http',function ($scope,Order,$http) {
    $scope.data={
        date:2014-01-01,
        status:'open',
        customer:{name:'manish'},




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
    $scope.getCustomer =function(val){
        return $http.get('/customers/', {
            params: {
                name: val
            }
        }).then(function(res){

                return res.data;
            });
    };


    $scope.save=function(){
      console.log(JSON.stringify($scope.data));
      Order.post($scope.data);
    }
}]);

angular.module('mean').controller('orderListCtrl',['$scope','Order',function($scope,Order){
   Order.getList().then(function(orders){

       $scope.Orders=orders;
   },function(err){
       console.log(err);
   })
}]);