//import filesystem module for reading directory contents
let fs =              require('graceful-fs');

//import module dependencies
let getProjNum =      require('../app/get_proj_num');
let pingHostsInFile = require('../app/ping_hosts_in_file');

module.exports = (config) => {
  const directory = config.modeParams;
  const dirContentsArr = fs.readdirSync(directory);

  for (const filename of dirContentsArr) {
    let filePath = `${directory}/${filename}`;
    console.log(`Parsing file \'${filePath}\'.`);
    config.projNum = getProjNum(filename, config);
    config.mode = filename;
    config.modeParams = filePath;
    pingHostsInFile(config);
  }

};
