let getDatetime = require('./datetime');

let getLogLocation = (config) => {
  let logPath = config.log.path;
  let logName = config.log.name;
  let logExt =  config.log.ext;

  return `${logPath}/${logName}.${logExt}`;
};

let getLogName = (config) => {
  let projNum = config.projNum;
  let projStr = projNum ? projNum : config.altProjStr;
  let datetime = getDatetime();

  return `${projStr}_${datetime}`;
};

module.exports = {
  location: getLogLocation,
  name:     getLogName,
}
