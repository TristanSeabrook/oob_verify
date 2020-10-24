module.exports = (config) => {
  let getXlsxContents = require('../app/get_xlsx_contents');
  let parseXlsx =       require('../app/parse_xlsx');
  let ping =            require('../app/ping');

  let filePath = config.modeParams;
  let xlsxContents = getXlsxContents(filePath);
  let standardizedHostsObjsArr = parseXlsx(config, xlsxContents);

  config.hostObjsArr = standardizedHostsObjsArr;
  ping(config);
};
