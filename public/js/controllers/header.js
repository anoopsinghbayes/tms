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
        //, {
        //'title': 'Edit Customer',
        //'link': 'customers/edit',
        //'state':'customers.edit'
		
    //}

//				  {
//        'title': 'Create BP',
//       // 'link': 'businessPartners/create',
//                      'state':'contacts'
//
//
//    },
		  {
        'title': "Order",
            iconClass:'fa fa-truck',
            'link': '',
            'state':'',
            isCollapsed:'true',
            links:[
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
//				   {
//        'title': "Map",
//        'link': 'map',
//            'state':'map'
//
//
//    },
//				   {
//        'title': "Map2",
//        'link': 'map2',
//            'state':'map2'
//
//
//    },
    {
        'title':"Customers",
        'link':'Customers',
        iconClass:'fa fa-users',
        'state':'customers'
    },
        {
            'title':"Vehicles",
            iconClass:"fa fa-automobile",
            'link':'Vehicles',
            'state':'addVehicle',
            isCollapsed:true,
            links:[
                {
                    'title': "Vehicle  Details",
                    'link': 'vehicleMaintainceDetails',
                    'state':'vehicleMaintainceDetails'


                }]

        },{
           'title':'Tyre',
            iconClass:'fa fa-life-ring',
            link:'TyreDetails',
            state:'TyreDetails'
        },{
            title:'Accounts',
            iconClass:'fa fa-table',
            link:'',
            state:''
        },{
            title:'Employee',
            iconClass:'fa fa-male',
            link:'',
            state:''
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