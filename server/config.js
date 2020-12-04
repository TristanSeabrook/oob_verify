module.exports = {
  dirPath:      './spreadsheets',
  projNum:     false,
  altProjStr:  'PRIME',
  mode:         'directory',
  modeParams:   './spreadsheets',
  hostObjsArr:       [],
  log: {
    path:      './logs',
    name:      '',
    ext:       'log'
  },
  regex: {
    ext:      /\.xls$|\.xlsx$|\.csv$/gi,
    proj:     /[1-9]\d{5}/,
  },
  expectedColumns: [
    {name:  'hostname', regex:  /host/i},
    {name:  'ip',       regex:  /ip/i},
    {name:  'netmask',  regex:  /sub|mask/i},
    {name:  'gateway',  regex:  /gate|gw/i}
  ]
};
