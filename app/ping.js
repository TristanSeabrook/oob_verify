//import the ping and pretty compact stringify module
let ping =            require('ping');
let stringify =       require('json-stringify-pretty-compact');
//import requried app modules
let datetime =        require('./datetime');
let getLogLocation =  require('./get_log_location');
let getLogName =      require('./get_log_name');
let writeLog =        require('./write_log');

module.exports = async (config) => {
//set the current datetime in the config object
  config.log.name = getLogName(config);
//get the log filename
  let logLocation = getLogLocation(config);
//get the array of host objects from the config object
  let hostObjsArr = config.hostObjsArr;
  let totalHosts = hostObjsArr.length;
//use map to produce a new array of ping promises
  let promiseArr = hostObjsArr.map(
    (host) => {
      return ping.promise.probe(host.ip)
        .then((pingResult) => pingResult);
    }
  );
//resolve all ping promises, log the results, and display a summary to the user
  Promise.all(promiseArr).then((resolvedValues) =>
    {
      writeLog(stringify(resolvedValues), config);
      //filter the results array for responsive hosts and return a count of them
      let hostsAlive = resolvedValues.filter((value) => value.alive).length;
      let logMessage =
        `${hostsAlive} of ${totalHosts} hosts alive.\nSee ${logLocation} for full details.`;
      console.log(logMessage);
    }
  );
};
