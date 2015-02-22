/**
 * Created by Anoop on 2/16/2015.
 */

angular.module('mean').controller('InvoiceExampleCtrl', ['$scope','$window', function ($scope,$window) {
    $scope.data={lines:[
        {challanNo:'7482',Date:'12/03/2015',vehicleNo:'MH 43 W 6014',product:'Methenol',quantity:'20M.T',amount:8130,remark:''},
//        {challanNo:'7483',Date:'24/04/2015',vehicleNo:'MH 03 Q 3545',product:'Ethenol',quantity:'50M.T',amount:53450,remark:''}
    ],
        detentionLine:[{description:'one day detention for not unloading tanker',reportedDate:'24/04/2015',unloadingDate:'26/04/2015',amount:'50000'}],
    total:65580,
        discount:0
    };

    $scope.total=672;
    $scope.printInvoice = function () {
        var originalContents, popupWin, printContents;
        return printContents = document.getElementById("invoice").innerHTML, originalContents = document.body.innerHTML, popupWin = window.open(), popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="/css/my-theme.css" /><link rel="stylesheet" type="text/css" href="/css/common.css" /></head><body onload="window.print()">' + printContents + "</html>"), popupWin.document.close()
    }
    $scope.hideHeaderImg = false;
    $scope.hideSign = false;
    $scope.toggleHeaderImg=function(){
        $scope.hideHeaderImg =! $scope.hideHeaderImg;
    }
    $scope.toggleSign = function () {
        $scope.hideSign = !$scope.hideSign;
    }
}]);