describe('Url validator', function() {

  beforeEach(function() {
    module('exposure');
  });

  var url_regexp;

  beforeEach(inject(function(validator) {
    url_regexp = validator.regexp;
  }));

  // urls are based on test cases from https://github.com/ogt/valid-url, RFC1738

  var schemes = [
    // '',
    'http://',
    'https://'
  ];

  var valid_urls = [
    'localhost',
    'localhost/',
    'localhost/path',
    // 'localhost:1234/some/path',
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
    'file://vms.host.edu/disk$user/my/notes/note12345.txt'
  ];

  var invalid_urls = [
    'http:www.example.com',
    'https:www.example.com',
    // 'http://example.w3.org/%illegal.html',
    // 'http://example.w3.org/%a',
    // 'http://example.w3.org/%a/foo',
    // 'http://example.w3.org/%at'
  ];

  it('accepts valid urls', function() {
    for (var scheme in schemes)
      for (var i = 0; i < valid_urls.length; ++i)
        expect(url_regexp.test(schemes[scheme] + valid_urls[i])).to.equal(true);

    for (var j = 0; j < valid_filepaths.length; ++j)
      expect(url_regexp.test(valid_filepaths[j])).to.equal(true);
  });

  it('does not accept invalid urls', function() {
    for (var i = 0; i < valid_urls.length; ++i)
      expect(url_regexp.test(invalid_urls[i])).to.equal(false);
  });
});