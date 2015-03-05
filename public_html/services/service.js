/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function ()
{

    var app = angular.module("StockService", []);

    app.service('dataService', function () {
        var countryGlobalPerformanceJSON = {};
        var globalPerformanceJson = [];

        function getData()
        {
            d3.csv('data/countries_global_performance.csv', function (d) {
                return {
                    name: d.Name,
                    code: d.Code,
                    mediaPerformance: d.MediaPerformance,
                    webPerformance: d.WebPerformance,
                    overallPerformance: d.OverallPerformance
                };
            }, function (error, rows) {
                rows.forEach(function (d) {
                    countryGlobalPerformanceJSON[d.name] = d;
                   
                });

            });

        }
        function getJSONFromCSV() {


            $.each(function (i) {
                var temp = {};


                temp['mediaPerformance'] = parseFloat(countryGlobalPerformanceJSON[currentCountry].mediaPerformance);
                temp['webPerformance'] = parseFloat(countryGlobalPerformanceJSON[currentCountry].webPerformance);
                temp['overallPerformance'] = parseFloat(countryGlobalPerformanceJSON[currentCountry].overallPerformance);

                globalPerformanceJson.push(temp);

            });
        }

        return {
            getData: getData,
            getJSONFromCSV: getJSONFromCSV
        };

    });

})();