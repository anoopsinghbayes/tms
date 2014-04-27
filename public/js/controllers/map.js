angular.module('mean').controller('MapCtrl', ['$scope','$window','$timeout' ,function ($scope,$window,$timeout) {
    $scope.fromLocation='';
	$scope.toLocation='';
    $scope.distance=0;
	$scope.mapOptions = {
      center: new google.maps.LatLng(21.1500, 79.0900),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var directionsDisplay;
    $timeout(function(){
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap($scope.myMap);
},0);
    $scope.findPath=function () {

        $scope.directionsService = new google.maps.DirectionsService();

        var request = {
            origin: $scope.fromLocation,
            destination: $scope.toLocation,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        $scope.directionsService.route(request, function(response, status) {

        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            $scope.distance= response.routes[0].legs[0].distance.value / 1000;

        }


    });



}

}
											 

]);

angular.module('mean').controller('EditTripCtrl', ['$scope','$window','$timeout' ,function ($scope,$window,$timeout) {
    $scope.fromLocation='';
    $scope.toLocation='';
    $scope.distance=0;
    $scope.mapOptions = {
        center: new google.maps.LatLng(21.1500, 79.0900),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var directionsDisplay;
    $timeout(function(){
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap($scope.myMap);
    },0);
    $scope.findPath=function () {

        $scope.directionsService = new google.maps.DirectionsService();

        var request = {
            origin: $scope.fromLocation,
            destination: $scope.toLocation,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        $scope.directionsService.route(request, function(response, status) {

            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                $scope.distance= response.routes[0].legs[0].distance.value / 1000;

            }


        });



    }

}

]);

    
        /* Directives */
 
                 