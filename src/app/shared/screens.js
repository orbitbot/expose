(function() {
  'use strict';

  angular.module('exposure').directive('screen', [function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        height: '@height',
        width: '@width'
      },
      template: '<iframe class="frame" height="{{ height }}" width="{{ width }}" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling></iframe>',
      link: function(scope, element, attr) {
        console.log(element);
        element.attr('src', attr.url);
        element.on('load', function() { console.log('load'); });

      }
    };
  }]);
})();