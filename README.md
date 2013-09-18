Promise, shmomise
=================

Promises are overrated! Too much wiring! Let's simplify:

```javascript
var foo = 'foo';

whenDefined('foo', console.log); // outputs 'foo'
whenDefined('bar', console.log);

var bar = 'bar'; // outputs 'bar'
```

Is this possible? Maybe. Let's find out.
