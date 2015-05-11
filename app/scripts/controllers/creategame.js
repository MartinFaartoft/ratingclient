'use strict';

/**
 * @ngdoc function
 * @name ratingClient.controller:CreategameCtrl
 * @description
 * # CreategameCtrl
 * Controller of the ratingClient
 */
angular.module('ratingClient')
  .controller('CreateGameCtrl', function($scope, Game) {
    /*jshint camelcase: false */
    $scope.model = { 
        game: new Game()
    };

    $scope.model.game.game_players = [{order: 1}, {order: 2}, {order: 3}, {order: 4}];

    $scope.save = function() {
        $scope.model.game.finished_time = $scope.model.date + 'T' + $scope.model.finished_time + ':00Z';
        $scope.model.game.$save();
    };

  });
