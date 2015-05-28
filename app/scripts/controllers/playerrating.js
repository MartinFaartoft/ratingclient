'use strict';

angular.module('ratingClient')
  .controller('PlayerRatingCtrl', function($scope, $routeParams, Player, $http, baseUrl) {
    $scope.model = {
        gameType: $routeParams.gameType,
        player: Player.get({id: $routeParams.playerId}),
        ratingEntries: []
    };

    $http.get(baseUrl + '/players/' + $routeParams.playerId + '/rating/' + $routeParams.gameType + '/')
        .success(function(response) {
            console.log(response);
            $scope.model.ratingEntries = response;
        });

    $scope.save = function() {
        $scope.model.player.$update();
    };
  });
