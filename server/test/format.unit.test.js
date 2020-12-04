let assert =  require('assert');
let format =  require('../src/format');

let liveHost = {
  host: '192.168.1.101',
  alive: true,
  output: 'PING 192.168.1.101 (192.168.1.101) 56(84) bytes of data.\n64 bytes from 192.168.1.101: icmp_seq=1 ttl=64 time=117 ms\n\n--- 192.168.1.101 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 117.952/117.952/117.952/0.000 ms\n'
};

let deadHost = {
  host: '192.168.1.120',
  alive: false,
  output: 'PING 192.168.1.120 (192.168.1.120) 56(84) bytes of data.\n\n--- 192.168.1.120 ping statistics ---\n1 packets transmitted, 0 received, 100% packet loss, time 0ms\n'
};

describe('format', function() {
  it('Should return a string', function() {
    assert.strictEqual('string', typeof format.pingResult(liveHost));
    assert.strictEqual('string', typeof format.pingResult(deadHost));
  });

  it('Should return a string containing \'is alive\' for a live host', function() {
    assert.strictEqual('is alive', format.pingResult(liveHost).match('is alive')[0]);
  });

  it('Should return a string containing \'is not alive\' for a dead host', function() {
    assert.strictEqual('is not alive', format.pingResult(deadHost).match('is not alive')[0]);
  });
});
