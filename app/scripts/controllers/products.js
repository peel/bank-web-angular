'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('ProductsCtrl', function ($scope, $http) {
        $http.get('http://localhost:8002/products?customerId=1').
            success(function (data) {
                $scope.products = data.products;
            });
    });
