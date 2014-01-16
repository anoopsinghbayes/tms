angular.module('mean').controller('MapCtrl', ['$scope', function ($scope) {
    $scope.fromLocation='';
	$scope.toLocation='';
	$scope.mapOptions = {
      center: new google.maps.LatLng(18.9750, 72.8258),
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };


 var directionsDisplay = new google.maps.DirectionsRenderer($scope.myMap);
 var directionsService = new google.maps.DirectionsService();
$scope.findPath=function () {
 
 // $scope.$apply();
  var request = {
    origin:$scope.fromLocation,
    destination:$scope.toLocation,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  
	
  directionsService.route(request, function(response, status) {
    $scope.$apply(function(){
	  if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
	});
  
});
}											 

}
											 

]);



    
        /* Directives */
 
                 