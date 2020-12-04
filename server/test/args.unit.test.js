let assert =  require('assert');
let args =    require('../src/args');

describe('args', function() {
  it('Should return an object.', function() {
    assert.strictEqual('object', typeof args());
  });
});
