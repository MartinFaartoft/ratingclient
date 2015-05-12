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
    'ngTouch',
    'ui.bootstrap'
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
      .when('/createplayer', {
        templateUrl: 'views/createplayer.html',
        controller: 'CreatePlayerCtrl'
      })
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl'
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
  //.constant('baseUrl', 'http://lvh.me:8000');
