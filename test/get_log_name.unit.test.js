let assert =      require('assert');
let getLogName =  require('../app/get_log_name');
let getDateTime = require('../app/datetime');

let testConfig = {
  projNum: '123456',
  logExt: 'log'
}

describe('getLogName', function() {
  it('Should return the correct log name', function() {
    assert.equal(`123456_${getDateTime()}.log`, getLogName(testConfig));
  });
});
