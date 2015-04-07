(function() {
  'use strict';

  angular.module('exposure').factory('active', [function() {
    return {
      url: 'http://some.site',
      screens: [
        { width: 320, height: 240 },
        { width: 480, height: 240 }
      ]
    };
  }]);
})();