fn-object
====

# map and filter for object keys and values

## Map an Object's values

```js
var fno = require('fn-object');
var obj = {
  key: 'val'
};

fno(obj).vals
  .map(function (val) {
    return val+'1';
  })
  .val()
/*
  {
    key: 'val1'
  }
*/
```

## Filter an Object's values

```js
var fno = require('fn-object');
var obj = {
  foo: true,
  bar: true,
  qux: false
};

fno(obj).vals
  .filter(function (val) {
    return val;
  })
  .val()
/*
  {
    foo: true,
    bar: true
  }
*/
```

## Map an Object's keys

```js
var fno = require('fn-object');
var obj = {
  key: 'val'
};

fno(obj).keys
  .map(function (key) {
    return key+'1';
  })
  .val()
/*
  {
    key1: 'val'
  }
*/
```

## Filter an Object's keys

```js
var fno = require('fn-object');
var obj = {
  key : true,
  key2: true,
  foo : true
};

fno(obj).keys
  .filter(function (key) {
    return key.indexOf('key') === 0;
  })
  .val()
/*
  {
    key : true,
    key2: true
  }
*/
```
