/**
 * Created by Administrator on 07/12/2014.
 */

angular.module('mean').controller('tripOrderCtrl', ['$scope','$window','$timeout' ,function ($scope,$window,$timeout) {

    $scope.showmap=false;
    $scope.order={};

    $scope.order.tripDetails=[];


$scope.addTrip=function(){
    $scope.order.tripDetails.push({});
}
    $scope.initializeMapControls=function(){

        $scope.showmap=true;
        setTimeout(function() {
            console.log('initializeMapControls');

            $scope.data.mapOptions = {
                center: new google.maps.LatLng(21.1500, 79.0900),
                zoom: 4,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            google.maps.event.trigger($scope.data.myMap, 'resize');
        },10);
    }
    $scope.data={};
//    $scope.data.fromLocation='';
//    $scope.data.toLocation='';
//    $scope.data.distance=0;
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

        var tripWayPoints=[];
        //colect waypoints
        for(var i=1;i<=$scope.order.tripDetails.length-2;i++){
            tripWayPoints.push({
                location: $scope.order.tripDetails[i].location,
                stopover:true}
               );
        }
        var request = {
            origin: $scope.order.tripDetails[0].location,
            destination: $scope.order.tripDetails[$scope.order.tripDetails.length-1].location,
            waypoints:tripWayPoints,
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