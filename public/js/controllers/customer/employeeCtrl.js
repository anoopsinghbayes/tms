/**
 * Created by swapnil on 02-May-15.
 */
/**
 * Created by anoop on 19/4/14.
 */
angular.module('mean').controller('listEmployee', ['$scope','Employees','uiGridConstants','$http', function ($scope,Employees,uiGridConstants,$http ) {

    //$scope.customers=
    $scope.dismiss = function() {
        $scope.$dismiss();
    };

    $scope.save = function() {

        $scope.$close(true);

    };
    $scope.gridOptions = {
        paginationPageSizes: [10,25, 50, 75],
        paginationPageSize: 10,
        enableFiltering: true,
        showGridFooter :false,
        showColumnFooter :false,
        columnDefs: [
            {
                name: 'Employee No.', width: '15%',field:'_id',
                // "cellTemplate": "<div class=\"ui-grid-cell-contents\"><a href=\"{{COL_FIELD}}\" class=\"\">{{COL_FIELD}} <\/a><\/div>"
                "cellTemplate":"<div><a ui-sref=\"employees.edit({ employeeId: COL_FIELD })\" class=\"ui-grid-cell-contents\">{{COL_FIELD}}<\/a><\/div>"
                ,width:'15%'
            },
            { name: 'First Name', width: '15%',field:'fName' },
            { name: 'Last Name', width: '15%',field:'lName'},
            { name: 'Designation', width: '15%',field:'jobTitle' },
            { name: 'Phone No.', width: '15%',field:'address[0].phM1' },
            { name: 'Address', width:'20%', field: 'address[0].adL1' }
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
    Employees.getEmployees().then(function(employees){

        $scope.gridOptions.data =employees;
    });
}])

//angular.module('mean').controller('createCustomerCtrl', ['$scope','Customers','$state','toaster', function ($scope,Customers,$state,toaster) {
//    $scope.customer = {
//        address:[{}]
//    };
//    $scope.save = function() {
//        console.log($scope.customer );
//
//
//        Customers.saveCustomer($scope.customer).then(
//            function(response) {
//                console.log(response);
//                toaster.pop('success', "Customer Created", response._id);
//                $state.go('customers.edit'  ,{'customerId': response._id});
//            },function(data){
//                console.log(data);
//            });
//    }
//}]);
//angular.module('mean').controller('editCustomerCtrl', ['$scope','Customers','$stateParams','toaster', function ($scope,Customers,$stateParams,toaster) {
//    console.log('state params customer id:',$stateParams.customerId);
//    Customers.getCustomer($stateParams.customerId).then(function(data){
//        console.log(data);
//        $scope.customer=data;
//        $scope.save=function(){
//            console.log($scope.customer);
//            $scope.customer.put();
//            toaster.pop('success','Customer Updated',data._id);
//        }
//    });
//}]);