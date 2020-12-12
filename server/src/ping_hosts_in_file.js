module.exports = (config) => {
  let getXlsxContents = require('./get_xlsx_contents');
  let parseXlsx =       require('./parse_xlsx');
  let ping =            require('./ping');

  let filePath = config.modeParams;
  let xlsxContents = getXlsxContents(filePath);
  let standardizedHostsObjsArr = parseXlsx(config, xlsxContents);

  config.hostObjsArr = standardizedHostsObjsArr;
  ping(config);
};
