'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.user=user;
    Chart.defaults.global.colours=[
        { // blue
            fillColor: "rgba(43,121,161,0.8)",
            strokeColor: "rgba(43,121,161,1)",
            pointColor: "rgba(43,121,161,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(43,121,161,0.8)"
        },
        { // red
            fillColor: "rgba(217,83,79,0.8)",
            strokeColor: "rgba(217,83,79,1)",
            pointColor: "rgba(217,83,79,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(217,83,79,0.8)"
        },
        { // green
            fillColor: "rgba(133,167,30,0.2)",
            strokeColor: "rgba(133,167,30,1)",
            pointColor: "rgba(133,167,30,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(133,167,30,0.8)"
        },

        { // light grey
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,0.8)"
        },


        { // yellow
            fillColor: "rgba(240,155,45,0.2)",
            strokeColor: "rgba(240,155,45,1)",
            pointColor: "rgba(240,155,45,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(240,155,45,0.8)"
        },
        { // grey
            fillColor: "rgba(148,159,177,0.2)",
            strokeColor: "rgba(148,159,177,1)",
            pointColor: "rgba(148,159,177,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(148,159,177,0.8)"
        },
        { // dark grey
            fillColor: "rgba(77,83,96,0.2)",
            strokeColor: "rgba(77,83,96,1)",
            pointColor: "rgba(77,83,96,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(77,83,96,1)"
        }
    ];
    $scope.global = Global;
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.pielabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.piedata = [300, 500, 100];
}]);