
//format the output of hte ping command
let formatPingOutput = (output) => {
  let formattedOutput = output
    .replace(/^\s*\n/gm, '')
    .replace(/\n/g, '\n\t');
  return formattedOutput;
};

//format the ping results for saving to the log file.
let formatPingResult = (result) => {
  let host =    result.host;
  let alive =   result.alive;
  let output =  result.output;
  let isAlive = (alive) ? 'is alive' : 'is not alive';
  return `Result:\tHost ${host} ${isAlive}.\nOutput:\t${formatPingOutput(output)}\n`;
};

module.exports = {
  pingResult: formatPingResult
};
