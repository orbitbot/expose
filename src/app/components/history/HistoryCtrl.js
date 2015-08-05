angular.module('exposure')
  .controller('HistoryCtrl', ['$scope', 'history', 'preloaded', 'settings',
                             function($scope, history, preloaded, settings) {
  'use strict';

  $scope.settings = settings.history;
  $scope.history = preloaded;

  function updateView() {
    history.get().then(function(res) {
      $scope.history = res;
    });
  }

  $scope.remove = function(url) {
    history
      .remove(url)
      .then(updateView);
  };

  $scope.clearHistory = function() {
    history
      .clear()
      .then(updateView);
  };

}]);