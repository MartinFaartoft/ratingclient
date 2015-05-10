'use strict';

angular.module('ratingClient')
.factory('Player', function($resource, baseUrl) {
    return $resource(baseUrl + '/players/:id/', {id: '@id'}, {
        'update': {method:'PUT'}
    });
});