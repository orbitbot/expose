(function() {
  'use strict';

  angular.module('exposure').controller('AboutCtrl', ['$scope', 'version', function($scope, version) {

    $scope.version = version;

  }]);
})();