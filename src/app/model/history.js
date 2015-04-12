(function() {
  'use strict';

  angular.module('exposure').factory('history', ['$log', 'database', function($log, db) {

    function addWebsiteToHistory(website) {
      db.upsert('history', function(doc) {
        var url = website.url;
        doc[url] = website;

        return doc;
      }).then(function(res) {
        $log.log('website added to history', res);
      }).catch(function(err) {
        $log.log('error adding website to history', err);
      });
    }

    function clearStoredHistory() {
      return db.get('history').then(function(doc) {
        return db.remove(doc);
      }).then(function(res) {
        $log.log('history removed', res);
      }).catch(function(err) {
        $log.log('error clearing history', err);
      });
    }

    function getStoredHistory() {
      return db.get('history').then(function(doc) {
        var array = [];
        delete doc._id;
        delete doc._rev;

        for (var site in doc)
          array.push(doc[site]);

        array.sort(function(left, right) {
          return new Date(right.timestamp) - new Date(left.timestamp);
        });

        return array;
      }).catch(function(err) {
        $log.log('history document not found', err);
        return [];
      });
    }

    function removeWebsiteFromHistory(url) {
      return db.upsert('history', function(doc) {
        if (!doc[url]) {
          return false;
        }

        delete doc[url];
        return doc;
      }).then(function(res) {
        $log.log('removed website from history', res);
      }).catch(function(err) {
        $log.log('error removing website from history', err);
      });
    }

    function updateHistory(url, screens) {
      db.upsert('history', function(doc) {
        if (!doc[url])
          return false;

        if (angular.isUndefined(screens))
          doc[url].timestamp = Date();
        else
          doc[url].screens = screens;
        return doc;
      }).then(function(res) {
        $log.log('updated website history', res);
      }).catch(function(err) {
        $log.log('error updating website history', err);
      });
    }

    return {
      add    : addWebsiteToHistory,
      clear  : clearStoredHistory,
      get    : getStoredHistory,
      remove : removeWebsiteFromHistory,
      update : updateHistory
    };
  }]);
})();