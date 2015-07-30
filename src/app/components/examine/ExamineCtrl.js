angular.module('exposure')
  .controller('ExamineCtrl', ['$scope', 'active',
                             function($scope, active) {
  'use strict';

  $scope.current = active;

}]);