require('../shmomise.js');

describe('whenDefined', function() {
  var callback;

  beforeEach(function() {
    callback = jasmine.createSpy();
  });

  it('calls the callback right away when the variable is already defined', function() {
    var obj = { foo: 'foo' };
    whenDefined(obj, 'foo', callback);
    expect(callback).toHaveBeenCalledWith('foo');
  });

  it('otherwise, calls the callback once the variable is set', function() {
    var obj = {};
    whenDefined(obj, 'bar', callback);
    expect(callback).not.toHaveBeenCalled();

    obj.bar = 'bar';
    expect(callback).toHaveBeenCalledWith('bar');
  });
});
