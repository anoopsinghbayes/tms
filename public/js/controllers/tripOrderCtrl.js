/**
 * Created by Administrator on 07/12/2014.
 */

angular.module('mean').controller('tripOrderCtrl', ['$scope','$window','$timeout','$http','TripOrder','$state' ,function ($scope,$window,$timeout,$http,TripOrder,$state) {


    $scope.showmap=false;


    $scope.order={
        tripDetails:[],
        finance:[]
    };

    $scope.viewIsSubContracted=function(){
        //$scope.order.isSubContracted=isSubContracted;
            if(!$scope.order.isSubContracted){
                $scope.order.subcontractor=null;
            }
    };
    $scope.getCustomer =function(val){
        return $http.get('/customers/', {
            params: {
                name: val
            }
        }).then(function(res){
            console.log(res.data);
            return res.data;
        });
    };
    $scope.saveTripOrder=function(){
        $scope.order.bpId=$scope.order.customer._id;
      console.log($scope.order);
        TripOrder.save($scope.order).then(function(order){
            console.log(order);
            $state.go('triporder');
        })

    };
    $scope.AddExpenseLine=function(){
        $scope.order.finance.push({});
    };
    $scope.selectedTrip={
        challanNo:123
    };
$scope.editTripLine=function(trip){
    $scope.selectedTrip=trip;
};
$scope.addTrip=function(){
    $scope.order.tripDetails.push({});
}
    $scope.initializeMapControls=function(){

        $scope.showmap=true;
        setTimeout(function() {
            console.log('initializeMapControls');

            $scope.data.mapOptions = {
                center: new google.maps.LatLng(21.1500, 79.0900),
                zoom: 4,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            google.maps.event.trigger($scope.data.myMap, 'resize');
        },10);
    }
    $scope.data={};
//    $scope.data.fromLocation='';
//    $scope.data.toLocation='';
//    $scope.data.distance=0;
    $scope.data.mapOptions = {
        center: new google.maps.LatLng(21.1500, 79.0900),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var directionsDisplay;

    $timeout(function(){
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap($scope.data.myMap);
    },0);

    $scope.findPath=function () {

        $scope.directionsService = new google.maps.DirectionsService();

        var tripWayPoints=[];
        //colect waypoints
        for(var i=1;i<=$scope.order.tripDetails.length-2;i++){
            tripWayPoints.push({
                location: $scope.order.tripDetails[i].address,
                stopover:true}
               );
        }
        var request = {
            origin: $scope.order.tripDetails[0].address,
            destination: $scope.order.tripDetails[$scope.order.tripDetails.length-1].address,
            waypoints:tripWayPoints,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        $scope.directionsService.route(request, function(response, status) {

            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                $scope.data.distance= response.routes[0].legs[0].distance.value / 1000;

            }


        });



    }

}


]);
angular.module('mean').controller('editTripOrderCtrl', ['$scope','$window','$timeout','$http','TripOrder','$stateParams','toaster','$state',function ($scope,$window,$timeout,$http,TripOrder,$stateParams,toaster,$state) {


    $scope.showmap=false;


    TripOrder.getOrder($stateParams.orderId).then(function(order){
        console.log('trip order eidt',order);
        $scope.order=order;
    });

    $scope.viewIsSubContracted=function(){
        //$scope.order.isSubContracted=isSubContracted;
        if(!$scope.order.isSubContracted){
            $scope.order.subcontractor=null;
        }
    };
    $scope.getCustomer =function(val){
        return $http.get('/customers/', {
            params: {
                name: val
            }
        }).then(function(res){
            console.log(res.data);
            return res.data;
        });
    };
    $scope.saveTripOrder=function(){
        $scope.order.bpId=$scope.order._id;

        $scope.order.put()
            .then(function(data){
            toaster.pop('success','Trip Order Updated',data._id);
                $state.go('triporder');
        });



    };
    $scope.AddExpenseLine=function(){
        $scope.order.finance.push({});
    };
    $scope.selectedTrip={
        challanNo:123
    };
    $scope.editTripLine=function(trip){
        $scope.selectedTrip=trip;
    };
    $scope.addTrip=function(){
        $scope.order.tripDetails.push({});
    }
    $scope.initializeMapControls=function(){

        $scope.showmap=true;
        setTimeout(function() {
            console.log('initializeMapControls');

            $scope.data.mapOptions = {
                center: new google.maps.LatLng(21.1500, 79.0900),
                zoom: 4,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            google.maps.event.trigger($scope.data.myMap, 'resize');
        },10);
    }
    $scope.data={};
//    $scope.data.fromLocation='';
//    $scope.data.toLocation='';
//    $scope.data.distance=0;
    $scope.data.mapOptions = {
        center: new google.maps.LatLng(21.1500, 79.0900),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var directionsDisplay;

    $timeout(function(){
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap($scope.data.myMap);
    },0);

    $scope.findPath=function () {

        $scope.directionsService = new google.maps.DirectionsService();

        var tripWayPoints=[];
        //colect waypoints
        for(var i=1;i<=$scope.order.tripDetails.length-2;i++){
            tripWayPoints.push({
                    location: $scope.order.tripDetails[i].address,
                    stopover:true}
            );
        }
        var request = {
            origin: $scope.order.tripDetails[0].address,
            destination: $scope.order.tripDetails[$scope.order.tripDetails.length-1].address,
            waypoints:tripWayPoints,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        $scope.directionsService.route(request, function(response, status) {

            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                $scope.data.distance= response.routes[0].legs[0].distance.value / 1000;
                var lastOrderDetailLine=$scope.order.tripDetails.length-1;
                $scope.order.tripDetails[lastOrderDetailLine].distance.calculated=$scope.data.distance;
            }


        });



    }

}


]);
angular.module('mean').controller('listTripOrder',['$scope','TripOrder','uiGridConstants',function($scope,TripOrder,uiGridConstants ){
    $scope.gridOptions = {
        paginationPageSizes: [10,25, 50, 75],
        paginationPageSize: 10,

        enableFiltering: true,
        showGridFooter :false,
        showColumnFooter :false,
        columnDefs: [
            {
                name: 'Order No.', width: '12%',field:'_id',
                // "cellTemplate": "<div class=\"ui-grid-cell-contents\"><a href=\"{{COL_FIELD}}\" class=\"\">{{COL_FIELD}} <\/a><\/div>"
                "cellTemplate":"<div><a ui-sref=\"triporder.edit({ orderId: COL_FIELD })\" class=\"ui-grid-cell-contents\">{{COL_FIELD}}<\/a><\/div>"
                ,width:'15%'

            },
            { name: 'Order Date', width: '16%',field:'StartDate',type: 'date',
                cellFilter: 'date:\'MM/dd/yyyy\'',
                filterCellFiltered:true
               // filterHeaderTemplate: '<div class="ui-grid-filter-container" ng-repeat="colFilter in col.filters"><input type="date" class="ui-grid-filter-input" ng-model="colFilter.term"/></div>'

            },
            { name:'DO.No.',width:'12%',field:'doNo'},
            { name: 'Customer', width: '17%',field:'bpId'},
            {name:'Product',width:'12%',field:'productId'},
            {name:'Quantity',width:'6%',field:'quantity'},
            {name:'Vehicle No.',width:'12%',field:'vehicleNo'},
            { name: 'Status',width:'10%',field:'orderStatus'
//                ,filter: {
//
//                type: uiGridConstants.filter.SELECT,
//                selectOptions: [
//                    { value: 'open', label: 'Open' },
//                    { value: 'confirmed', label: 'Confirmed' },
//                    { value: 'closed', label: 'Closed'},
//                    { value: 'cancelled', label: 'Cancelled' }
//                    ]
//
//            }

            }




        ],
        enableGridMenu: true,
        enableSelectAll: true,
        exporterCsvFilename: 'myFile.csv',
        exporterPdfDefaultStyle: {fontSize: 9},
        exporterPdfTableStyle: {margin: [10, 10, 10, 10]},
        exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
        exporterPdfHeader: { text: "Open Orders", style: 'headerStyle' },
        exporterPdfFooter: function ( currentPage, pageCount ) {
            return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
        },
        exporterPdfCustomFormatter: function ( docDefinition ) {
            docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
            docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
            return docDefinition;
        },
        exporterPdfOrientation: 'landscape',
        exporterPdfPageSize: 'LETTER',
        //exporterPdfMaxGridWidth: 500,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
        onRegisterApi: function(gridApi){
            $scope.gridApi = gridApi;
        }

    };
    TripOrder.getOrders().then(function(orders) {
        console.log(orders);
        //$scope.customers=customers;
        $scope.gridOptions.data = orders;
    });
}]);