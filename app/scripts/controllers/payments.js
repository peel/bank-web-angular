'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('PaymentsCtrl', function ($scope, $http) {
        $http.get('http://localhost:8003/payments').
            success(function (data) {
                $scope.payments = data;
            });
    });
