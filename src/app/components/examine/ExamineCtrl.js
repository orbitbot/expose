angular.module('exposure')
  .controller('ExamineCtrl', ['$scope', '$stateParams', 'active', 'settings', 'history',
                             function($scope, $stateParams, active, settings, history) {
  'use strict';

  $scope.current = active;

  if ($stateParams.website || $stateParams.screens) {
    if ($stateParams.website)
      active.url = decodeURIComponent($stateParams.website);
    if ($stateParams.screens) {
      console.log('got screens', $stateParams.screens);
      var paramScreens = angular.fromJson($stateParams.screens);
      paramScreens.forEach(active.toggle);
    }
  }

  if (active.url !== '' && active.screens.length && settings.history.enabled) {
    history.add({
      url       : active.url,
      timestamp : Date(),
      screens   : angular.copy(active.screens)
    });
  }

}]);