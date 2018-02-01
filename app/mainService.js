'use strict';

angular.module('myApp')
.factory('mainService', function mainService($http){

    function _getDriverDetails(){
        return $http.get('driverStandings.json')
    };

    return{
        getDriverDetails : _getDriverDetails
    };

});