(function() {
  'use strict';

  angular.module('exposure')
    .controller('HistoryCtrl', ['$scope', 'history',
                               function($scope, history) {

    $scope.history = 'History';

  }]);
})();