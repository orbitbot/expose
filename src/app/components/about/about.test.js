describe('AboutCtrl', function() {

  beforeEach(function() {
    module('exposure');
  });

  var ctrl, scope, version;

  beforeEach(inject(function($controller, $rootScope, _version_) {
    scope = $rootScope.$new();
    ctrl = $controller('AboutCtrl', {
      $scope: scope
    });
    version = _version_;
  }));

  it('displays version information', function() {
    expect(scope.version).to.equal(version);
  });

});