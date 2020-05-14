let parseDir = require('./app/parse_dir');
let fileObj =  {
  mode: 'directory',
  modeParams: './tests',
  extRegex: /\.xls$|\.xlsx$|\.csv$/gi,
  primeRegex: /[1-9]\d{5}/,
};

console.log(parseDir(fileObj));
// structure for dir mode
// [
//   {
//     prime: 123456,
//     ipArr: [
//       192.168.1.100,
//       192.168.1.101
//     ]
//   }
//   {
//     prime: 234567,
//     ipArr: [
//       192.168.1.102,
//       192.168.1.103
//     ]
//   }
// ]
