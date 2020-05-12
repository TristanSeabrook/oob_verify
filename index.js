/*jshint esversion 8 */

//import settings from the config file
let config = require('./config');

//import modules
let parseXLSX =   require('./app/parse-xlsx');
let args =        require('./app/args')();
let getPingList = require('./app/get_ping_list');

//set the script mode and push parameters to the config object
((args) => {
  if (args.d) { config.mode =     'directory',  config.modeParams = args.d};
  if (args.f) { config.mode =     'filename',   config.modeParams = args.f};
  if (args.p) { config.primeNum = args.p}
  if (args.r) { config.mode =     'range',      config.modeParams = args.r};
//if no mode is specified, default to directory mode
  return 'directory';
})(args);

let pingList = getPingList(config);
