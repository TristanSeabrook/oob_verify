//import settings from the config file
let config = require('./config');

//import app modules
let args = require('./app/args')();

//set the script mode, push any parameters to the config object, and call the
//appropriate function(s)
((args) => {
  if (args.p) {
    config.projNum = args.p;
  }
  if (args.f) {
    let pingHostsInFile = require('./app/ping_hosts_in_file');
    let getProjNum =      require('./app/get_proj_num');
    let projNum = config.projNum;
    config.mode =       'filename';
    config.modeParams = args.f;
    config.projNum =    (projNum) ? projNum : getProjNum(args.f, config);
    pingHostsInFile(config);
  }
  if (args.r) {
    let parseIpRange =  require('./app/parse_ip_range');
    let ping =          require('./app/ping');
    config.mode =       'range';
    config.modeParams = args.r;
    let hostsIpArr = parseIpRange(config);
    config.hostObjsArr = hostsIpArr.map(ipAddr => ({ip: ipAddr}));
    ping(config);
  }
  if (args.d || config.mode === 'directory') {
    let pingAllHostsInDir = require('./app/ping_all_hosts_in_dir');
    config.mode =       'directory';
    config.modeParams = (args.d) ? args.d : config.modeParams;
    pingAllHostsInDir(config);
  }
})(args);
