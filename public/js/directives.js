'use strict';
angular.module('mean').directive('places', function () {

	return {

		restrict: 'A',
		require: 'ngModel',
		link: function ($scope, elm, attrs, ctrl) {
			var autocomplete = new google.maps.places.Autocomplete(elm[0], {});
			google.maps.event.addListener(autocomplete, 'place_changed', function () {
				$scope.$apply(function () {
					var place = autocomplete.getPlace();
					//$scope.location = place.geometry.location.lat() + ',' + place.geometry.location.lng();
					if (place.formatted_address)
						ctrl.$setViewValue(place.formatted_address);

				});
			});


			/* return {
      link: link
    };*/
		}
	}
});