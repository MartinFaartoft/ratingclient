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
  .module('ratingClient', [
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ratinglist/:gameType', {
        templateUrl: 'views/ratinglist.html',
        controller: 'RatinglistCtrl'
      })
      .when('/players', {
        templateUrl: 'views/players.html',
        controller: 'PlayersCtrl'
      })
      .when('/players/:playerId', {
        templateUrl: 'views/playerdetails.html',
        controller: 'PlayerdetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.interceptors.push('authInterceptor');
  })
  //constants
  .constant('baseUrl', 'https://ratinglist.herokuapp.com');
