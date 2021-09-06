const fs = require("fs");//Модуль позволяет работать с файлами системы
const path = require("path");

//? Создание папка относительно текущей директории
fs.mkdir(path.join(__dirname, "test"), (err) => {
	if (err) {
		throw err;
	}

	console.log("Папка создана");
});

//? Создаем файл по указанному пути и записываем в него контент
const filePath = path.join(__dirname, "test", "text.txt");
fs.appendFile(filePath, "\nAnother content", err => {
	//Метод writeFile заменяет текущий контент новым
	//Если необходимо добавить контент к уже существующему, то используем метод appendFile
	if (err) {
		throw err;
	}
	console.log("Файл создан");
});

//? Чтение файлов
fs.readFile(filePath, "utf-8", (err, content) => {
	if (err) {
		throw err;
	}
	console.log("Content", content);
});