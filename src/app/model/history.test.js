describe('Url history service', function() {

  beforeEach(module('exposure'));
  beforeEach(module('exposure', function($provide) {
    // $provide.value('$log', console);
  }));

  var $rootScope;
  var $q;
  var db;
  var history;
  var sandbox;

  beforeEach(inject(function(_$rootScope_,_$q_, _history_, _database_) {
    $rootScope = _$rootScope_;
    $q         = _$q_;
    db         = _database_;
    history    = _history_;
    sandbox    = sinon.sandbox.create();
  }));

  afterEach(function() {
    sandbox.restore();
  });

  it('should be defined', function() {
    expect(history).not.to.equal(undefined);
  });


  it('adds loaded urls to history', function() {
    sandbox.stub(db, 'upsert', function() { return $q.when({}); });

    history.add({ url: 'http://example.com' });
    $rootScope.$digest();

    expect(db.upsert.calledWith('history')).to.equal(true);
  });

  it('clears all url history', function() {
    sandbox.stub(db, 'get', function() { return $q.when(); });
    sandbox.stub(db, 'remove');

    history.clear();
    $rootScope.$digest();

    expect(db.get.calledWith('history')).to.equal(true);
    expect(db.remove.called).to.equal(true);
  });

  it('retrieves a sorted url history', function(done) {
    var site1 = { url: 'http://example.com'     , timestamp: Date(2000,0) };
    var site2 = { url: 'http://www.example.com' , timestamp: Date(2005,0) };
    var site3 = { url: 'http://www.example3.com', timestamp: Date() };

    sandbox.stub(db, 'get', function() {
      return $q.when({
        'http://example.com'      : site1,
        'http://www.example.com'  : site2,
        'http://www.example3.com' : site3
      });
    });

    history.get().then(function(retrieved) {
      expect(db.get.calledWith('history')).to.equal(true);

      expect(retrieved.pop()).to.equal(site3);
      expect(retrieved.pop()).to.equal(site2);
      expect(retrieved.pop()).to.equal(site1);
      done();
    });

    $rootScope.$digest();
  });

  it('removes a website from history', function() {
    sandbox.stub(db, 'upsert', function() { return $q.when({}); });

    history.remove('http://example.com');
    $rootScope.$digest();

    expect(db.upsert.calledWith('history')).to.equal(true);
  });

  it('updates a website object', function() {
    sandbox.stub(db, 'upsert', function() { return $q.when({}); });

    history.update('http://example.com');
    $rootScope.$digest();

    expect(db.upsert.calledWith('history')).to.equal(true);
  });
});