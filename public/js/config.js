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
		state('edit.address',
            {url:'/address',
		templateUrl:'views/customer/address.html'
		}).
		state('contacts',
            {url:'/contacts',
		templateUrl:'views/customer/contacts.html'
		}).
		state('edit.contacts',
            {url:'/contacts',
		templateUrl:'views/customer/contacts.html'
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
		}).state('order',
            {url:'/order',
                templateUrl:'views/Order/order.html',
                controller:'orderCtrl'
            })
            .state('map',
            {url:'/map',
		templateUrl:'views/map/mapview.html',
			 controller:'MapCtrl'
			
		});
    }
]);
//setting application wide date format for UI datetimepicker from $locale
//this sets dateformat to one which is defined in the locale.js included in foot.jade
angular.module('mean').config(function ($localeProvider,datepickerPopupConfig) {

    datepickerPopupConfig.dateFormat=$localeProvider.$get().DATETIME_FORMATS.longDate;


});

//config for setting ui-select theme to bootstrap
angular.module('mean').config(function(uiSelectConfig) {
  uiSelectConfig.theme = 'bootstrap';
});
angular.module('mean').run(function ($locale,datepickerPopupConfig) {
    //datepickerPopupConfig.dateFormat=$locale.DATETIME_FORMATS.longDate
   // console.log($locale);


    //datepickerConfig.showWeeks = false;
});
//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);