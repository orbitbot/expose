angular.module('exposure')
  .factory('Settings', ['$rootScope', '$q', '$log', 'database', 'Default', '$timeout',
                       function($rootScope, $q, $log, db, Default, $timeout) {
  'use strict';

  function errorHandler(error) {
    $log.log('error storing settings document', error);
  }

  function diff(current, previous) {
    if (current.rev !== previous.rev)
      return true;
    else
      return !angular.equals(current.history, previous.history);
  }

  var settings = angular.copy(Default.settings);
  var deferred = $q.defer();

  db.get('settings')
    .then(function(doc) {
      settings = doc;
      deferred.resolve(settings);
    })
    .catch(function(err) {
      $log.log('settings document not found, storing defaults.', err);
      db.upsert('settings', function() { return settings; }) // defaults defined above
        .catch(errorHandler);
      deferred.resolve(settings);
    })
    .finally(function() {
      $rootScope.$watch(function() {
        return settings;
      }, function(change, previous) {
        if (!angular.isUndefined(change) && diff(change, previous)) {
          db.upsert('settings', function() { return change; })
            .catch(errorHandler);
        }
      }, true);
    });

    return deferred.promise;
}]);