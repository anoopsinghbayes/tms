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

		
    }];
    
    $scope.isCollapsed = false;
}]);
