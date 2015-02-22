/**
 * Created by anoop on 19/4/14.
 */
angular.module('mean').controller('listCustomer', ['$scope','Customers','uiGridConstants','$http', function ($scope,Customers,uiGridConstants,$http ) {

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
        showGridFooter :true,
        showColumnFooter :true,
        columnDefs: [
            {
                name: 'First Name', width: '15%',field:'fName',
               // "cellTemplate": "<div class=\"ui-grid-cell-contents\"><a href=\"{{COL_FIELD}}\" class=\"\">{{COL_FIELD}} <\/a><\/div>"
               "cellTemplate":"<div><a ui-sref=\"customers.edit({ customerId: COL_FIELD })\" class=\"ui-grid-cell-contents\">{{COL_FIELD}}<\/a><\/div>"
            },
            { name: 'Middle Name', width: '15%',field:'mName' },
            { name: 'Last Name', width: '15%',field:'lName' },
            { name: 'Company', width: '10%',field:'companyName' },
//            { name: 'Sales Representative', width: '10%',field:'salesrep.name' },
//            { name: 'Email', width: '20%',field:'email' },
//            { name: 'Phone', width: '15%' ,field:'contact'},
//
//            {
//                name: 'Credit Details',
//                sort: {
//                    direction: uiGridConstants.ASC,
//                    priority: 1
//                }
//            },
//            { name: 'city', field: 'address.city' },
//            { name: 'state', field: 'address.state' },
//            {name:'Credit Details', field:'credit.limit'}

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
      Customers.getCustomers().then(function(customers){

            //$scope.customers=customers;
          $scope.gridOptions.data = [
              {
                  "_id": "54c4c9047e8759101c3f3038",
                  "fName": "Prashnat",
                  "mName": "Abhiram",
                  "lName": "Jha",
                  "user": "{ _id: 53b98e66b6354c1c1b146b4f,\n  provider: 'local',\n  name: 'ram',\n  email: 'ram@ram.com',\n  tenant: 'abc',\n  username: 'ram',\n  __v: 0 }",
                  "companyName": "vikrant Roadways",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2015-01-25T10:44:20.937Z"
              },
              {
                  "_id": "548c5d078cdb93cc1dcf8f8f",
                  "fName": "swapnil",
                  "mName": "Ipsum aliquip est fugiat veniam magna tempor ad magna voluptate.",
                  "lName": "jadhav",
                  "user": "53b98e66b6354c1c1b146b4f",
                  "companyName": "Commodo Lorem ullamco magna anim occaecat ipsum sunt.",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2014-12-13T15:36:39.775Z"
              },
              {
                  "_id": "54c4c9047e8759101c3f3038",
                  "fName": "Prashnat",
                  "mName": "Abhiram",
                  "lName": "Jha",
                  "user": "{ _id: 53b98e66b6354c1c1b146b4f,\n  provider: 'local',\n  name: 'ram',\n  email: 'ram@ram.com',\n  tenant: 'abc',\n  username: 'ram',\n  __v: 0 }",
                  "companyName": "vikrant Roadways",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2015-01-25T10:44:20.937Z"
              },
              {
                  "_id": "548c5d078cdb93cc1dcf8f8f",
                  "fName": "swapnil",
                  "mName": "Ipsum aliquip est fugiat veniam magna tempor ad magna voluptate.",
                  "lName": "jadhav",
                  "user": "53b98e66b6354c1c1b146b4f",
                  "companyName": "Commodo Lorem ullamco magna anim occaecat ipsum sunt.",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2014-12-13T15:36:39.775Z"
              },  {
                  "_id": "54c4c9047e8759101c3f3038",
                  "fName": "Prashnat",
                  "mName": "Abhiram",
                  "lName": "Jha",
                  "user": "{ _id: 53b98e66b6354c1c1b146b4f,\n  provider: 'local',\n  name: 'ram',\n  email: 'ram@ram.com',\n  tenant: 'abc',\n  username: 'ram',\n  __v: 0 }",
                  "companyName": "vikrant Roadways",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2015-01-25T10:44:20.937Z"
              },
              {
                  "_id": "548c5d078cdb93cc1dcf8f8f",
                  "fName": "swapnil",
                  "mName": "Ipsum aliquip est fugiat veniam magna tempor ad magna voluptate.",
                  "lName": "jadhav",
                  "user": "53b98e66b6354c1c1b146b4f",
                  "companyName": "Commodo Lorem ullamco magna anim occaecat ipsum sunt.",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2014-12-13T15:36:39.775Z"
              },  {
                  "_id": "54c4c9047e8759101c3f3038",
                  "fName": "Prashnat",
                  "mName": "Abhiram",
                  "lName": "Jha",
                  "user": "{ _id: 53b98e66b6354c1c1b146b4f,\n  provider: 'local',\n  name: 'ram',\n  email: 'ram@ram.com',\n  tenant: 'abc',\n  username: 'ram',\n  __v: 0 }",
                  "companyName": "vikrant Roadways",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2015-01-25T10:44:20.937Z"
              },
              {
                  "_id": "548c5d078cdb93cc1dcf8f8f",
                  "fName": "swapnil",
                  "mName": "Ipsum aliquip est fugiat veniam magna tempor ad magna voluptate.",
                  "lName": "jadhav",
                  "user": "53b98e66b6354c1c1b146b4f",
                  "companyName": "Commodo Lorem ullamco magna anim occaecat ipsum sunt.",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2014-12-13T15:36:39.775Z"
              },  {
                  "_id": "54c4c9047e8759101c3f3038",
                  "fName": "Prashnat",
                  "mName": "Abhiram",
                  "lName": "Jha",
                  "user": "{ _id: 53b98e66b6354c1c1b146b4f,\n  provider: 'local',\n  name: 'ram',\n  email: 'ram@ram.com',\n  tenant: 'abc',\n  username: 'ram',\n  __v: 0 }",
                  "companyName": "vikrant Roadways",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2015-01-25T10:44:20.937Z"
              },
              {
                  "_id": "548c5d078cdb93cc1dcf8f8f",
                  "fName": "swapnil",
                  "mName": "Ipsum aliquip est fugiat veniam magna tempor ad magna voluptate.",
                  "lName": "jadhav",
                  "user": "53b98e66b6354c1c1b146b4f",
                  "companyName": "Commodo Lorem ullamco magna anim occaecat ipsum sunt.",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2014-12-13T15:36:39.775Z"
              },  {
                  "_id": "54c4c9047e8759101c3f3038",
                  "fName": "Prashnat",
                  "mName": "Abhiram",
                  "lName": "Jha",
                  "user": "{ _id: 53b98e66b6354c1c1b146b4f,\n  provider: 'local',\n  name: 'ram',\n  email: 'ram@ram.com',\n  tenant: 'abc',\n  username: 'ram',\n  __v: 0 }",
                  "companyName": "vikrant Roadways",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2015-01-25T10:44:20.937Z"
              },
              {
                  "_id": "548c5d078cdb93cc1dcf8f8f",
                  "fName": "swapnil",
                  "mName": "Ipsum aliquip est fugiat veniam magna tempor ad magna voluptate.",
                  "lName": "jadhav",
                  "user": "53b98e66b6354c1c1b146b4f",
                  "companyName": "Commodo Lorem ullamco magna anim occaecat ipsum sunt.",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2014-12-13T15:36:39.775Z"
              },  {
                  "_id": "54c4c9047e8759101c3f3038",
                  "fName": "Prashnat",
                  "mName": "Abhiram",
                  "lName": "Jha",
                  "user": "{ _id: 53b98e66b6354c1c1b146b4f,\n  provider: 'local',\n  name: 'ram',\n  email: 'ram@ram.com',\n  tenant: 'abc',\n  username: 'ram',\n  __v: 0 }",
                  "companyName": "vikrant Roadways",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2015-01-25T10:44:20.937Z"
              },
              {
                  "_id": "548c5d078cdb93cc1dcf8f8f",
                  "fName": "swapnil",
                  "mName": "Ipsum aliquip est fugiat veniam magna tempor ad magna voluptate.",
                  "lName": "jadhav",
                  "user": "53b98e66b6354c1c1b146b4f",
                  "companyName": "Commodo Lorem ullamco magna anim occaecat ipsum sunt.",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2014-12-13T15:36:39.775Z"
              },  {
                  "_id": "54c4c9047e8759101c3f3038",
                  "fName": "Prashnat",
                  "mName": "Abhiram",
                  "lName": "Jha",
                  "user": "{ _id: 53b98e66b6354c1c1b146b4f,\n  provider: 'local',\n  name: 'ram',\n  email: 'ram@ram.com',\n  tenant: 'abc',\n  username: 'ram',\n  __v: 0 }",
                  "companyName": "vikrant Roadways",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2015-01-25T10:44:20.937Z"
              },
              {
                  "_id": "548c5d078cdb93cc1dcf8f8f",
                  "fName": "swapnil",
                  "mName": "Ipsum aliquip est fugiat veniam magna tempor ad magna voluptate.",
                  "lName": "jadhav",
                  "user": "53b98e66b6354c1c1b146b4f",
                  "companyName": "Commodo Lorem ullamco magna anim occaecat ipsum sunt.",
                  "__v": 0,
                  "__t": "Customer",
                  "address": [],
                  "created": "2014-12-13T15:36:39.775Z"
              }
          ];
        });


}]);

angular.module('mean').controller('createCustomerCtrl', ['$scope','Customers','$state','toaster', function ($scope,Customers,$state,toaster) {
    $scope.save = function() {
        customer = {
            name: $scope.customer.name,
            contact: $scope.customer.contact,
            email: $scope.customer.email,
            address: $scope.customer.address,
            credit:{limit:$scope.customer.credit.limit,
                period:$scope.customer.credit.period
            },
            salesrep:{
                name:$scope.customer.salesrep.name,
                phoneno:$scope.customer.salesrep.phoneno
            }

        };


        Customers.saveCustomer(customer).then(function(response) {
            console.log(response);
            toaster.pop('success', "Customer Created", response._id);
            $state.go('customers.edit'  ,{'customerId': response._id});
        },function(data){
		console.log(data);
		});
    }
}]);
angular.module('mean').controller('editCustomerCtrl', ['$scope','Customers','$stateParams','toaster', function ($scope,Customers,$stateParams,toaster) {
    console.log('state params customer id:',$stateParams.customerId);
    Customers.getCustomer($stateParams.customerId).then(function(data){
       console.log(data);
       $scope.customer=data;
        $scope.save=function(){
            console.log($scope.customer);
            $scope.customer.put();
            toaster.pop('success','Customer Updated',data._id);
        }
   });
}]);