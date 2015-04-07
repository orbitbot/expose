(function() {
  'use strict';

  angular.module('exposure').factory('screenSizes', [function() {
    // portrait orientation
    return {
      mobile: [
        { name: 'Android Small', width: 320, height: 426 },
        { name: 'Android Normal', width: 320, height: 470 },
        { name: 'Android Large', width: 480, height: 640 },
        { name: 'Android Extra-Large', width: 720, height: 960 },
        { name: 'iPhone 3GS', width: 320, height: 480 },
        { name: 'iPhone 4S', width: 640, height: 960 },
        { name: 'iPhone 5', width: 640, height: 1136 }
      ],
      tablet: [
        { name: 'iPad Mini', width: 768, height: 1024 },
        { name: 'iPad', width: 1536, height: 2048 }
      ],
      desktop: [
        { name: '1024x768', width: 600, height: 768 },
        { name: '1280x800', width: 1280, height: 800 },
        { name: '1280 x 1024', width: 1280, height: 1024 },
        { name: '1366 x 768', width: 1366, height: 768 },
        { name: '1080p', width: 1920, height: 1080 }
      ]
    };
  }]);
})();