angular.module('mean').controller('MapCtrl', ['$scope','$window','$timeout' ,function ($scope,$window,$timeout) {
    $scope.data={};
    $scope.data.fromLocation='';
	$scope.data.toLocation='';
    $scope.data.distance=0;
	$scope.data.mapOptions = {
      center: new google.maps.LatLng(21.1500, 79.0900),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var directionsDisplay;
            
    $timeout(function(){
            directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap($scope.data.myMap);
        },0);
    
    $scope.findPath=function () {

        $scope.directionsService = new google.maps.DirectionsService();

        var request = {
            origin: $scope.data.fromLocation,
            destination: $scope.data.toLocation,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        $scope.directionsService.route(request, function(response, status) {

        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            $scope.data.distance= response.routes[0].legs[0].distance.value / 1000;

        }


    });



        }

}
											 

]);

angular.module('mean').controller('EditTripCtrl', ['$scope','$modalInstance','$timeout','Trip' ,function ($scope, $modalInstance,$timeout,Trip) {
        $scope.trip={};
    $scope.routes=[];
      angular.copy(Trip,$scope.trip);
    //modal events cancel and ok
    $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
    
    $scope.ok = function () {
    $modalInstance.close($scope.trip);
  };
    var directionsDisplay;
    $scope.initializeMapControls=function(){
    
  
  //  $scope.data.fromLocation=trip.pickupLocation;
   // $scope.data.toLocation=trip.dropOfflocation;
   // $scope.data.distance=0;
        $scope.data={};
    $scope.data.mapOptions = {
        center: new google.maps.LatLng(21.1500, 79.0900),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  
    $timeout(function(){
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap($scope.data.myMap);
        google.maps.event.trigger($scope.data.myMap, 'resize');
    },0);
    }
    $scope.findPath=function () {
        
        $scope.directionsService = new google.maps.DirectionsService();

        var request = {
            origin: $scope.trip.pickupLocation,
            destination: $scope.trip.dropOfflocation,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        $scope.directionsService.route(request, function(response, status) {

            if (status == google.maps.DirectionsStatus.OK) {
                console.log(response);
                directionsDisplay.setDirections(response);
                console.log(response.routes.length);
                $scope.trip.distance= response.routes[0].legs[0].distance.value / 1000;

            }


        });



    }

}

]);

angular.module('mean').controller('googleMapCtrl',['$scope',function($scope){

    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };
}]);
        /* Directives */
 
                 