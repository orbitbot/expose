(function() {
  'use strict';

  angular.module('exposure', ['templates', 'ui.router', 'ng-appcache', 'pouchdb']);

  angular.module('exposure').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

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
      .state('app.docs', {
        url: 'docs',
        views: {
          'content@': {
            templateUrl: 'docs/docs.html'
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
        }
      })
      .state('app.menu', {
        url: 'menu',
        views: {
          'content@': {
            templateUrl: 'menu/menu.html'
          }
        }
      })
      .state('app.settings', {
        url: 'settings',
        views: {
          'content@': {
            controller: 'SettingsCtrl',
            templateUrl: 'settings/settings.html'
          }
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
      semver: '0.0.5'
    });
})();