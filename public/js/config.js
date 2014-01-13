'use strict';

//Setting up route
angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.
        state('articles',{
            url:'/articles',
            templateUrl: 'views/articles/list.html'
        }).
        state('article.create',
            {url:'/articles/create',
			controller:'ArticlesController',
            templateUrl: 'views/articles/create.html'
        }).
        state('article.edit',
            {url:'/articles/:articleId/edit',
            templateUrl: 'views/articles/edit.html'
        }).
        state('article.view',
            {url:'/articles/:articleId',
            templateUrl: 'views/articles/view.html'
        }).
        state('otherwise',
            {url:'/',
            templateUrl: 'views/index.html'
        }).
		state('edit',
            {url:'/customer/edit',
		templateUrl:'views/customer/edit.html'
		}).
		state('bp.create',
            {url:'/businessPartners/create',
		templateUrl:'views/BP/create.html',
			controller:'BPController'
		}).
		state('bp.all',
            {url:'/businessPartners',
		templateUrl:'views/BP/list.html',
			controller:'BPController'
		});
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);