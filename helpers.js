// Helper file containing auxialiary functions

function parse_url(url) {  //This function extract asset contract address and token id from an opensea url
  pp = url.replace(/^.*0x/, "0x");
  var p1 = pp.replace(/\/.*/, "");
  var p2 = pp.replace(/.*\//, "");
  return [p1, p2];
  
};

module.exports.parse_url = parse_url;
