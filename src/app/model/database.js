angular.module('exposure').factory('database', ['pouchDB', function(pouchDB) {
  'use strict';
  var db = pouchDB('exposure-history-dev', {
    auto_compaction: true
  });

  return db;
}]);