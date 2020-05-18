//import the ip module for IP address utilities
let ip = require('ip');

//regex string to match an octet in an IP address string
let oct = '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

//if the user provides only the last octet of the end IP address, return the
//full IP based on the start IP address
let getFullIP = (startIP, endIP) => {
  let firstThreeOctsRegex = new RegExp(`^${oct}.${oct}.${oct}.`);
  let lastOctRegex = new RegExp(`${oct}$`);
  if (ip.isV4Format(endIP)) {
    return endIP;
  }
  else {
    let firstThreeStartOcts = startIP.match(firstThreeOctsRegex)[0];
    let lastStartOct = startIP.match(lastOctRegex)[0];
    let lastEndOct = endIP.match(lastOctRegex)[0];
    if (parseInt(lastEndOct, 10) > parseInt(lastStartOct, 10)) {
      return `${firstThreeStartOcts}${lastEndOct}`;
    }
  }
};

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

module.exports = (config) => {
    let rangeString = config.modeParams;
  //regex to match a dotted decimal IP address in a string
    let ipRegex =     new RegExp(`${oct}.${oct}.${oct}.${oct}`, 'g');
  //regex to match everything after a hypen and before the end of the line
    let secondArgRegex =   new RegExp(`-.+$`);
  //get the start and end IP addresses in the range
    let ipAddrs =     rangeString.match(ipRegex);
    let secondArg =   rangeString.match(secondArgRegex)[0];
    let startIP =     ipAddrs[0];
    let endIP =       getFullIP(startIP, secondArg);

  //convert from dotted decimal to long notation
    let longStartIP = parseInt(ip.toLong(startIP),  10);
    let longEndIP =  parseInt(ip.toLong(endIP),    10);
    let longArr = getLongArr(longStartIP, longEndIP);

  //convert the array of long ip addresses to an array of dotted decimal
  //ip addresses
    let dotDecArr =   longArr.map((ipAddr) => ip.fromLong(ipAddr));

    return dotDecArr;
};
