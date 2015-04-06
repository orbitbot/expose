describe('ExamineCtrl', function() {

  beforeEach(function() {
    module('exposure');
  });

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('ExamineCtrl', {
      $scope: scope
    });
  }));

  it('writes a reasonable test');

});