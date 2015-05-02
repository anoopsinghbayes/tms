/**
 * Created by Anoop on 4/26/2015.
 */


angular.module('mean').controller('listVehicle',['Vehicle','$scope',function(Vehicle,$scope){
    $scope.gridOptions = {
        paginationPageSizes: [10,25, 50, 75],
        paginationPageSize: 10,

        enableFiltering: true,
        showGridFooter :false,
        showColumnFooter :false,
        columnDefs: [
            {
                name: 'Vehicle No..', width: '15%',field:'vehicleNo',
                // "cellTemplate": "<div class=\"ui-grid-cell-contents\"><a href=\"{{COL_FIELD}}\" class=\"\">{{COL_FIELD}} <\/a><\/div>"
                "cellTemplate":"<div><a ui-sref=\"vehicles.edit({ vehicleId: row.entity._id })\" class=\"ui-grid-cell-contents\">{{COL_FIELD}}<\/a><\/div>"
                ,width:'15%'
            },
            { name: 'Type', width: '15%',field:'type' },
            { name: 'Model', width: '20%',field:'model'},
            { name: 'Capacity', width: '20%',field:'capacity' },



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
    Vehicle.getVehicles().then(function(vehicles) {

        //$scope.customers=customers;
        $scope.gridOptions.data = vehicles;
    });


}]);
angular.module('mean').controller('createVehicleCtrl',
    ['$scope','Vehicle','$state','toaster', function ($scope,Vehicle,$state,toaster) {
        $scope.vehicle={
            itemCategory:'Vehicle',
            itemTitle:'Vehicle'
        };
        $scope.save=function(){
            console.log($scope.vehicle);
            Vehicle.saveVehicle($scope.vehicle).then(
                function(response) {
                    console.log(response);
                    toaster.pop('success', "Vehicle Created", response._id);
                    //$state.go('customers.edit'  ,{'customerId': response._id});
                },function(data){
                    console.log(data);
                });
        };

    }]);

angular.module('mean').controller('editVehicleCtrl',
    ['$scope','Vehicle','$state','toaster','$stateParams', function ($scope,Vehicle,$state,toaster,$stateParams){
console.log('state params customer id:',$stateParams.vehicleId);
        Vehicle.getVehicle($stateParams.vehicleId).then(function(data){
    console.log(data);
    $scope.vehicle=data;
    $scope.vehicle.mfgDate=new Date(data.mfgDate);
    $scope.save=function(){
        console.log($scope.vehicle);
        $scope.vehicle.put();
        toaster.pop('success','Vehicle Updated',data._id);
    }
});
    }]);