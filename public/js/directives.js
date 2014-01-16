'use strict';
        angular.module('mean').directive('places', function() {
 
    return {
		
		restrict:'A',
		link:function($scope, elm, attrs){
         var autocomplete = new google.maps.places.Autocomplete(elm[0], {});
google.maps.event.addListener(autocomplete, 'place_changed', function() {
$scope.$apply(function(){
	var place = autocomplete.getPlace();
//$scope.location = place.geometry.location.lat() + ',' + place.geometry.location.lng();
	if(place.formatted_address)
	elm.value=place.formatted_address;
		console.log(elm.value);
});     
});
      
 
   /* return {
      link: link
    };*/
  }}
		 });