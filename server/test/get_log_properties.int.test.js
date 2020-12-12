let assert =      require('assert');
let getLogName =  require('../src/get_log_properties').name;
let getDateTime = require('../src/datetime');

let testConfigWithProjNum = {
  projNum: '123456',
  log: {
    path: './logs',
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
    path: './logs',
    ext:'log'
  },
  regex: {
    ext: /\.xls$|\.xlsx$|\.csv$/gi,
    proj: /[1-9]\d{5}/
  }
};

describe('getLogName', function() {
  it('Should return the correct log name', function() {
    assert.strictEqual(`123456_${getDateTime()}`, getLogName(testConfigWithProjNum));
  });
  it('Should include a default string if config contains no project number', function() {
    assert.strictEqual(`PROJECT_${getDateTime()}`, getLogName(testConfigWithoutProjNum));
  });
});
