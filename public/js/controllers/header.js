'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global','SlideMenu', function ($scope, Global,SlideMenu) {
    $scope.global = Global;
    $scope.open=false;
    $scope.openMenu=function(){
        SlideMenu.toggleClass();
        $scope.open=!$scope.open;
        //console.log(SlideMenu);
    }
    $scope.menu = [
        {
            title:'Master',
            iconClass:'fa fa-database',
            link:'',
            state:'',
            isCollapsed:'true',
            links:[
                {
                    title: 'Vehicle',
                    state: ''
                },
                {
                    title: 'Vehicle Parts',
                    state: ''
                },
                {
                    title: 'Vehicle Docs',
                    state: ''
                },
                {
                    title: 'Products',
                    state: ''
                },
                {
                    title: 'Miscellaneous',
                    state: ''
                },
            ]
        },
        {
            title: "Order",
            iconClass:'fa fa-tasks',
            link: '',
            state:'',
            isCollapsed:'true',
            links:[
                {
                    title: 'Trip Order',
                    state: ''
                },
                {
                    title: 'Rental Order',
                    state: 'salesOrder'
                },
                {
                    title: 'Sales Order',
                    state: 'salesOrder'
                },
                {
                    title:'Purchase Order',
                    state:''
                },
                {
                    title:'Service Order',
                    state:'serviceOrder'
                }
            ]



        },
        {
            title:"Business Partner",
            link:'Customers',
            iconClass:'fa fa-users',
            isCollapsed:'true',
            state:'',
            links:[
                {
                    title:'Customer',
                    state:'customers'
                },
                {
                    title:'Vendor',
                    state:''
                },
                {
                    title:'Employee',
                    state:'Employees.create'
                }
            ]
        },
        {
            title:"Vehicles",
            iconClass:"fa fa-truck",
            link:'Vehicles',
            state:'',
            isCollapsed:true,
            links:[
                {
                    title:'List',
                    state:'vehicles'
                },
                {
                    title: "Maintenance",
                    link: 'vehicleMaintainceDetails',
                    state:'vehicleMaintainceDetails'


                },{
                    title:'Finance',
                    state:'vehicles.finance'
                }]

        },{
            'title':'Invoice',
            iconClass:'fa fa-file-text',
            isCollapsed:true,
            link:'InvoiceDetails',
            state:'InvoiceDetails',
            links:[
                {
                    title:'Trip Invoice',
                    state:''
                },
                {
                    title:'Rental Invoice',
                    state:''
                },
                {
                    title:'Sales Invoice',
                    state:''
                },
                {
                    title:'Purchase Invoice',
                    state:''
                },
                {
                    title:'Service Invoice',
                    state:''
                }
            ]
        },{
            title:'Accounts',
            iconClass:'fa fa-table',
            link:'Payment',
            state:'',
            isCollapsed:true,
            links:[
                {
                    title:'Payment Entry',
                    state:'Payment'
                },
                {
                    title: 'Invoice',
                    link: 'InvoiceDetails',
                    state:'InvoiceDetails'


                },{
                    title:'Payment Tag',
                    link: 'PaymentInvoiceLink',
                    state:'PaymentInvoiceLink'
                }]

        },
        {
            title:'Reports',
            iconClass:'fa fa-bar-chart-o',
            link:'',
            state:''
        },{
            title:'GPS Tracking',
            iconClass:'fa fa-map-marker',
            link:'',
            state:''
        }
    ];

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