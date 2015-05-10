'use strict';

/**
 * @ngdoc function
 * @name ratingClient.controller:RatinglistCtrl
 * @description
 * # RatinglistCtrl
 * Controller of the ratingClient
 */
angular.module('ratingClient')
  .controller('RatinglistCtrl', function($scope, $routeParams, $http, baseUrl) {
    $scope.gameType = $routeParams.gameType;

    $scope.model = {
        ratingList: []
    };

    var url = baseUrl + '/ratinglist/' + $scope.gameType + '/';
    $http.get(url)
        .success(function(data) {
            $scope.model.ratingList = data;
        });
  });
