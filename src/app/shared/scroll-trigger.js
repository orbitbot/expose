angular.module('exposure').directive('scroll', ['$window', '$rootScope', function($window, $rootScope) {
  'use strict';
  return function(scope, element, attrs) {
    var trigger = $rootScope.$eval(attrs.trigger);
    var bool = attrs.scopeVar;

    if (trigger >= 0 && bool) {
      angular.element($window).bind('scroll', function() {
        if (this.pageYOffset >= trigger)
          scope[bool] = true;
        else
          scope[bool] = false;
        scope.$apply();
      });
    }
  };
}]);
