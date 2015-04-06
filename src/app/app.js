(function() {
  'use strict';

  angular.module('exposure', ['templates', 'ui.router']);

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
      .state('app.history', {
        url: 'history',
        views: {
          'content@': {
            controller: 'HistoryCtrl',
            templateUrl: 'history/history.html'
          }
        }
      });
  }]);
})();