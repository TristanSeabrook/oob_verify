module.exports = {
  dirPath:      './spreadsheets',
  projNum:     '',
  altProjStr:  'PRIME',
  mode:         'directory',
  modeParams:   './spreadsheets',
  hostArr:       [],
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
