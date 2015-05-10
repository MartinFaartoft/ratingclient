'use strict';

/**
 * @ngdoc function
 * @name ratingClient.controller:PlayerdetailsCtrl
 * @description
 * # PlayerdetailsCtrl
 * Controller of the ratingClient
 */
angular.module('ratingClient')
  .controller('PlayerdetailsCtrl', function ($scope, $http, $routeParams, Player) {
    $scope.model = {
        player: Player.get({id: $routeParams.playerId})
    };

    $scope.save = function() {
        $scope.model.player.$update();
    };
  });
