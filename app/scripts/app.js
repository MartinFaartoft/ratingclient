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
    'ui.bootstrap',
    'chart.js',
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
      .when('/players/:playerId/rating/:gameType', {
        templateUrl: 'views/playerrating.html',
        controller: 'PlayerRatingCtrl'
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
      .when('/editgame/:gameId', {
        templateUrl: 'views/editgame.html',
        controller: 'EditGameCtrl'
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
  
    //configure chart.js
  .config(function(ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: ['#FF5252', '#FF8A80'],
      animation: false,
      showTooltips: false,
      //scaleShowLabels: false

    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      bezierCurve: false,
      scaleShowVerticalLines: false,
      pointDot: false,
      datasetFill: false,
    });
  })


  //constants
  //.constant('baseUrl', 'https://ratinglist.herokuapp.com');
  .constant('baseUrl', 'http://lvh.me:8000');

