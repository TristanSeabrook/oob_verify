let assert =    require('assert');
let getIPArr =  require('../app/get_ip_arr');

let testDir = './test/files';

let testRange = '100.100.129.202-100.100.129.232';
  let testRangeFirst =  testRange.split('-')[0];
  let testRangeLast =   testRange.split('-')[1];
  let testRangeLength = 31;

let testFilename = '456789.xls';
  let testFile = `${testDir}/${testFilename}`;
  let testFileLength = 7;

let testDirLength = 1;
let dirObj =    {
  mode: 'directory',
  modeParams: testDir,
  extRegex: /\.xls$|\.xlsx$|\.csv$/gi,
  projRegex: /[1-9]\d{5}/,
};

let rangeObj =  {mode: 'range',     modeParams: testRange};
let fileObj =   {mode: 'filename',  modeParams: testFile};

console.log(testFile);
console.log(testFileLength, getIPArr(fileObj).length);

describe('getIPArr', function() {
  it('Should return an array', function () {
    assert.equal(true, Array.isArray(getIPArr(rangeObj)));
  });
  it('Should return an array of the correct length in range mode', function() {
    assert.equal(testRangeLength, getIPArr(rangeObj).length);
  });
  it('Should return an array of the correct length in file mode', function() {
    assert.equal(testFileLength, getIPArr(fileObj).length);
  });
  it('Should return an array of the correct length in directory mode', function() {
    assert.equal(testDirLength, getIPArr(dirObj).length);
  });
});
