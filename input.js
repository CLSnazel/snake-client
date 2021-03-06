let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 'j') {
    connection.write('Say: LHL FTW')
  } else if (key === 'k') {
    connection.write('Say: Cool');
  } else if (key === 'l') {
    connection.write('Say: Beans');
  }
};

const setupInput = function(conn) {
  connection = conn;
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

module.exports = {setupInput};