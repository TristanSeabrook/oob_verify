let assert =  require('assert');
let parseIPRange =  require('../app/parse_ip_range');

let testRange = '100.100.129.202-100.100.129.232';
  let testRangeFirst =  testRange.split('-')[0];
  let testRangeLast =   testRange.split('-')[1];
  let testRangeLength = 31;

let testRange2 = '100.100.129.202-212';
  let testRange2First =  testRange.split('-')[0];
  let testRange2Last =   '100.100.129.212';
  let testRange2Length = 11;

  let rangeObj =  {mode: 'range',     modeParams: testRange};
  let rangeObj2 = {mode: 'range',     modeParams: testRange2};

describe('parseIPRange', function() {
  it('Should return an array', function() {
    assert.strictEqual(true, Array.isArray(parseIPRange(rangeObj)));
  });
  it('Should return the correct first value', function() {
    assert.strictEqual(testRangeFirst, parseIPRange(rangeObj)[0]);
    assert.strictEqual(testRange2First, parseIPRange(rangeObj2)[0]);
  });
  it('Should return the correct last value', function() {
    assert.strictEqual(testRangeLast, parseIPRange(rangeObj)[testRangeLength - 1]);
    assert.strictEqual(testRange2Last, parseIPRange(rangeObj2)[testRange2Length - 1]);
  });
  it('Should return an array of the correct length', function() {
    assert.strictEqual(testRangeLength, parseIPRange(rangeObj).length);
    assert.strictEqual(testRange2Length, parseIPRange(rangeObj2).length);
  });
});
