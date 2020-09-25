let assert =      require('assert');
let getProjNum =  require('../app/get_proj_num');

let filenameStr = 'PROJ 00123456_UU2828+IPs.xlsx';
let badFilenameStr = 'NO_PROJ321JJjfj_+.xls';

testConfig = {
  regex: {
    proj: /[1-9]\d{5}/,
  },
  altProjStr:  'DEFAULT',
};

describe('getProjNum', function() {
  it('Should return the correct project number', function() {
    assert.strictEqual('123456', getProjNum(filenameStr, testConfig));
  })
  it('Should return a default if given a nonstandard filename', function() {
    assert.strictEqual('DEFAULT', getProjNum(badFilenameStr, testConfig));
  })
})
