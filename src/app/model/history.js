(function() {
  'use strict';

  angular.module('exposure').factory('history', ['pouchDB', function(pouchDB) {
    var db = pouchDB('exposure-history-dev');

    db.get('counter').then(function(doc) {
      console.log('retrieved counter value: ' + doc.counter);

      return db.put({
        counter : ++doc.counter,
        _id     : 'counter',
        _rev    : doc._rev
      });
    }).then(function(res) {
      console.log('stored updated counter:', res);
    }).catch(function(err) {
      console.log('error updating counter!', err);
      if (err.status === 404) {
        db.put({
          counter : 0,
          _id     : 'counter',
        }).then(function(res) {
          console.log('initialized counter with value 0');
        }).catch(function(err) {
          console.log('error creating counter!', err);
        });
      }
    });

    return {
      getDb: function() { return db; }
    };
  }]);
})();