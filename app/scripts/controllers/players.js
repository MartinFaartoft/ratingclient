'use strict';

/**
 * @ngdoc function
 * @name ratingClient.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the ratingClient
 */
angular.module('ratingClient')
  .controller('PlayersCtrl', function ($scope, $http, baseUrl) {
    $scope.model = {
        players: []
    };

    var url = baseUrl + '/players/';
    $http.get(url)
        .success(function(data) {
            $scope.model.players = data;
        });
  });
