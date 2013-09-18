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

  describe('when a target object is not specified', function() {
    it('assumes the global context', function() {
      whenDefined('globalFoo', callback);
      expect(callback).not.toHaveBeenCalled();

      globalFoo = 'hello';
      expect(callback).toHaveBeenCalledWith('hello');
    });

    it('or, you know, whatever `this` currently points to', function() {
      var Person = function() {};

      Person.prototype.sayHello = function() {
        var self = this;
        whenDefined.call(this, 'name', function() {
          callback('Hi, my name is ' + self.name + '!');
        });
      };

      var dan = new Person();
      dan.sayHello();
      expect(callback).not.toHaveBeenCalled();

      dan.name = 'Dan';
      expect(callback).toHaveBeenCalledWith('Hi, my name is Dan!');
    });
  });
});
