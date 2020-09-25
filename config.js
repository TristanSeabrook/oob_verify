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
    ip:       /ip/i,
    subnet:   /sub|mask/i,
    gateway:  /gate|gw/i
  }
};
