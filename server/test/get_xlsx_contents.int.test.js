let assert =  require('assert');
let path =    require('path');
let getXlxsContents = require('../src/get_xlsx_contents');

let testDir = path.join(__dirname, 'files');
let testFilename = '456789.xls';
let testFilePath = `${testDir}/${testFilename}`;

describe('getXlxsContents', function() {
  it('Should return an array of objects.', function() {
    assert.strictEqual(true, Array.isArray(getXlxsContents(testFilePath)));
    assert.strictEqual('object', typeof getXlxsContents(testFilePath));
  });
});
