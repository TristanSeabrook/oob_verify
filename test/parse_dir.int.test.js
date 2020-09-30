let assert =    require('assert');
let ip =        require('ip');
let parseDir =  require('../app/parse_dir');

let testDir = './test/files';
  let testDirLength = 1;

let dirObj =    {
  mode: 'directory',
  modeParams: testDir,
  regex: {
    ext: /\.xls$|\.xlsx$|\.csv$/gi,
    proj: /[1-9]\d{5}/
  }
};

let firstObj = parseDir(dirObj)[0];
let firstIP = firstObj.ipArr[0];

console.log(parseDir(dirObj));

describe('parseDir', function() {
  it('Should return an array containing objects', function() {
    assert.strictEqual('object', typeof(firstObj));
  });
  it('Each object should have projNum and ipArr keys', function() {
    assert.strictEqual(true, ('projNum' in firstObj));
    assert.strictEqual(true, ('ipArr' in firstObj));
  });
  it('The ipArr should contain valid IPs', function() {
    assert.strictEqual(true, ip.isV4Format(firstIP));
  });
});
