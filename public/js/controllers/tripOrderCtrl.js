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
                console.log(response.routes);
                for(var i=0;i<$scope.order.tripDetails.length-1;i++)
                {
                    //dont fill first trip distance
                    console.log(i+1,$scope.order.tripDetails[i+1]);
                    $scope.order.tripDetails[i+1].distance={
                        calculated:response.routes[0].legs[i].distance.value / 1000


                    }
                }
                //$scope.data.distance= response.routes[0].legs[0].distance.value / 1000;

            }



        });



    }

}


]);
angular.module('mean').controller('editTripOrderCtrl', ['$scope','$window','$timeout','$http','TripOrder','$stateParams','toaster','$state',function ($scope,$window,$timeout,$http,TripOrder,$stateParams,toaster,$state) {

//to active tabs  programatically on validation errors
    $scope.tabs={
        tripOrderHeader:true,
        tripOrderLines:false
    }
    $scope.showmap=false;

    $scope.gridOptions={
        rowTemplate: '<ng-form name="TripLines"><div' +
            '  ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.uid"'+
            '  ui-grid-one-bind-id-grid="rowRenderIndex + \'-\' + col.uid + \'-cell\'"'+
            '  class="ui-grid-cell"'+
            '  ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"'+
            '  role="{{col.isRowHeader ? \'rowheader\' : \'gridcell\'}}"'+
            '  ui-grid-cell>'+
            '</div></ng-form>',
        enableSorting: false,
        rowHeight:42,
        columnDefs: [
            {
                name: 'Pick/Drop',
                width:80,
                cellTemplate:'<div class="ui-grid-cell-contents"><select  ng-model="row.entity.locationType"><option value="UP">UP</option><option value="P">P</option><option value="D">D</option><option value="UD">UD</option> </select></div>'
            },

            { name:'Address',
                width:550,
                "cellTemplate":'<div class="ui-grid-cell-contents"><input name="address" required="" places="" type="text" ng-model="row.entity.address"/><div ng-messages="TripLines.address.$error" class="error-messages1 pull-right clearfix"  role="alert"><div  ng-message="required">Address is required.</div></div></div>'

            },
            {
              name:'Challan No.',
                width:100,
                cellTemplate:'<div class="ui-grid-cell-contents"><input type="text" required="" name="challNo" ng-model="row.entity.challanNo" class=""><div ng-messages="TripLines.challNo.$error" class="error-messages1 pull-right clearfix"  role="alert"><div  ng-message="required">Required.</div></div></div>'
            },
            {
                name:'Tyre',
                width:80,
                cellTemplate:'<div class="ui-grid-cell-contents"><input type="number" ng-model="row.entity.cargoWeight.tyreWeight" class=""></div>'
            },
            {
                name:'Net',
                width:80,
                cellTemplate:'<div class="ui-grid-cell-contents"><input type="number" ng-model="row.entity.cargoWeight.netWeight" class=""></div>'
            },
            {
                name:'Gross',
                width:80,
                cellTemplate:'<div class="ui-grid-cell-contents"><input type="number" ng-model="row.entity.cargoWeight.grossWeight" class=""></div>'
            },
            {
                name:'Shortage',
                width:80,
                cellTemplate:'<div class="ui-grid-cell-contents"><input type="number" ng-model="row.entity.cargoWeight.shortage" class=""></div>'
            },
            {
                name:'Kms',
                width:80,
                cellTemplate:'<div class="ui-grid-cell-contents"><input type="number" ng-model="row.entity.distance.calculated" class=""></div>'
            },
            {
                name:'Actual',
                width:80,
                cellTemplate:'<div class="ui-grid-cell-contents"><input type="number" ng-model="row.entity.distance.actual" class=""></div>'
            },
            {
                name:'Reporting',
                width:190,
                cellTemplate:'<div class="ui-grid-cell-contents"><input type="datetime-local" ng-model="row.entity.date.reporting" /></div>'
            },
            {
                name:'Loading/Unloadiing',
                width:190,
                //field:'date.reporting',
                cellTemplate:'<div class="ui-grid-cell-contents"><input type="datetime-local" ng-model="row.entity.date.loadingUnloading" /></div>'
            }

        ]
    }
    TripOrder.getOrder($stateParams.orderId).then(function(order){
        console.log('trip order eidt',order);
        $scope.order=order;

        $scope.gridOptions.data=order.tripDetails;
        //code for new UI-grid for testing


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
    //copy
    $scope.saveTripOrder=function(form) {
        console.log(form);
        //focus the right tab on validation error
        if(form.fmrTripOrderHeader.$invalid){
            $scope.tabs.tripOrderHeader=true;
            $scope.tabs.tripOrderLines=false;
        }
        else if(form.fmrTripOrderLines.$invalid){
            $scope.tabs.tripOrderHeader=false;
            $scope.tabs.tripOrderLines=true;
        }
        if (form.$valid) {
            $scope.order.bpId = $scope.order.bpId._id;
            // console.log($scope.order);
            $scope.order.put()
                .then(function (data) {
                    toaster.pop('success', 'Trip Order Updated', data._id);
                    $state.go('triporder');
                });


        }
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
                console.log(response.routes);
                for(var i=0;i<$scope.order.tripDetails.length-1;i++)
                {
                    //dont fill first trip distance
                    console.log(i+1,$scope.order.tripDetails[i+1]);
                    $scope.order.tripDetails[i+1].distance={
                        calculated:response.routes[0].legs[i].distance.value / 1000


                    }
                }
                //$scope.data.distance= response.routes[0].legs[0].distance.value / 1000;

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