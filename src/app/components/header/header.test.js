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

  it('stores successfully loaded urls in history');
  it('does something useful with fail case');

  it('suggest previous session urls');
  it('displays a prompt if a new valid url is typed');
  it('updates active url on user action');
    // click prompt
    // press enter

  it('adds screens to active set if a previously unselected one is chosen');
  it('removes screns from active set if a previously selected one is chosen');
  it('disables modifying screen set if lock is enabled');
  it('displays update available if there is a downloaded update for the application cache');
  it('reloads the page if update available is clicked');

});