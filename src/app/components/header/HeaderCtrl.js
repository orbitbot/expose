(function() {
  'use strict';

  angular.module('exposure')
    .controller('HeaderCtrl', ['$window', '$scope', 'active', 'screenSizes',
                              function($window, $scope, active, screenSizes) {

    $scope.active = active;
    $scope.lock = false;

    $scope.mobiles = screenSizes.mobile;
    $scope.tablets = screenSizes.tablet;
    $scope.desktops = screenSizes.desktop;

    $scope.updatePage = function() {
      $window.location.reload();
    };

  }]);
})();