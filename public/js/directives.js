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

angular.module('mean').directive('mainMenu', function ($state) {
    return {
        restrict: 'E',
        templateUrl:'views/partials/mainMenu.html',
        replace: true,
        transclude: true,
        scope: {
          links:'='
        },
        link: function (scope, element, attrs) {
            console.log("treeview directive loaded");
        }
    };
});
angular.module('mean').directive('subMenu', function ($compile) {
    return {
        restrict: 'E',
        templateUrl:'views/partials/subMenu.html',
        replace: true,
        transclude: true,
        scope: {
          sublink:'=',
        },
        link: function (scope, element, attrs) {
             scope.$watch('sublink.links', function() {
               console.log("watching")
                element.append($compile('<ul collapse="sublink.isCollapsed"><sub-menu ng-repeat="sublink in sublink.links" sublink="sublink"></sub-menu></ul>')(scope));
            });
        }
    };
});
angular.module('mean').directive('tmsAddress',function(){
    return{
        templateUrl: 'views/partials/address.html',
        scope:{
            address:"="
        }
    }
});

//dragable directive

angular.module('mean').directive('draggable', function ($document) {
    return function (scope, element, attr) {
        var startX = 0, startY = 0, x = 0, y = 0;
        element.addClass('draggable');
        element.on('mousedown', function (event) {
            // Prevent default dragging of selected content
            event.preventDefault();
            startX = event.screenX - x;
            startY = event.screenY - y;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
            y = event.screenY - startY;
            x = event.screenX - startX;
            element.css({
                top: y + 'px',
                left: x + 'px'
            });
        }

        function mouseup() {
            $document.off('mousemove', mousemove);
            $document.off('mouseup', mouseup);
        }
    };
});

angular.module('mean').directive('form', function () {
    return {
        restrict: 'E',
        link: function (scope, elem) {
            // set up event handler on the form element
            elem.on('submit', function () {
                // find the first invalid element
                var firstInvalid = elem[0].querySelector('input.ng-invalid,select.ng-invalid,textarea.ng-invalid');
                if (firstInvalid && firstInvalid.tagName.toLowerCase() === 'ng-form') {
                    firstInvalid = firstInvalid.querySelector('.ng-invalid');
                }
                // if we find one, set focus
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            });
        }
    };
})
angular.module('mean').directive('tripCostEstimate',function(){
    return{
        scope:{},
        controller:function(){


            var round = function (num, decimal) {
                if (typeof (num) === 'number') {
                    //if decimal is not passed or not a number set it to 2.
                    decimal = (typeof (decimal)) ? decimal : 2;
                    var temp = Math.pow(10, decimal);
                    return Math.round(num * temp) / temp;
                }

            }
            this.rate = 0;
            this.rateUnit='perTon';
            this.distance = 0;
            this.quantity = 0;
            this.amount = 0;
            this.taxPercentage = 5;
            this.taxAmount = 0;
            this.totalAmount = 0;
            this.calculateAmount = function (info) {


                //first calculate the tax amount or amount percentage
                if (info === 'TAX_AMT') {
                    if(this.rateUnit=='perKm')
                        this.amount = this.rate * this.distance * this.quantity;
                    else
                        this.amount = this.rate * this.quantity;

                    this.taxPercentage = (this.taxAmount * 100) / this.amount;
                    //rounding up
                    this.taxPercentage = round(this.taxPercentage, 2);

                    this.totalAmount = this.amount + this.taxAmount;
                }
                else if (info === "TAX_PER") {
                    if(this.rateUnit=='perKm')
                        this.amount = this.rate * this.distance * this.quantity;
                    else
                        this.amount = this.rate * this.quantity;

                    this.taxAmount = this.amount * (this.taxPercentage / 100);

                    //rounding up
                    this.taxAmount = round(this.taxAmount, 2);

                    this.totalAmount = this.amount + this.taxAmount;
                }

                //if the user is changing the total amount
                else if (info === "TTL_AMT") {
                    this.amount = this.totalAmount - this.taxAmount;
                    if(this.rateUnit=='perKm')
                        this.rate = this.amount / (this.distance * this.quantity);
                    else
                        this.rate = this.amount /  this.quantity;
                    //rounding up
                    this.rate = round(this.rate, 2);

                    //this.taxAmount = this.amount * (this.taxPercentage / 100);

                }
                else {
                    if(this.rateUnit=='perKm')
                        this.amount = this.rate * this.distance * this.quantity;
                    else
                        this.amount = this.rate  * this.quantity;
                    this.amount = round(this.amount, 2);
                    this.taxAmount = this.amount * (this.taxPercentage / 100);
                    this.taxAmount = round(this.taxAmount, 2);
                    this.totalAmount = this.amount + this.taxAmount;
                }

            }
            this.calculateByPercentage = function () {
                this.calculateAmount();



            }
            this.calculateByAmt = function () {
                this.calculateAmount();

                this.amount = this.amount + this.taxAmount;
            }

        },
        controllerAs: 'ctrl',
        templateUrl:'views/partials/TripCostEstimate.html'
    }
})

