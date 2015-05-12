'use strict';

/**
 * @ngdoc function
 * @name ratingClient.controller:CreateplayerCtrl
 * @description
 * # CreateplayerCtrl
 * Controller of the ratingClient
 */
angular.module('ratingClient')
  .controller('CreatePlayerCtrl', function ($scope, Player, $window) {
    $scope.model = {
        player: new Player()
    };

    $scope.save = function() {
        $scope.model.player.$save(null, function() {
            $window.alert('player created');
            $scope.model.player = new Player();
        });
    };

  });
