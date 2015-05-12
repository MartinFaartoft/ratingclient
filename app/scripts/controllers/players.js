'use strict';

/**
 * @ngdoc function
 * @name ratingClient.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the ratingClient
 */
angular.module('ratingClient')
  .controller('PlayersCtrl', function($scope, Player) {
    $scope.model = {
        players: Player.query()
    };

    $scope.delete = function(player) {
        var index = $scope.model.players.indexOf(player);
        
        var success = function() {
            $scope.model.players.splice(index, 1);
        };

        var error = function(err) {
            alert(err.data.detail);
        }

        player.$delete(null, success, error);
    };
  });
