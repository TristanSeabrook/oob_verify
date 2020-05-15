module.exports = (config) => {
  let logPath = config.logPath;
  let logName = config.logName;
  let logExt =  config.logExt;
  return `${logPath}/${logName}.${logExt}`;
};
