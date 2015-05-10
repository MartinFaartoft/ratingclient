'use strict';

/**
 * @ngdoc function
 * @name ratingClient.controller:PlayerdetailsCtrl
 * @description
 * # PlayerdetailsCtrl
 * Controller of the ratingClient
 */
angular.module('ratingClient')
  .controller('PlayerdetailsCtrl', function ($scope, $http, baseUrl, $routeParams) {
    $scope.model = {
        player: {}
    };

    var url = baseUrl + '/players/' + $routeParams.playerId + '/';
    $http.get(url)
        .success(function(data) {
            $scope.model.player = data;
        });
  });
