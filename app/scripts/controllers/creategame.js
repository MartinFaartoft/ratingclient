'use strict';

/**
 * @ngdoc function
 * @name ratingClient.controller:CreategameCtrl
 * @description
 * # CreategameCtrl
 * Controller of the ratingClient
 */
angular.module('ratingClient')
  .controller('CreateGameCtrl', function($scope, Game, Player, $window) {
    /*jshint camelcase: false */
    var initModel = function() {
        $scope.model = { 
            game: new Game(),
            players: Player.query()
        };

        $scope.model.game.game_players = [{order: 1}, {order: 2}, {order: 3}, {order: 4}];    
    };
    
    initModel();
    $scope.save = function() {
        $scope.model.game.finished_time = $scope.model.date + 'T' + $scope.model.finished_time + ':00Z';
        $scope.model.game.$save(null, function() {
            $window.alert('Game created');
            initModel();
        });
    };

  });
