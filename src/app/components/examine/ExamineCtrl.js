(function() {
  'use strict';

  angular.module('exposure').controller('ExamineCtrl', ['$scope', 'active', function($scope, active) {

    $scope.current = active;

  }]);
})();