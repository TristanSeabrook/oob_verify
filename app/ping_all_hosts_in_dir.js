//import filesystem module for reading directory contents
let fs =              require('graceful-fs');

//import module dependencies
let getProjNum =      require('../app/get_proj_num');
let pingHostsInFile = require('../app/ping_hosts_in_file');

module.exports = (config) => {
  const directory = config.modeParams;
//create array of filenames in the specified directory, exluding hidden files
  const dirContentsArr = fs.readdirSync(directory)
    .filter(filename => ! filename.match(/^\./g));

  if (! dirContentsArr[0]) {
    console.log(`No parsable files found in ${config.modeParams}. Exiting.`);
  }
  else {
    for (const filename of dirContentsArr) {
      let filePath = `${directory}/${filename}`;
      console.log(`Parsing file \'${filePath}\'.`);
      config.projNum = getProjNum(filename, config);
      config.mode = filename;
      config.modeParams = filePath;
      pingHostsInFile(config);
    }
  }
};
