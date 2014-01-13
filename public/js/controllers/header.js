'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Articles',
        'link': 'articles',
        'state':''

    }, {
        'title': 'Create New Article',
        'link': 'articles/create',
        'state':''
		
    }, {
        'title': 'Edit Customer',
        'link': 'customer/edit','state':'customer.edit'
		
    },
				  {
        'title': 'Create BP',
        'link': 'businessPartners/create',
                      'state':''

		
    },			  {
        'title': "BP's",
        'link': 'businessPartners',
            'state':''

		
    }];
    
    $scope.isCollapsed = false;
}]);