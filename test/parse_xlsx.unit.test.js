let assert =    require('assert');
let parseXlsx = require('../app/parse_xlsx');

let testDir = './test/files';
  let testDirLength = 1;
let testFilename = '456789.xls';
  let testFilePath = `${testDir}/${testFilename}`;
  let testFileLength = 7;

console.log(parseXlsx(testFilePath));

describe('parseXlsx', function() {
  it('Should return an array of objects.', function() {
    assert.strictEqual(true, Array.isArray(parseXlsx(testFilePath)));
    assert.strictEqual('object', typeof parseXlsx(testFilePath)[0]);
  });
});
