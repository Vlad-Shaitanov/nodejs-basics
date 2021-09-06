const path = require("path");//Модуль для работы с путями

console.log("Название файла: ", path.basename(__filename));//Получим имя текущего файла

console.log("Имя директории: ", path.dirname(__filename));//Получим путь к файлу

console.log("Расширение файла: ", path.extname(__filename));//Получим расширение файла

console.log("Parse: ", path.parse(__filename));//Получим объект с параметрами файла
/*Parse:  {
  root: 'D:\\',
  dir: 'D:\\Multimedia\\Front_repos\\nodejs_basics\\demo',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}
console.log("Parse: ", path.parse(__filename).name);//доступ к полю name в объекте
*/

console.log(path.join(__dirname, "server", "index.html"));//Формирование пути к нужной папке и файлу в директории