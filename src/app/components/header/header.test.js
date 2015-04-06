describe('HeaderCtrl', function() {

  beforeEach(function() {
    module('exposure');
  });

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('HeaderCtrl', {
      $scope: scope
    });
  }));

  it('suggest previous session urls');
  it('displays a prompt if a new valid url is typed');
  it('updates active url on user action');
    // click prompt
    // press enter
  it('adds screens to active set if a previously unselected one is chosen');
  it('removes screns from active set if a previously selected one is chosen');
  it('disables modifying screen set if lock is enabled');


});