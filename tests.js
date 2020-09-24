//import settings from the config file
let config = require('./config');

//import node module dependencies
let fs =      require('graceful-fs');
let yargs =   require('yargs');
let assert =  require('assert');

//import modules
let datetime =      require('./app/datetime');
let getIPArr =      require('./app/get_ip_arr');
let getLogName =    require('./app/get_log_name');
let getProjNum =    require('./app/get_proj_num');
let parseDir =      require('./app/parse_dir');
let parseIPRange =  require('./app/parse_ip_range');
let parseXlsx =     require('./app/parse_xlsx');
let ping =          require('./app/ping');

let testDir = './test';
  let testDirLength = 1;
let testFilename = '456789.xls';
  let testFile = `${testDir}/${testFilename}`;
  let testFileLength = 7;
let testRange = '100.100.129.202-100.100.129.232';
  let testRangeFirst =  testRange.split('-')[0];
  let testRangeLast =   testRange.split('-')[1];
  let testRangeLength = 31;

let testRange2 = '100.100.129.202-212';
  let testRange2First =  testRange.split('-')[0];
  let testRange2Last =   '100.100.129.212';
  let testRange2Length = 11;

let logNameRegex = /\d{6}_\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}.\w+$/g;
let projNum = getProjNum(testFilename, {projRegex: /[1-9]\d{5}/});
let getLogNameObj = {
  projNum:  getProjNum(testFilename, {projRegex: /[1-9]\d{5}/}),
  logExt:   '.log'
};

let dirObj =    {
  mode: 'directory',
  modeParams: testDir,
  extRegex: /\.xls$|\.xlsx$|\.csv$/gi,
  projRegex: /[1-9]\d{5}/,
};
let fileObj =   {mode: 'filename',  modeParams: testFile};
let projNumObj = {projRegex: /[1-9]\d{5}/, altProjStr: 'PRIME'};
let rangeObj =  {mode: 'range',     modeParams: testRange};
let range2Obj = {mode: 'range',     modeParams: testRange2};
let sheetObj = parseXlsx(testFile);

//Tests
describe('parseXlsx', function() {
  it('Should return an object', function() {
      assert.equal('object', (typeof sheetObj));
  });
});

describe('getProjNum', function() {
  it('Should return a string', function(){
    assert.equal('string', (typeof getProjNum(testFile, projNumObj)));
  });
  it('Should return the six digit number in a string', function() {
    assert.equal('697420', getProjNum('PRIME_00697420+23.xlsx', projNumObj));
  });
  it('Should return "PRIME" if no match is made', function() {
    assert.equal('PRIME', getProjNum('Filename without PRIME num', projNumObj));
  });
});

describe('parseIPRange', function() {
  it('Should return an array', function() {
    assert.equal(true, Array.isArray(parseIPRange(rangeObj)));
  });
  it('Should return the correct first value', function() {
    assert.equal(testRangeFirst, parseIPRange(rangeObj)[0]);
    assert.equal(testRange2First, parseIPRange(range2Obj)[0]);
  });
  it('Should return the correct last value', function() {
    assert.equal(testRangeLast, parseIPRange(rangeObj)[testRangeLength - 1]);
    assert.equal(testRange2Last, parseIPRange(range2Obj)[testRange2Length - 1]);
  });
  it('Should return an array of the correct length', function() {
    assert.equal(testRangeLength, parseIPRange(rangeObj).length);
    assert.equal(testRange2Length, parseIPRange(range2Obj).length);
  });
});

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

describe('parseDir', function() {
  it('Should return an array containing objects', function() {
    assert.equal('object', typeof(parseDir(dirObj)[0]));
  });
});

describe('getLogName', function() {
  it('Should return a string in YYYY-MM-DD_HH_MM_SS.ext format', function() {
    assert(getLogName(getLogNameObj).match(logNameRegex) != false);
  });
});
