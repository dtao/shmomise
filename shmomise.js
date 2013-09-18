(function(context) {

  var pop = Array.prototype.pop;

  context.whenDefined = function() {
    var callback = pop.call(arguments),
        varName  = pop.call(arguments),
        target   = pop.call(arguments) || this;

    console.log('Target is ' + target);
    var storedValue = target[varName];
    if (typeof storedValue !== 'undefined') {
      callback(storedValue);
      return;
    }

    Object.defineProperty(target, varName, {
      enumerable: true,

      get: function() {
        return storedValue;
      },

      set: function(value) {
        storedValue = value;
        callback(storedValue);
      }
    });
  };

}(typeof global !== 'undefined' ? global : this));
