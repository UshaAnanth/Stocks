/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function ()
{

    var performance = [
        {
            country: "Australia",
            MediaPerformance: "62.3",
            WebPerformance: "45.4",
            OverallPerformance: "59.9"

        },
        {
            country: "France",
            MediaPerformance: "52.3",
            WebPerformance: "67.4",
            OverallPerformance: "58.6"

        }
    ];

    var app = angular.module("StockChart", ['StockService']);
    
    /*app.service('dataService', function () {
        var message = function () {
            return 'Data from service';
        };
         
        return {
            message: message
        };
    });*/

    app.controller("GolbalPerfController", ['$scope', 'dataService', function ($scope, dataService) {
            $scope.globalPerformance = performance;
            $scope.message = dataService.getData();
            
    }]);
    

    // Custom Directive to display table 
    app.directive('displayTable', function () {
        return{
            strict: 'E',
            templateUrl: "displayTable.html"
        };

    });


})();


//Controller can also be moved inside the directive using the controller: and controllerAs:
//ng-model can be used to update the values dynamically