/*jshint esversion: 8*/

let ip = require('ip');

module.exports = (rangeString) => {
  //regex to parse octets in an IP string
    let oct = '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';
    let ipRegex =     new RegExp(`${oct}.${oct}.${oct}.${oct}`, 'g');
  //an array of IP addresses in a string and its first two values
    let ipAddrs =     rangeString.match(ipRegex);
    let startIP =     ipAddrs[0];
    let endIP =       ipAddrs[1];
  //convert from dotted decimal to long notation
    let longStartIP = parseInt(ip.toLong(startIP),  10);
    let longEndIP =  parseInt(ip.toLong(endIP),    10);

  //given first and last address, generate an array of long notation
  //ip addresses
      let getLongArr = (nextIP, endIP, ipArr = []) => {
        let localIPArr = ipArr;
        if (nextIP < endIP) {
          localIPArr.push(nextIP);
          getLongArr(nextIP + 1, endIP, localIPArr);
        }
        if (nextIP === endIP) {
          localIPArr.push(endIP);
        }
        return localIPArr;
      };

    let longArr = getLongArr(longStartIP, longEndIP);

  //convert the array of long ip addresses to an array of dotted decimal
  //ip addresses
    let dotDecArr =   longArr.map((ipAddr) => ip.fromLong(ipAddr));

    return dotDecArr;
}
