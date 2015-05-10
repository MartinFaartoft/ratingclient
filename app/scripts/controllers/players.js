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
  });
