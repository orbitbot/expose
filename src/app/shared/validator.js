(function() {
  'use strict';

  angular.module('exposure').directive('validateUrl', [function() {
    var regexp = /^(file|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

    return {
      require  : 'ngModel',
      restrict : '',
      link: function(scope, elem, attrs, ctrl) {
        if (ctrl && ctrl.$validators.url) {
          ctrl.$validators.url = function(modelValue) {
            return ctrl.$isEmpty(modelValue) || regexp.test(modelValue);
          };
        }
      }
    };
  }]);
})();