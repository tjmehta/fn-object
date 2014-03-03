var fno = require('../index');

describe('keys', function () {
  it('should map keys', function () {
    var obj = {
      key: 'val'
    };

    fno(obj).keys
      .map(function (key) {
        return key+'1';
      })
      .val()
      .should.eql({
        key1: 'val'
      });
  });
  it('should filter keys', function () {
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
      .should.eql({
        key : true,
        key2: true
      });
  });
});