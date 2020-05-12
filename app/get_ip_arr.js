/*jshint esversion 8 */

module.exports = (config) => {
//if in directory mode, parse all csv, xls, and xlsx files in the specified
//directory and return an array of IP addresss
  if (config.mode === 'directory') {
    let dirPath =   config.modeParams;
    
  }
//if in file mode, parse the specified file and return an array of IP addresses
  if (config.mode === 'filename') {
    let parseXlsx = require('./parse_xlsx');
    let fileName =  config.modeParams;
    let hostsArr = parseXlsx(fileName);
    let ipArr = hostsArr.map((host) => host.IP);
    return ipArr;
//if in range mode, parse the user input and return an array of IP addresses
  }
  if (config.mode === 'range') {
    let parseIpRange = require('./parse_ip_range');
    let userRange = config.modeParams;
    return parseIpRange(userRange);
  }
}
