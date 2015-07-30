(function() {
  'use strict';

  angular.module('exposure').directive('screen', [function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        height   : '@',
        width    : '@',
        portrait : '@',
        url      : '='
      },
      template: '<iframe frameborder="0" marginwidth="0" marginheight="0" scrolling></iframe>',
      link: function(scope, element, attr) {
        element.attr('src', scope.url);
        scope.$watch('url', function(change) {
          element.attr('src', change);
        });

        attr.$observe('portrait', function(change) {
          if (scope.$eval(change)) {
            element.attr('height', attr.height);
            element.attr('width', attr.width);
          } else {
            element.attr('height', attr.width);
            element.attr('width', attr.height);
          }
        });

        element.on('load', function() { console.log('load'); });
      }
    };
  }]);
})();