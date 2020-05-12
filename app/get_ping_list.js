/*jshint esversion 8 */

//return an array of IP addresses to ping based on config settings
module.exports = (config) => {

  switch(config.mode) {
// if in directory mode, parse all csv, xls, and xlsx files in a given direcotry
// for IP addresses
    case 'directory':
      return 'dir'
      break;
//if in filename mode, parse the specified file for IP addresses
    case 'filename':
      return 'file'
      break;
// if in range mode, expand the specified IP range into a list of IP addresses
    case 'range':
      let getIpRange = require('./get_ip_range');
      return getIpRange(config.modeParams);
      break;
    default:
      return 'Invalid parameter specified for config.mode';
  }
};
