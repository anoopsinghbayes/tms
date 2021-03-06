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

            state('Employees',
            {
                url:'/employees',
                //controller:'listCustomer',
                templateUrl:'views/Employee/list.html'
            }
        ).
            state('Employees.create',
            {url:'/new',
                views: {
                    "@" : {
                        templateUrl:'views/BP/employee/edit.html'
                        //controller:"createCustomerCtrl"
                    }
                }
            }
        ).
            state('Employees.edit',
            {url:'/:customerId',
                views: {
                    "@" : {
                        templateUrl:'views/customer/edit.html'
                        //controller:"editCustomerCtrl"
                    }
                }
            }
        ).
            state('Vendors',
            {
                url:'/Vendors'
                //controller:'listCustomer',
                //templateUrl:'views/vendors/list.html'
            }
        ).
            state('Vendors.create',
            {url:'/new',
                views: {
                    "@" : {
                        templateUrl:'views/BP/vendor/edit.html'
                        //controller:"createCustomerCtrl"
                    }
                }
            }
        ).
            state('Vendors.edit',
            {url:'/:customerId',
                views: {
                    "@" : {
                        templateUrl:'views/BP/vendor/edit.html'
                        //controller:"editCustomerCtrl"
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
            .state('salesOrder',
            {url:'/salesOrders',
                templateUrl:'views/Order/list.html',
                controller:'orderListCtrl'
            })
            .state('salesOrder.create',{
                url:'/create',
                views: {
                    "@" : {
                        templateUrl: 'views/Order/order.html',
                        controller:"orderCtrl"
                    }
                }




            })
            .state('salesOrder.edit',{
                url:'/:orderId',
                views: {
                    "@" : {
                        templateUrl: 'views/Order/order.html',
                        controller:"orderCtrl"
                    }
                }




            })
            .state('serviceOrder',{
                url:'/serviceOrder',
                templateUrl:'/views/Order/listServiceOrder.html',
                controller:''

            })
            .state('serviceOrder.create',{
                url:'/create',
                views: {
                    "@" : {
                        templateUrl: 'views/Order/serviceOrder.html',
                        controller:""
                    }
                }




            })
            .state('serviceOrder.edit',{
                url:'/:orderId',
                views: {
                    "@" : {
                        templateUrl: '',
                        controller:''
                    }
                }




            })
            .state('editTrip',{
                url: '/editTrip',

                templateUrl:'views/Trip/EditTrip.html',
                controller: 'EditTripCtrl'


            })
            .state('employees',{
                url:'/employees',
                templateUrl:'/views/Employee/list.html',
                controller:''

            })
//            .state('employees.create',{
//                url:'/create',
//                views: {
//                    "@" : {
//                        templateUrl: 'views/Employee/edit.html',
//                        controller:""
//                    }
//                }
//                })
            .state('vehicles',{
                url:'/vehicles',
                templateUrl:'/views/Item/vehicle/list.html',
                controller:'listVehicle'

            })
            .state('vehicles.create',{
                url:'/create',
                views: {
                    "@": {templateUrl: 'views/Item/vehicle/edit.html',
                        controller: 'createVehicleCtrl'
                    }
                }
            })
            .state('vehicles.edit', {url:'/:vehicleId',
                views: {
                    "@" : {
                        templateUrl:'views/Item/vehicle/edit.html',
                        controller:"editVehicleCtrl"
                    }
                }
            })
            .state('vehicles.finance',{
                url:'/finance',
                views: {
                    "@": {templateUrl: 'views/Item/vehicle/finance.html',
                        controller: ''
                    }
                }
            })
            .state('vehicleMaintainceDetails',{
                url:'/vehicleMaintainceDetails',
                templateUrl:'views/Item/vehicle/vehicleMaintainceDetails.html',
                controller:''
            })
            .state('TyreDetails',{
                url:'/TyreDetails',
                templateUrl:'views/Tyre/tyreDetails.html',
                controller:''
            })
            .state('invoiceExample',{
                url:'/invoiceExample',
                templateUrl:'views/Invoice/invoiceExample.html',
                controller:'InvoiceExampleCtrl'
            })
            .state('InvoiceDetails',{
                url:'/InvoiceDetails',
                templateUrl:'views/Invoice/invoiceDetails.html',
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
            }).state('PaymentInvoice',
            {url:'/PaymentInvoice',
                templateUrl:'views/Payments/PaymentInvoice.html',
                controller:'PaymentInvoiceCtrl'
            }).state('googleMap',
            {
                url:'googlemap',
                templateUrl:'views/maps/googleMap.html',
                controller:'googleMapCtrl'
            }
        )
            .state('triporder',
            {url:'/tripOrders',
                templateUrl: 'views/Order/list.html',
                controller:'listTripOrder'
            })
            .state('triporder.create',{
                url:'/create',
                views: {
                    "@": {templateUrl: 'views/Order/tripOrder.html',
                        controller: 'tripOrderCtrl'
                    }
                }
            })
            .state('triporder.edit',
            {url:'/:orderId',
                views: {
                    "@" : {
                        templateUrl:'views/Order/tripOrder.html',
                        controller:"editTripOrderCtrl"
                    }
                }
            }
        )

            .state('purchaseOrder',
            {url:'/purchaseOrder/create',
                templateUrl: 'views/Order/purchaseOrder.html',
                controller:'purchaseOrderCtrl'

            })
            .state("purchaseOrder.addItem", {
                url: "/as",
                onEnter: ['$stateParams', '$state', '$modal','Customers','uiGridConstants','$http', function($stateParams, $state, $modal,Customers,uiGridConstants,$http) {
                    $modal.open({
                        templateUrl: "views/customer/list.html",
                        size: 'lg',
                        //  backdrop:'static',
                        resolve: {
                            //item: function() { new Item(123).get(); }
                        },
                        controller: 'listCustomer'
                    })
                        .result.finally(function() {
                            $state.go('^');
                        });
                }]
            })
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
angular.module('mean').config(function(RestangularProvider){

    RestangularProvider.setRestangularFields({
            id: "_id"
        }
    );
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