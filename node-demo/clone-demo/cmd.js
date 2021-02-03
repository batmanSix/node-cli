const cmd = require('./clone')
console.log(cmd)
cmd.get('git clone https://github.com/batmanSix/node-cli.git   ..\\..\\dist\\demo')
.then((result) => {
  console.log(JSON.stringify(result));
  // 执行安装依赖
  cmd.install('cnpm install')
});
