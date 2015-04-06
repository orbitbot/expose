describe('AboutCtrl', function() {

  beforeEach(function() {
    module('exposure');
  });

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('displays help', function() {
    expect(scope.help).to.equal('documentation');
  });

});