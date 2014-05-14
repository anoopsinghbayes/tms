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
      
 
   /* return {
      link: link
    };*/
  }}
		 });

/*angular.module('mean').directive('lblReq',function(){
	return{
		restrict:'A',
		link:function($scope,elm,attr){
			 var _lblText=elm.html();
			 var _title=_lblText+" cannot be Empty.";
			elm.attr('title',_title);
			 var asterisk = angular.element('<span>&nbsp;<i class="fa fa-asterisk" style="color:#ca3219" ></i></span>');
			var testspan= angular.element('<span style="color:#ca3219;font-size: 1.4em;line-height: 0px;">*</span>')
			elm.prepend(testspan);
		}
	}
	
});*/