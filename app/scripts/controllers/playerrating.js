'use strict';
/*jshint camelcase: false */
angular.module('ratingClient')
  .controller('PlayerRatingCtrl', function($scope, $routeParams, Player, $http, baseUrl, $filter) {
    $scope.model = {
        gameType: $routeParams.gameType,
        player: Player.get({id: $routeParams.playerId}),
        ratingEntries: []
    };

    $scope.labels = [];
    $scope.series = ['Rating'];
    $scope.data = [[]];

    $scope.refreshChartData = function() {
        $scope.model.ratingEntries.forEach(function(r) {
            $scope.labels.push('');
            $scope.data[0].push($filter('number')(r.rating, 2)); 
        });

        $scope.labels.reverse();
        $scope.data[0].reverse();

        //add initial 0,0 point
        $scope.labels.unshift('');
        $scope.data[0].unshift(0);
    };

    $http.get(baseUrl + '/players/' + $routeParams.playerId + '/rating/' + $routeParams.gameType + '/')
        .success(function(response) {
            console.log(response);
            $scope.model.ratingEntries = response;
            $scope.refreshChartData();
        });

    $scope.save = function() {
        $scope.model.player.$update();
    };
  });
