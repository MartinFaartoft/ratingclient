'use strict';

describe('Controller: CreateGameCtrl', function () {

  // load the controller's module
  beforeEach(module('ratingClient'));

  var CreategameCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreategameCtrl = $controller('CreateGameCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
