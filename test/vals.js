var fno = require('../index');

describe('vals', function () {
  it('should map vals', function () {
    var obj = {
      key: 'val'
    };

    fno(obj).vals
      .map(function (val) {
        return val+'1';
      })
      .val()
      .should.eql({
        key: 'val1'
      });
  });
  it('should filter vals', function () {
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
      .should.eql({
        foo: true,
        bar: true
      });
  });
});