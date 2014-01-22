'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Articles',
        'link': 'articles',
        'state':'edit'

    }, {
        'title': 'Create New Article',
        'link': 'articles/create',
        'state':'edit'
		
    }, {
        'title': 'Edit Customer',
        'link': 'customer/edit','state':'edit.contacts'
		
    },
				  {
        'title': 'Create BP',
        'link': 'businessPartners/create',
                      'state':'contacts'

		
    },			  {
        'title': "BP's",
        'link': 'businessPartners',
            'state':'edit.address'

		
    },			 
				   {
        'title': "Map",
        'link': 'map',
            'state':'map'

		
    },			 
				   {
        'title': "Map2",
        'link': 'map2',
            'state':'map2'

		
    }];
    
    $scope.isCollapsed = false;
}]);
angular.module('mean').controller('TabsDemoCtrl',['$scope',function TabsDemoCtrl($scope) {
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
}]) ;