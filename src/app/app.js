angular.module('exposure', ['templates', 'ui.router', 'ng-appcache', 'pouchdb']);

angular.module('exposure').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
  'use strict';

  $urlRouterProvider
    .when('', '/')
    .otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      views: {
        'header': {
          controller: 'HeaderCtrl',
          templateUrl: 'header/header.html'
        },
        'content': {
          controller: 'ExamineCtrl',
          templateUrl: 'examine/examine.html'
        }
      },
      resolve: {
        settings: ['Settings', function(Settings) { return Settings; }]
      }
    })
    .state('app.about', {
      url: 'about',
      views: {
        'content@': {
          controller: 'AboutCtrl',
          templateUrl: 'about/about.html'
        }
      }
    })
    .state('app.history', {
      url: 'history',
      views: {
        'content@': {
          controller: 'HistoryCtrl',
          templateUrl: 'history/history.html'
        }
      },
      resolve: {
        preloaded: ['history', function(history) {
          return history.get().then(function(res) { return res; });
        }],
        settings: ['Settings', function(Settings) { return Settings; }]
      }
    });
}]);

angular.module('exposure').config(['pouchDBProvider', 'POUCHDB_METHODS',
  function(pouchDBProvider, POUCHDB_METHODS) {

    pouchDBProvider.methods = angular.extend({}, POUCHDB_METHODS, {
      upsert: 'qify',
    });
}]);

angular.module('exposure')
  .constant('version', {
    semver: '0.0.7'
  })
  .constant('Default', {
    settings: {
      history: {
        enabled: true,
        restore: false
      }
    }
  });