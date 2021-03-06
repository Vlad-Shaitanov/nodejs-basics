const os = require("os"); //Работа с данными операционной системы

console.log("ОС: ", os.platform());//Текущая операционная система

console.log("Архитектура процессора: ", os.arch());//Архитектура процессора в ОС

console.log("Инфо по процессорам: ", os.cpus());//Информация по процессорам
/*Получим массив с объектами, где будет инфа о процессоре*/

console.log("Свободная память: ", os.freemem());//Свободная память

console.log("Всего памяти: ", os.totalmem());//Всего памяти

console.log("Домашняя директория: ", os.homedir());//Домашняя директория

console.log("Включен", os.uptime());//Сколько времени включен компьютер(в сек)