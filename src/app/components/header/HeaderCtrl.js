(function() {
  'use strict';

  angular.module('exposure').controller('HeaderCtrl', ['$scope', 'active', 'screenSizes', function($scope, active, screenSizes) {

    $scope.active = active;
    $scope.lock = false;

    $scope.mobiles = screenSizes.mobile;
    $scope.tablets = screenSizes.tablet;
    $scope.desktops = screenSizes.desktop;

  }]);
})();