(function() {
  'use strict';

  angular.module('exposure', ['templates', 'ui.router']);

  angular.module('exposure').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('hello', {
        url: '/',
        controller: 'HelloCtrl',
        templateUrl: 'hello/hello.html'
      });

    $urlRouterProvider
      .when('', '/')
      .otherwise('/');
  }]);
})();