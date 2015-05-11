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
  .config(function($routeProvider, $httpProvider, $resourceProvider) {
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
        controller: 'PlayerDetailsCtrl'
      })
      .when('/creategame', {
        templateUrl: 'views/creategame.html',
        controller: 'CreateGameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.interceptors.push('authInterceptor');

    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
  })
  //constants
  .constant('baseUrl', 'https://ratinglist.herokuapp.com');
