let assert =  require('assert');
let args =    require('../app/args');

describe('args', function() {
  it('Should return an object.', function() {
    assert.equal('object', typeof args());
  });
});
