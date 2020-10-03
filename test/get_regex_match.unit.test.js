let assert = require('assert');

let getRegexMatchInArr = require('../app/get_regex_match');

let config;

config.expectedColumns = [
    {name:  'hostname', regex:  /host/i,},
    {name:  'ip',       regex:  /ip/i,},
    {name:  'netmask',  regex:  /sub|mask/i,},
    {name:  'gateway',  regex:  /gate|gw/i}
  ];

let columnNamesArr = [ 'Hostname', 'IP Address', 'Subnet Mask', 'Gateway' ];

let expectedColumns = [...config.expectedColumns].map(
  (column) => column.getRegexMatchInArr = getRegexMatchInArr
);

let getNetmaskMatch = config.expectedColumns.netmask.getRegexMatchInArr(columnNamesArr);

describe('returnRegexMatchIfFound', function() {
  it('Returns "netmask" when fed array containing the string "Subnet Mask".', function() {
    assert.strictEqual('netmask', getNetmaskMatch(columnNames));
  });
});
