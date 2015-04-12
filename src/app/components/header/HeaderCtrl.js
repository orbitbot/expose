(function() {
  'use strict';

  angular.module('exposure')
    .controller('HeaderCtrl', ['$window', '$scope', 'active', 'history', 'screenSizes',
                              function($window, $scope, active, history, screenSizes) {

    $scope.active = active;
    $scope.lock = false;

    $scope.$watch('active.screens', function() {
      $scope.activeNames = $scope.active.screens.map(function(elem) { return elem.name; });
    }, true);

    $scope.devices = [
      { type: 'Mobile',  screens: screenSizes.mobile  },
      { type: 'Tablet',  screens: screenSizes.tablet  },
      { type: 'Desktop', screens: screenSizes.desktop }
    ];

    $scope.loadPage = function(url) {
      console.log('loadPage ' + url);

      if ($scope.url) {
        history.add({
          url       : url,
          timestamp : Date(),
          screens   : []
        });
      }
    };

    $scope.toggleScreen = function(screenName) {
      if (!$scope.lock)
        active.toggle(screenName);
    };

    $scope.updatePage = function() {
      $window.location.reload();
    };

  }]);
})();