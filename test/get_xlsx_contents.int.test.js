let assert =    require('assert');
let getXlxsContents = require('../app/get_xlsx_contents');

let testDir = './test/files';
let testFilename = '456789.xls';
let testFilePath = `${testDir}/${testFilename}`;

describe('getXlxsContents', function() {
  it('Should return an array of objects.', function() {
    assert.strictEqual(true, Array.isArray(getXlxsContents(testFilePath)));
    assert.strictEqual('object', typeof getXlxsContents(testFilePath)[0]);
  });
});
