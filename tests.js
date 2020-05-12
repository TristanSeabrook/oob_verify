/*jshint esversion 8 */

//import settings from the config file
let config = require('./config');

//import node module dependencies
let fs =      require('graceful-fs');
let ping =    require('ping');
let yargs =   require('yargs');
let assert =  require('assert');

//import modules
let parseXLSX =     require('./app/parse-xlsx');
let getPrimeNum =   require('./app/get_prime_num');
let getIPArr =      require('./app/get_ip_arr');
let parseIPRange =  require('./app/parse_ip_range');

let testDir = './tests/';
  let testDirLength = 58;
let testFilename = '518792+IPs.xlsx';
let testFile = `${testDir}/${testFilename}`;
  let testFileLength = 28;
let testRange = '100.100.129.202-100.100.129.232';
  let testRangeFirst =  testRange.split('-')[0];
  let testRangeLast =   testRange.split('-')[1];
  let testRangeLength = 31;


let sheetObject = parseXLSX(testFile);


describe('parseXLSX', function() {
  it('Should return an object', function() {
      assert.equal('object', (typeof sheetObject));
  });
});

describe('getPrimeNum', function() {
  it('Should return a string', function(){
    assert.equal('string', (typeof getPrimeNum(testFile, config)))
  });
  it('Should return the six digit number in a string', function() {
    assert.equal('697420', getPrimeNum('PRIME_00697420+23.xlsx', config))
  });
  it('Should return "PRIME" if no match is made', function() {
    assert.equal('PRIME', getPrimeNum('Filename without PRIME num', config))
  });
});

describe('parseIPRange', function() {
  it('Should return an array', function() {
    assert.equal(true, Array.isArray(parseIPRange(testRange)))
  });
  it('Should return the correct first value', function() {
    assert.equal(testRangeFirst, parseIPRange(testRange)[0])
  });
  it('Should return the correct last value', function() {
    assert.equal(testRangeLast, parseIPRange(testRange)[testRangeLength - 1])
  });
  it('Should return an array of the correct length', function() {
    assert.equal(testRangeLength, parseIPRange(testRange).length)
  });
});

describe('getIPArr', function() {
  let dirObj =    {mode: 'directory', modeParams:  testDir};
  let fileObj =   {mode: 'filename',  modeParams: testFile};
  let rangeObj =  {mode: 'range',     modeParams: testRange};

  it('Should return an array', function () {
    assert.equal(true, Array.isArray(getIPArr(rangeObj)))
  });

  it('Should return an array of the correct length in range mode', function() {
    assert.equal(testRangeLength, getIPArr(rangeObj).length)
  });
  it('Should return an array of the correct length in file mode', function() {
    assert.equal(testFileLength, getIPArr(rangeObj).length)
  });
  it('Should return an array of the correct length in directory mode', function() {
    assert.equal(testDirLength, getIPArr(rangeObj).length)
  });
});
