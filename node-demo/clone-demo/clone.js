// 使用node 下载代码到本地制定文件夹


const { exec } = require('child_process')
const path = require('path')
const parentDir = path.resolve(process.cwd(), '../..');





// todo 安装依赖

function install(command) {
  console.log("安装依赖：\n\t" + command)
  return new Promise((resolve, reject) => {
    console.log("执行命令：\n\t" + command);
    exec(
      command, { cwd: parentDir },
      (err, stdout, stderr) => {
        if (!err) {
          resolve({
            err, stdout, stderr
          });
        } else {
          reject({
            err, stdout, stderr
          });
        }
      }
    );
  });
}

function runCommand(command) {
  console.log("执行命令：\n\t" + command);
  exec(
    command
  );
  return Promise.resolve(true);
}

function getString(command) {
  return new Promise((resolve, reject) => {
    console.log("执行命令：\n\t" + command);
    exec(
      command, { cwd: parentDir },
      (err, stdout, stderr) => {
        if (!err) {
          resolve({
            err, stdout, stderr
          });
        } else {
          reject({
            err, stdout, stderr
          });
        }
      }
    );
  });
}


module.exports = {
  get: getString,
  run: runCommand,
  install: install
}

