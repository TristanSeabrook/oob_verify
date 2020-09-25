module.exports = (config) => {
  let logPath = config.log.path;
  let logName = config.log.name;
  let logExt =  config.log.ext;
  return `${logPath}/${logName}.${logExt}`;
};
