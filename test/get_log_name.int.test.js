let assert =      require('assert');
let getLogName =  require('../app/get_log_name');
let getDateTime = require('../app/datetime');

let testConfig = {
  projNum: '123456',
  logExt: 'log',
  regex: {
    ext: /\.xls$|\.xlsx$|\.csv$/gi,
    proj: /[1-9]\d{5}/
  }
}

describe('getLogName', function() {
  it('Should return the correct log name', function() {
    assert.strictEqual(`123456_${getDateTime()}.log`, getLogName(testConfig));
  });
});
