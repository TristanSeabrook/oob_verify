let assert =        require('assert');
let getLogLocation = require('../app/get_log_location');

let testConfig = {
  logPath: './logs',
  logName: '123456_2020-12-12_12-12-12',
  logExt: 'log'
}

let expectedString = './logs/123456_2020-12-12_12-12-12.log'

console.log(getLogLocation(testConfig));

describe('getLogLocation', function() {
  it('Should return the correct log path.', function() {
    assert.equal(expectedString, getLogLocation(testConfig));
  })
})
