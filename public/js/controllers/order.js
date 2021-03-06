'strict'
angular.module('mean').controller('orderCtrl', ['$scope','Order','$http','$modal',function ($scope,Order,$http,$modal) {
    $scope.openTrip = function (trip) {
        var mode="edit";
       if(!trip)
           mode="new";
        var modalInstance = $modal.open({
            templateUrl: '/views/Trip/EditTrip.html',
            controller: 'EditTripCtrl',
            size: 'lg',
            backdrop:'static',
            //windowClass:'tripModal',
            resolve: {
                Trip: function () {
                   // var newTrip={};
                    //angular.copy(trip,newTrip);
                    return trip;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            if(mode==="edit")
                _.assign(trip,selectedItem);
            else
                $scope.data.trips.push(selectedItem)
        }, function () {
           console.log('Modal dismissed at: ' + new Date());
        });
    };
   


    $scope.data={
        date:2014-01-01,
        status:'open',
        customer:{name:'manish',address:'',contact:'',_id:''},




        trips:[{

            pickupLocation:
                "Thane",
            dropOfflocation:
                "Dadar",
            pickUpdate: new Date()
            ,
            dropOffdate:
                new Date()

            ,
            distance:
                200,
            vehicleno:
                "mh 45 w 3453"
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
                console.log(res.data);
                return res.data;
            });
    };


    $scope.save=function(){
        $scope.data.customer=$scope.data.customer._id;
      console.log($scope.data);
      Order.post($scope.data);
    }
}]);

angular.module('mean').controller('orderListCtrl',['$scope','Order',function($scope,Order){
   Order.getList().then(function(orders){
        console.log(orders.plain())
       $scope.Orders=orders;
   },function(err){
       console.log(err);
   })
}]);