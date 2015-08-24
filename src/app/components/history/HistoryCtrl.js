angular.module('exposure')
  .controller('HistoryCtrl', ['$scope', '$state', '$location', 'history', 'preloaded', 'settings',
                             function($scope, $state, $location, history, preloaded, settings) {
  'use strict';

  $scope.settings = settings.history;
  $scope.history = preloaded;

  $location.search('website', null);
  $location.search('screens', null);

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

  $scope.restore = function(website) {
    var screens = website.screens ? website.screens.map(function(screen) { return screen.name; }) : [];
    $state.go('app', {
      website : website.url,
      screens : angular.toJson(screens)
    });
  };

  $scope.clearHistory = function() {
    history
      .clear()
      .then(updateView);
  };

}]);