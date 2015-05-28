'use strict';
/*jshint camelcase: false */
angular.module('ratingClient')
  .controller('EditGameCtrl', function($scope, Game, Player, $routeParams, $window) {
    $scope.model = {
        game: {},
        players: Player.query()
    };

    Game.get({id: $routeParams.gameId}, function(game) {
        var split = game.finished_time.split('T');
        $scope.model.date = split[0];
        $scope.model.finished_time = split[1].substring(0,5);

        game.game_players.forEach(function(gp) {
            gp.player_name = gp.player.name;
            gp.player = gp.player.id;
        });
        
        $scope.model.game = game;
    });

    $scope.save = function() {
        $scope.model.game.finished_time = $scope.model.date + 'T' + $scope.model.finished_time + ':00Z';
        $scope.model.game.$update(null, function() {
            $window.alert('Game updated');
        });
        //$scope.model.game.$update();
    };

    
});