(function() {
  'use strict';

  angular.module('exposure').factory('active', ['screenSizes', function(screenSizes) {

    var url = 'http://localhost:3001';
    var screens = [];

    function toggleScreen(screenName) {

      for (var i = 0; i < screens.length; ++i) {
        if (screens[i].name === screenName) {
          screens.splice(i, 1);
          return;
        }
      }
      var devices = ['mobile', 'tablet', 'desktop'];

      for (var device in devices) {
        for (var j = 0; j < screenSizes[devices[device]].length; ++j) {
          if (screenSizes[devices[device]][j].name === screenName) {
            screens.push(screenSizes[devices[device]][j]);
            return;
          }
        }
      }
    }

    return {
      screens : screens,
      toggle  : toggleScreen,
      url     : url
    };
  }]);
})();