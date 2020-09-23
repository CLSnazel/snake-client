const { connect } = require('./client');

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  //stdin.on('data', data => handleUserInput(data));
  stdin.on('data', handleUserInput);
  //stdin.on('data', handleUserInput(data)); // wrong
  // () => {}
  return stdin;
};



setupInput();
console.log('connecting....');
connect();