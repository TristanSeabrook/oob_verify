let ping = require('ping');

module.exports = async (config) => {
  let hostArr = config.hostArr;
  for(let host of hosts){
      let res = await ping.promise.probe(host);
      console.log(res);
  }
};
