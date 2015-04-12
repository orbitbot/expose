(function() {
  'use strict';

  angular.module('exposure')
    .controller('HistoryCtrl', ['$scope', 'history',
                               function($scope, history) {

    function updateView() {
      history.get().then(function(res) {
        $scope.history = res;
      });
    }
    updateView();

    $scope.remove = function(url) {
      history.remove(url)
        .then(updateView);
    };

    $scope.clearHistory = function() {
      history.clear()
        .then(updateView);
    };

  }]);
})();