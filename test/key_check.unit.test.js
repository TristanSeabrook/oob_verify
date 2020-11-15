let assert = require('assert');

let keys = require('../app/key_check');

let config = {
  expectedColumns: [
    {name:  'hostname', regex:  /host/i},
    {name:  'ip',       regex:  /ip/i},
    {name:  'netmask',  regex:  /sub|mask/i},
    {name:  'gateway',  regex:  /gate|gw/i}
  ]
};

let objWithAllKeys = {Host: '123', ip: '123', Subnet: '123', gateway: '123'};
let objWithoutAllKeys = {hn: '123', ip: '123', netmask: '123', gw: '123'};
let objsWithAllKeysArr = [
  {hostname: '123', ip: '123', netmask: '123', gateway: '123'},
  {hostname: '123', ip: '123', netmask: '123', gateway: '123'}
];
let objsWithoutAllKeysArr = [
  {hn: '123', ip: '123', netmask: '123', gateway: '123'},
  {hostname: '123', ip: '123', netmask: '123', gateway: '123'}
];

describe('keys.objHas', function() {
  it('Should return true if an object has all expected keys.', function() {
    assert.strictEqual(true, keys.objHas(config, objWithAllKeys));
  });
  it('Should return false if an object does not have all expected keys.', function() {
    assert.strictEqual(false, keys.objHas(config, objWithoutAllKeys));
  });
  it('Should return false in strict mode if keys do not match exactly.', function() {
    assert.strictEqual(false, keys.objHas(config, objWithAllKeys, true));
  });
});

describe('keys.firstObjHas', function() {
  it('Should return true if the first object has all expected keys', function() {
    assert.strictEqual(true, keys.firstObjHas(config, objsWithAllKeysArr));
  });
  it('Should return false if the first object does not have all expected keys', function() {
    assert.strictEqual(false, keys.firstObjHas(config, objsWithoutAllKeysArr));
  });
});

describe('keys.allObjsHave', function() {
  it('Should return true if all objects in an array have the expected keys', function() {
    assert.strictEqual(true, keys.allObjsHave(config, objsWithAllKeysArr));
  });
  it('Should return false if not all objects have the expected keys', function() {
    assert.strictEqual(false, keys.allObjsHave(config, objsWithoutAllKeysArr));
  });
});
