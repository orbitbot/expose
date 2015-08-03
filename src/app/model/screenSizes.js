angular.module('exposure').factory('screenSizes', [function() {
  'use strict';
  // portrait orientation
  return {
    mobile: [
      { name: 'Android Small',  width: 320, height: 426,  rotateable: true, portrait: true },
      { name: 'Android Normal', width: 320, height: 470,  rotateable: true, portrait: true },
      { name: 'Android Large',  width: 480, height: 640,  rotateable: true, portrait: true },
      { name: 'Android XL',     width: 720, height: 960,  rotateable: true, portrait: true },
      { name: 'iPhone 3GS',     width: 320, height: 480,  rotateable: true, portrait: true },
      { name: 'iPhone 4S',      width: 640, height: 960,  rotateable: true, portrait: true },
      { name: 'iPhone 5',       width: 640, height: 1136, rotateable: true, portrait: true }
    ],
    tablet: [
      { name: 'iPad Mini', width: 768,  height: 1024, rotateable: true, portrait: true },
      { name: 'iPad',      width: 1536, height: 2048, rotateable: true, portrait: true }
    ],
    desktop: [
      { name: '1024x768',  width: 1024, height: 768,  rotateable: false },
      { name: '1280x800',  width: 1280, height: 800,  rotateable: false },
      { name: '1280x1024', width: 1280, height: 1024, rotateable: false },
      { name: '1366x768',  width: 1366, height: 768,  rotateable: false },
      { name: '1080p',     width: 1920, height: 1080, rotateable: false }
    ]
  };
}]);