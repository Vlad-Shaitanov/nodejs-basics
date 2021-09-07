const chalk = require("chalk");//Для форматирования сообщений в терминале
const text = require("./data");//Подключение кастомного модуля

//У нас есть доступ к системным переменным(exports, require, __dirname, __filename)
console.log(chalk.blue("index " + text));// Получим подключенный модуль(синим цветом в терминале)
console.log(chalk.red(__dirname));// Получим текущую директорию(красным цветом в терминале)

