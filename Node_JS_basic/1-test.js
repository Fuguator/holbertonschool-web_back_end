const { spawn } = require('child_process');

const child = spawn('node', ['1-stdin.js']);

child.stdout.on('data', (data) => {
  console.log(data.toString());
});

child.stdin.write('John\n');

child.on('exit', () => {
  console.log('Test completed.');
});
