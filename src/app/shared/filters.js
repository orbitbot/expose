angular.module('exposure').service('moment', [function() {
  return moment;
}]);

angular.module('exposure').filter('fromNow', ['moment', function(moment) {
  return function(dateString) {
    return moment(dateString).fromNow();
  };
}]);