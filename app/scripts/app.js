'use strict';

/**
 * @ngdoc overview
 * @name ratingclientApp
 * @description
 * # ratingclientApp
 *
 * Main module of the application.
 */
angular
  .module('ratingclientApp', [
    'ngMessages',
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
      .otherwise({
        redirectTo: '/'
      });
  });
