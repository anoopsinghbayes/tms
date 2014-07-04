//'use strict';
        angular.module('mean').directive('places', function() {
 
    return {
		
		restrict:'A',
        require: 'ngModel',
		link:function($scope, elm, attrs,ctrl){
         var autocomplete = new google.maps.places.Autocomplete(elm[0], {});
google.maps.event.addListener(autocomplete, 'place_changed', function() {
$scope.$apply(function(){
	var place = autocomplete.getPlace();
//$scope.location = place.geometry.location.lat() + ',' + place.geometry.location.lng();
	if(place.formatted_address)
        ctrl.$setViewValue(place.formatted_address);

});     
});
      
 

            }}
		 });

var VEHICLE_REGEXP = /^[A-Z]{2}\s[0-9]{1,2}\s[A-Z]{1,2}\s[0-9]{4}$/ig;
 angular.module('mean').directive('vehicleno', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
          
          /*check if viewvalue is blank here it-self and  
            if its blank set the validation to true,
            let required be handeled by required validator
          */
            if (viewValue==='' || VEHICLE_REGEXP.test(viewValue)) {
              // it is valid
              ctrl.$setValidity('vehicleno', true);
              return viewValue;
            } else {
              // it is invalid, return undefined (no model update)
              ctrl.$setValidity('vehicleno', false);
              return undefined;
            }
         
         
          
      });
    }
  };
});