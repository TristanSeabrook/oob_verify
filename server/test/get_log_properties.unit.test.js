let assert =        require('assert');
let getLogLocation = require('../src/get_log_properties').location;

let testConfig = {
  log: {
    path: './logs',
    name: '123456_2020-12-12_12-12-12',
    ext: 'log'
  }
};

let expectedString = './logs/123456_2020-12-12_12-12-12.log';

describe('getLogLocation', function() {
  it('Should return the correct log path.', function() {
    assert.strictEqual(expectedString, getLogLocation(testConfig));
  });
});
