let assert =  require('assert');
let ip =      require('ip');

let parseXlsx = require('../app/parse_xlsx');
let keys = require('../app/key_check');

let truthReducer = (acc, curr) => acc && curr;
let testDir = './test/files';
let testFilename = '456789.xls';
let testFile = `${testDir}/${testFilename}`;

let config = {
  expectedColumns: [
    {name:  'hostname', regex:  /host/i},
    {name:  'ip',       regex:  /ip/i},
    {name:  'netmask',  regex:  /sub|mask/i},
    {name:  'gateway',  regex:  /gate|gw/i}
  ]
};

let xlsxContentsObjsArr = [
  { Host: 'router', IP: '192.168.1.1', Mask: '255.255.255.0', GW: '192.168.1.1', FQDN: 'router.test.net' },
  { Host: 'server_01', IP: '192.168.1.100', FQDN: 0 },
  { Host: 'desktop_01', IP: '192.168.1.101', FQDN: 0 },
  { Host: 'notebook_01', IP: '192.168.1.102', FQDN: 0 },
  { Host: 'notebook_02', IP: '192.168.1.103', FQDN: 0 },
  { Host: 'Printer_01', IP: '192.168.1.110', FQDN: 0 },
  { Host: 'Phone_01', IP: '192.168.1.139', FQDN: 0 } ];

let badXlsxContentsObjsArr = [
  { network_name: 'router', IP: '192.168.1.1', Mask: '255.255.255.0', GW: '192.168.1.1', FQDN: 'router.test.net' },
  { network_name: 'server_01', IP: '192.168.1.100', FQDN: 0 },
  { network_name: 'desktop_01', IP: '192.168.1.101', FQDN: 0 },
  { network_name: 'notebook_01', IP: '192.168.1.102', FQDN: 0 },
  { network_name: 'notebook_02', IP: '192.168.1.103', FQDN: 0 },
  { network_name: 'Printer_01', IP: '192.168.1.110', FQDN: 0 },
  { network_name: 'Phone_01', IP: '192.168.1.139', FQDN: 0 } ];

let expectedKeys = config.expectedColumns.map((column) => column.name);
let errorStr = 'Error: unable to find expected column headings in source spreadsheet.';

let parsedXlsx = parseXlsx(config, xlsxContentsObjsArr);
let parsedBadXlsx = parseXlsx(config, badXlsxContentsObjsArr);

describe('parseXlsx', function() {
  it('Each object should have the expected keys', function() {
    assert.strictEqual(true, keys.allObjsHave(config, parsedXlsx, true));
  });
  it('The value of the "ip" key should be in IPv4 format', function() {
    assert.strictEqual(true, allIpsAreValid(parsedXlsx));
  });
  it('Should return an error if unable to parse the XLSX object', function() {
    assert.strictEqual(errorStr, parsedBadXlsx);
  });
});
