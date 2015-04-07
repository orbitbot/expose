describe('HistoryCtrl', function() {

  beforeEach(function() {
    module('exposure');
  });

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('HistoryCtrl', {
      $scope: scope
    });
  }));

  it('shows navigation history');

});