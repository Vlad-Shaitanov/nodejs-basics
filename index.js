const http = require("http");//Работа с модулем сервера
const fs = require("fs");
const path = require('path');

//Создаем сервер
const server = http.createServer((request, response) => {
	// console.log(request.url);
	// response.end(`<h1>Hello NODE JS</h1>`);


	//? Загрузка страниц по URL. 1 СПОСОБ
	// if (request.url == "/") {
	// 	fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
	// 		if (err) {
	// 			throw err;
	// 		}

	// 		response.writeHead(200, {
	// 			"Content-Type": "text/html"
	// 		});

	// 		response.end(data);//Завершение запроса
	// 	});
	// } else {
	// 	if (request.url == "/contacts") {
	// 		fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
	// 			if (err) {
	// 				throw err;
	// 			}

	// 			response.writeHead(200, {
	// 				"Content-Type": "text/html"
	// 			});

	// 			response.end(data);//Завершение запроса
	// 		});
	// 	}
	// }


	//? Загрузка страниц по URL. 2 СПОСОБ
	//Путь к файлу относительно директории
	let filePath = path.join(__dirname, "public", request.url === "/" ? "index.html" : request.url);
	// console.log(filePath);

	//Расширение файла
	const ext = path.extname(filePath);

	//Тип контента по дефолту
	let contentType = "text/html";

	//Задаем тип контента на основе расширения
	switch (ext) {
		case ".css":
			contentType = "text/css";
			break;
		case ".js":
			contentType = "text/javascript";
			break;
		default:
			contentType = "text/html";
	}

	//Если расширения нет, по умолчанию добавим к пути ".html"
	if (!ext) {
		filePath += ".html";
	}

	//Читаем файл
	fs.readFile(filePath, (err, content) => {
		//Если возникает ошибка
		if (err) {
			//Читаем страницу с ошибкой
			fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
				/*В случае ошибки на этом этапе выбрасываем 500 статус-код
				и завершаем*/
				if (err) {
					response.writeHead(500);
					response.end("Error");
				} else {
					/*В противном случае, задаем 200 статус-код
					и отображаем страницу с инфо об ошибке*/
					response.writeHead(200, {
						"Content-Type": "text/html"
					});
					response.end(data);
				}
			});
		} else {
			//В противном случае отображаем нужную страницу
			response.writeHead(200, {
				"Content-Type": contentType
			});
			response.end(content);
		}
	});
});

/*Определяем порт. Либо равен окружению, либо заданному*/
const PORT = process.env.PORT || 3000;

//Отслживаем действия на порте
server.listen(PORT, () => {
	console.log(`Server has been started on port ${PORT}...`);
});