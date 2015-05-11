describe('Url validator', function() {

  beforeEach(function() {
    module('exposure');
  });

  var $scope;
  var form;

  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    var element = angular.element(
      '<form name="form" novalidate>' +
        '<input ng-model="url" type="url" name="url" validate-url>' +
      '</form>'
    );
    $scope.url = null;
    $compile(element)($scope);
    form = $scope.form;
  }));

  // urls are based on test cases from RFC1738, RFC3986,
  //                                   https://github.com/ogt/valid-url,
  //                                   https://mathiasbynens.be/demo/url-regex

  var schemes = [
    'http://',
    'https://'
  ];

  var valid_urls = [
    'localhost',
    'localhost/',
    'localhost/path',
    // 'localhost:1234/some/path',
    'foo.com/blah_blah',
    'foo.com/blah_blah/',
    'foo.com/blah_blah_(wikipedia)',
    'foo.com/blah_blah_(wikipedia)_(again)',
    'www.example.com/wpstyle/?p=364',
    'www.example.com/foo/?bar=baz&inga=42&quux',
    'userid:password@example.com:8080',
    'userid:password@example.com:8080/',
    'userid@example.com',
    'userid@example.com/',
    'userid@example.com:8080',
    'userid@example.com:8080/',
    'userid:password@example.com',
    'userid:password@example.com/',
    'foo.com/blah_(wikipedia)#cite-1',
    'foo.com/blah_(wikipedia)_blah#cite-1',
    'code.google.com/events/#&product=browser,',
    'j.mp',
    '1337.net',
    'a.b-c.de',
    'www.example.com',
    'www.example.com/',
    'www.example.com/path',
    'www.example.com/foo/bar/test.html',
    'www.example.com/?foo=bar',
    'www.example.com:8080/test.html',
    'example.w3.org/path%20with%20spaces.html',
    '192.168.0.1/',
    '192.168.0.1:1234/'
  ];

  var valid_filepaths = [
    "file:///etc/hosts",
    'file://vms.host.edu/disk$user/my/notes/note12345.txt'
  ];

  var invalid_urls = [
    // 'http://.',
    // 'http://..',
    // 'http://../',
    // 'http://?',
    // 'http://??',
    // 'http://??/',
    // 'http://#',
    // 'http://##',
    // 'http://##/',
    'http://foo.bar?q=Spaces should be encoded',
    // 'http://test',
    'http:// shouldfail.com',
    'http:// should fail',
    // 'http://.www.foo.bar/',
    // 'http://www.foo.bar./',
    // 'http://.www.foo.bar./',
    'http:www.example.com',
    'https:www.example.com',
    // 'http://example.w3.org/%illegal.html',
    // 'http://example.w3.org/%a',
    // 'http://example.w3.org/%a/foo',
    // 'http://example.w3.org/%at'
  ];

  it('accepts valid urls and filepaths', function() {
    for (var scheme in schemes)
      for (var i = 0; i < valid_urls.length; ++i) {
        form.url.$setViewValue(schemes[scheme] + valid_urls[i]);

        $scope.$digest();

        expect($scope.url).to.equal(schemes[scheme] + valid_urls[i]);
        expect(form.url.$valid).to.equal(true);
      }

    for (var j = 0; j < valid_filepaths.length; ++j) {
      form.url.$setViewValue(valid_filepaths[j]);

      $scope.$digest();

      expect($scope.url).to.equal(valid_filepaths[j]);
      expect(form.url.$valid).to.equal(true);
    }
  });

  it('does not accept invalid urls and filepaths', function() {
    for (var i = 0; i < invalid_urls.length; ++i) {
      form.url.$setViewValue(invalid_urls[i]);

      $scope.$digest();

      expect($scope.url).to.equal(undefined);
      expect(form.url.$valid).to.equal(false);
    }
  });
});