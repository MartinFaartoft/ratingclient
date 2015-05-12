'use strict';

/**
 * @ngdoc service
 * @name ratingClient.authService
 * @description
 * # authService
 * Factory in the ratingClient.
 */
angular.module('ratingClient')
  .factory('authService', function ($http, baseUrl, $window, $rootScope) {
    /*jshint camelcase: false */
    var isLoggedIn = Boolean(window.sessionStorage.token);

    var user = $window.sessionStorage.token ? $window.jwt_decode(window.sessionStorage.token) : {};

    var login = function(username, password) {
        var self = this;
        var url = baseUrl + '/api-token-auth/';
        $http.post(url, {'username': username, 'password': password})
            .success(function(data) {
                $window.sessionStorage.token = data.token;
                self.user = window.jwt_decode(data.token);
                console.log(self.user);
                self.isLoggedIn = true;
            })
            .error(function(data, status) {
                $window.alert(status);
            });
    };

    $rootScope.isLoggedIn = function() {
      return isLoggedIn;
    };

    var logout = function() {
        window.sessionStorage.removeItem('token');
        this.user = {};
        this.isLoggedIn = false;
    };

    return {
      isLoggedIn: isLoggedIn,
      user: user,
      login: login,
      logout: logout
    };
  });