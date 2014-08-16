'use strict';

//Setting up route
angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.
        state('articles',{
            url:'/articles',
            templateUrl: 'views/articles/list.html'
        })
            .
        state('articles.create',
            {url:'/create',
			controller:'ArticlesController',
            templateUrl: 'views/articles/create.html'
        }).
        state('articles.edit',
            {url:'/articles/:articleId/edit',
            templateUrl: 'views/articles/edit.html'
        }).
        state('article.view',
            {url:'/articles/:articleId',
            templateUrl: 'views/articles/view.html'
        }).
        state('customers',
            {
                url:'/customers',
                controller:'listCustomer',
                templateUrl:'views/customer/list.html'
            }
        ).
            state('customers.create',
            {url:'/new',
                views: {
                    "@" : {
                        templateUrl:'views/customer/edit.html',controller:"createCustomerCtrl"
                    }
                }
            }
        ).
		state('customers.edit',
            {url:'/:customerId',
                views: {
                    "@" : {
		                    templateUrl:'views/customer/edit.html',
                            controller:"editCustomerCtrl"
		                  }
                        }
            }
            ).
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
		})
            .state('Orders',
            {url:'/orders',
                templateUrl:'views/Order/list.html',
                controller:'orderListCtrl'
            })
            .state('createOrder',
            {url:'/orders/create',
                templateUrl:'views/Order/order.html',
                controller:'orderCtrl'
            })
            .state('editTrip',
            {
                url: '/editTrip',

                        templateUrl:'views/Trip/EditTrip.html',
                        controller: 'EditTripCtrl'


            })
        .state('listserviceorder',
               {
                   url:'/serviceOrders',
                   templateUrl:'',
                   controller:''
        
                })
        .state('createserviceorder',
               {
                   url:'/serviceOrders/create',
                   templateUrl:'views/Order/serviceOrder.html',
                   controller:''
        
                })
        .state('addVehicle',{
                url:'/vehicles/add',
                templateUrl:'views/vehicle/vehicle.html',
                controller:''
            })
            .state('vehicleMaintainceDetails',{
                url:'/vehicleMaintainceDetails',
                templateUrl:'views/vehicle/vehicleMaintainceDetails.html',
                controller:''
            })
            .state('TyreDetails',{
                url:'/TyreDetails',
                templateUrl:'views/Tyre/tyreDetails.html',
                controller:''
            })

            .state('test',
            {url:'/test',
             
			controller:'ArticlesController',
            templateUrl: 'views/articles/create.html'
            })
            .state('map',
            {url:'/map',
		templateUrl:'views/map/mapview.html',
			 controller:'MapCtrl'
			
		}).state('tenantscreate',
            {url:'/tenants/create',
			controller:'TenantCtrl',
            templateUrl: 'views/tenants/tenant.html'
        }).state('Payment',
            {url:'/Payment',
                templateUrl:'views/Payments/PaymentEntry.html',
                controller:'PaymentEntryCtrl'
            })
            .state('googleMap',
            {
                url:'googlemap',
            templateUrl:'views/maps/googleMap.html',
            controller:'googleMapCtrl'
            }
            )
		.state('otherwise',
            {url:'*path',
                templateUrl: 'views/index.html'
            });
    }
]);
//setting application wide date format for UI datetimepicker from $locale
//this sets dateformat to one which is defined in the locale.js included in foot.jade
angular.module('mean').config(function ($localeProvider,datepickerPopupConfig,datepickerConfig) {

    //changed date format to be dd-MM-yyyy whcih is much popular in india
    datepickerPopupConfig.datepickerPopup="dd-MM-yyyy";
   // datepickerPopupConfig.dateFormat="dd-MM-yyyy";//changed beacuse of changes in the api
        //$localeProvider.$get().DATETIME_FORMATS.shortDate;
    
    console.log($localeProvider.$get().DATETIME_FORMATS);
    //hide week by default
    datepickerConfig.showWeeks=false;

});

//config for setting ui-select theme to bootstrap
/*angular.module('mean').config(function(uiSelectConfig) {
  uiSelectConfig.theme = 'bootstrap';
});
*/
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