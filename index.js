//import settings from the config file
let config = require('./config');

//import app modules
let args = require('./app/args')();

//set the script mode, push any parameters to the config object, and call the
//appropriate function(s)
((args) => {
  if (args.d) {
    config.mode = 'directory';
    config.modeParams = args.d;
  }
  if (args.f) {
    let pingHostsInFile = require('./app/ping_hosts_in_file');
    let getProjNum =      require('./app/get_proj_num');
    config.mode = 'filename';
    config.modeParams = args.f;
    config.projNum =    getProjNum(args.f, config);
    pingHostsInFile(config);
  }
  if (args.p) {
    config.projNum = args.p;
  }
  if (args.r) {
    config.mode =   'range';
    config.modeParams = args.r;
  }
})(args);
