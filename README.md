Promise, shmomise
=================

Promises are overrated! Too much wiring! Let's simplify:

```javascript
var scope = { foo: 'foo' };

whenDefined(scope, 'foo', console.log); // outputs 'foo'
whenDefined(scope, 'bar', console.log);

scope.bar = 'bar'; // outputs 'bar'
```

You can also use this for global variables (though I wouldn't recommend it):

```javascript
foo = 'foo';

whenDefined('foo', console.log); // outputs 'foo'
whenDefined('bar', console.log);

bar = 'bar'; // outputs 'bar'
```
