'use strict';

angular.module('ratingClient')
.factory('Player', function($resource, baseUrl) {
    return $resource(baseUrl + '/players/:id/', {id: '@id'}, {
        'update': {method:'PUT'}
    });
})
.factory('Game', function($resource, baseUrl) {
    return $resource(baseUrl + '/games/:id/', {id: '@id'}, {
        'update': {method:'PUT'}
    });
});