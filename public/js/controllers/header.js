'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global','SlideMenu', function ($scope, Global,SlideMenu) {
    $scope.global = Global;
     $scope.open=false;
  $scope.openMenu=function(){
    SlideMenu.toggleClass();
    $scope.open=!$scope.open;
    //console.log(SlideMenu);
  }
    $scope.menu = [{
        'title': 'Articles',
        'link': 'articles',
        
        iconClass:'fa fa-life-ring',
        isCollapsed:true,
        links:[
        {
        'title': "Create Article",
            isCollapsed:true,
        'link': '#',
            'state':'',
            links:[
        {
        'title': "Sub Article 1",
        'link': '#',
        isCollapsed:true,
                
            'state':'map',
               links:[
        {
        'title': "Sub Article 3",
        'link': 'map',
            'state':'map'


    }, {
        'title': "Sub Article 4",
        'link': 'map',
            'state':'map'


    }
       ]


    }, {
        'title': "Sub Article 2",
        'link': 'map',
            'state':'map'


    }
       ]


    }, {
        'title': "Update Article",
        'link': 'map',
            'state':'map'


    }
       ]

    }, {
        'title': 'Create New Article',
        'link': 'articles/create',
        'state':'edit'
		
    }
        //, {
        //'title': 'Edit Customer',
        //'link': 'customers/edit',
        //'state':'customers.edit'
		
    //}
    ,
				  {
        'title': 'Create BP',
       // 'link': 'businessPartners/create',
                      'state':'contacts'

		
    },			  {
        'title': "Order",
        'link': '',
            'state':'Orders'

		
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

		
    },
    {
        'title':"Customers",
        'link':'Customers',
        'state':'customers'
    },
        {
            'title':"Vehicles",
            iconClass:"fa fa-automobile",
            'link':'Vehicles',
            'state':'addVehicle'

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