(function() {
  'use strict';

  angular.module('exposure').factory('database', ['pouchDB', function(pouchDB) {
    var db = pouchDB('exposure-history-dev', {
      auto_compaction: true
    });

    return db;
  }]);
})();