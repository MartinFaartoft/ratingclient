'use strict';

/**
 * @ngdoc function
 * @name ratingclientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ratingclientApp
 */
angular.module('ratingClient')
  .controller('IndexCtrl', function($http, $scope, $route, $routeParams, authService, baseUrl) {
    $scope.auth = authService;

    $scope.login = function() {
        authService.login($scope.user.username, $scope.user.password);
        $scope.user = {};
    };

    $scope.logout = function() {
        authService.logout();
    };

    $scope.createPlayer = function() {
        var url = baseUrl + '/players/';
        $http.post(url, {name: 'SomeName'})
            .success(function() {
                window.alert('We are logged in!');
            });
    };
  });
