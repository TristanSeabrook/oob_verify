//import settings from the config file
let config = require('./config');

//import modules
let args =        require('./app/args')();
let getProjNum =  require('./app/get_proj_num');
let parseXLSX =   require('./app/parse_xlsx');

//set the script mode and push any parameters to the config object
((args) => {
  if (args.d) { config.mode =     'directory';  config.modeParams = args.d;}
  if (args.f) {
    config.mode = 'filename';
    config.modeParams = args.f;
    config.projNum =    getProjNum(args.f, config);
  }
  if (args.p) { config.projNum = args.p;}
  if (args.r) { config.mode =     'range';      config.modeParams = args.r;}
//if no mode is specified, default to directory mode
  return 'directory';
})(args);
