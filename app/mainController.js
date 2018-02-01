'use strict';

angular.module('myApp')
.controller('mainController', function mainController($scope, mainService){

    $scope.nameFilter = null;
    $scope.driversList = [];

    mainService.getDriverDetails().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });

});