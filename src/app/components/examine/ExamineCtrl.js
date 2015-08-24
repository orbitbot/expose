angular.module('exposure')
  .controller('ExamineCtrl', ['$scope', '$stateParams', 'active', 'settings', 'history',
                             function($scope, $stateParams, active, settings, history) {
  'use strict';

  $scope.current = active;

  if ($stateParams.website || $stateParams.screens) {
    if ($stateParams.website)
      active.url = decodeURIComponent($stateParams.website);
    if ($stateParams.screens) {
      var paramScreens = angular.fromJson($stateParams.screens);
      var activeScreens = active.screens.map(function(screen) { return screen.name; });
      paramScreens.forEach(function(screenName) {
        if (activeScreens.indexOf(screenName) < 0)
          active.toggle(screenName);
      });
    }
  }

  // if (active.url !== '' && active.screens.length && settings.history.enabled)
  //   history.update(active.url, active.screens);

}]);