let assert =      require('assert');
let getLogName =  require('../app/get_log_name');
let getDateTime = require('../app/datetime');

let testConfigWithProjNum = {
  projNum: '123456',
  log: {
    ext:'log'
  },
  regex: {
    ext: /\.xls$|\.xlsx$|\.csv$/gi,
    proj: /[1-9]\d{5}/
  }
};

let testConfigWithoutProjNum = {
  projNum: false,
  altProjStr: 'PROJECT',
  log: {
    ext:'log'
  },
  regex: {
    ext: /\.xls$|\.xlsx$|\.csv$/gi,
    proj: /[1-9]\d{5}/
  }
};

describe('getLogName', function() {
  it('Should return the correct log name', function() {
    assert.strictEqual(`123456_${getDateTime()}.log`, getLogName(testConfigWithProjNum));
  });
  it('Should include a default string if config contains no project number', function() {
    assert.strictEqual(`PROJECT_${getDateTime()}.log`, getLogName(testConfigWithoutProjNum));
  });
});
