(function() {
  'use strict';

  angular.module('exposure')
    .controller('HeaderCtrl', ['$window', '$scope', 'active', 'history', 'screenSizes',
                              function($window, $scope, active, history, screenSizes) {

    $scope.active = active;
    $scope.lock = false;

    $scope.mobiles = screenSizes.mobile;
    $scope.tablets = screenSizes.tablet;
    $scope.desktops = screenSizes.desktop;

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

    $scope.updatePage = function() {
      $window.location.reload();
    };

  }]);
})();