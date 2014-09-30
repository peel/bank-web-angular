'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
angular
  .module('webApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
      })
      .when('/products', {
          templateUrl: 'views/products.html',
          controller: 'ProductsCtrl'
      })
      .when('/payments', {
        templateUrl: 'views/payments.html',
        controller: 'PaymentsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
