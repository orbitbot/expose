angular.module('exposure')
  .controller('HeaderCtrl', ['$window', '$scope', '$location', '$state', 'active', 'history', 'screenSizes',
                            function($window, $scope, $location, $state, active, history, screenSizes) {
  'use strict';

  $scope.active = active;
  $scope.lock = false;

  $scope.$watch('active.screens', function() {
    $scope.activeNames = $scope.active.screens.map(function(elem) { return elem.name; });
  }, true);

  $scope.devices = [
    { type: 'mobile',  screens: screenSizes.mobile  },
    { type: 'tablet',  screens: screenSizes.tablet  },
    { type: 'desktop', screens: screenSizes.desktop }
  ];

  $scope.loadPage = function(url) {
    if ($scope.url) {
      history.add({
        url       : url,
        timestamp : Date(),
        screens   : angular.copy($scope.active.screens)
      });

      active.url = $scope.url;
      $location.path('/');
    }
  };

  $scope.toggleScreen = function(screenName) {
    if (!$state.is('app'))
      $location.path('/');
    else if (!$scope.lock)
      active.toggle(screenName);
  };

  $scope.updatePage = function() {
    $window.location.reload();
  };

}]);