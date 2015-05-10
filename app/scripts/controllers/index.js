'use strict';

/**
 * @ngdoc function
 * @name ratingclientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ratingclientApp
 */
angular.module('ratingClient')
  .controller('IndexCtrl', function($scope, $route, $routeParams, authService) {
    $scope.auth = authService;

    $scope.login = function() {
        authService.login($scope.user.username, $scope.user.password);
        $scope.user = {};
    };

    $scope.logout = function() {
        authService.logout();
    };
  });
