let assert = require('assert');

let getRegexMatchInArr = require('../app/get_regex_match');

let config = {
  expectedColumns: [
    {name:  'hostname', regex:  /host/i,},
    {name:  'ip',       regex:  /ip/i,},
    {name:  'netmask',  regex:  /sub|mask/i,},
    {name:  'gateway',  regex:  /gate|gw/i}
  ]
};

let badColumn = {name: 'bubnet', regex: /bubnet/i};

let expectedColumns = config.expectedColumns;

let columnNamesArr = [ 'Hostname', 'IP Address', 'Subnet Mask', 'Gateway' ];

expectedColumns.map((column) => {
  column.sourceColumnName = getRegexMatchInArr(column, columnNamesArr);
});

describe('returnRegexMatchIfFound', function() {
  it('Returns "Subnet Mask" when passed the netmask object.', function() {
    let column = config.expectedColumns[2];
    assert.strictEqual('Subnet Mask', column.sourceColumnName);
  });
  it('Returns null if no regex match is made', function() {
    assert.strictEqual(null, getRegexMatchInArr(badColumn, columnNamesArr));
  });
});
