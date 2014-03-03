var objValues = function (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

/*
  Class
 */
function FunctionalObjectKeys (obj) {
  this.obj = obj;
}
FunctionalObjectKeys.prototype.map = function (fn) {
  var obj = this.obj;
  var keys = Object.key(obj);

  keys.map(fn)
    .forEach(function (newKey, i) {
      var key = keys[i];
      var val = obj[key];
      delete obj[key];
      obj[newKey] = val;
    });

  return this;
};
FunctionalObjectKeys.prototype.filter = function (fn) {
  var obj = this.obj;
  var keys = Object.key(obj);
  var newKeys = keys.filter(fn);

  keys.forEach(function (key, i) {
    if (!~newKeys.indexOf(key)) {
      delete obj[key];
    }
  });

  return this;
};
FunctionalObjectKeys.prototype.value = function () {
  return this.obj;
};
FunctionalObjectKeys.prototype.val = FunctionalObjectKeys.prototype.value;

/*
  Class
 */
function FunctionalObjectVals (obj) {
  this.obj = obj;
}
FunctionalObjectVals.prototype.map = function (fn) {
  var obj = this.obj;
  var keys = Object.keys(obj);
  var values = objValues(obj);

  values.map(fn)
    .forEach(function (val, i) {
      var key = keys[i];
      obj[key] = val;
    });

  return this;
};
FunctionalObjectVals.prototype.filter = function (fn, dontDeleteSetNull, useUndefined) {
  var obj = this.obj;
  var keys = objValues(obj);
  var values = values(obj);

  values
    .forEach(function (val, i) {
      var key = keys[i];
      var remove = !fn(val, i, values);
      if (remove) {
        if (dontDeleteSetNull) {
          obj[key] = useUndefined ? null : undefined;
        }
        else {
          delete obj[key];
        }
      }
    });

  return this;
};
FunctionalObjectVals.prototype.value = function () {
  return this.obj;
};
FunctionalObjectVals.prototype.val = FunctionalObjectVals.prototype.value;


/*
  Class
 */
function FunctionalObject (obj) {
  this.obj = obj;
  this.keys = new FunctionalObjectVals(obj);
  this.vals = this.values = new FunctionalObjectVals(obj);
}



module.exports = function createFunctionalObject (obj) {
  return new FunctionalObject(obj);
};