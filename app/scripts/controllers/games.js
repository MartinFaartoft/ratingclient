'use strict';

/**
 * @ngdoc function
 * @name ratingClient.controller:GamesCtrl
 * @description
 * # GamesCtrl
 * Controller of the ratingClient
 */
angular.module('ratingClient')
  .controller('GamesCtrl', function($scope, Game, $window) {
    $scope.model = {
        games: Game.query()
    };

    $scope.delete = function(game) {
        var index = $scope.model.games.indexOf(game);
        
        var success = function() {
            $scope.model.games.splice(index, 1);
        };

        var error = function(err) {
            $window.alert(err.data.detail);
        };

        game.$delete(null, success, error);
    };
  });
