#! /usr/bin/env node
"use strict";

var chalk = require("chalk");

var program = require("commander");

var figlet = require("figlet");

program.command("create <project-name>") // 增加创建指令
.description("create a new project") // 添加描述信息
.option("-f, --force", "overwrite target directory if it exists") // 强制覆盖
.action(function (projectName, cmd) {
  // 处理用户输入create 指令附加的参数
  require("../lib/create")(projectName, cmd);
});
program.command("config [value]").description("inspect and modify the config").option("-g, --get <key>", "get value by key").option("-s, --set <key> <value>", "set option[key] is value").option("-d, --delete <key>", "delete option by key").action(function (value, keys) {
  console.log(value, keys);
});
program.on("--help", function () {
  console.log("\r\n" + figlet.textSync("ys-cli", {
    font: "3D-ASCII",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true
  })); // 前后两个空行调整格式，更舒适

  console.log();
  console.log("Run ".concat(chalk.cyan("ys-cli <command> --help"), " for detailed usage of given command."));
  console.log();
});
program.name("ys-cli").usage("<command> [option]").version("ys-cli ".concat(require("../package.json").version)); // 解析用户执行时输入的参数
// process.argv 是 nodejs 提供的属性
// npm run server --port 3000
// 后面的 --port 3000 就是用户输入的参数

program.parse(process.argv);