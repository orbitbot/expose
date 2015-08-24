angular.module('exposure').controller('AboutCtrl', ['$scope', 'version', function($scope, version) {
  'use strict';

  $scope.version = version;

}]);