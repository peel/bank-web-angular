'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('AboutCtrl', function ($scope, $http) {
        $http.get('http://localhost:8001/customers/1').
            success(function (data) {
                $scope.customer = data;
            });
    });
