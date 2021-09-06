const EventEmitter = require("events");//Позволяет диспатчить события

// const emitter = new EventEmitter();

// emitter.on("anything", (data) => {//Добавим прослушку событий
// 	console.log("ON: anything", data);
// });
// emitter.emit("anything", { a: 1 });//Обработка события
// emitter.emit("anything", { b: 2 });

// setTimeout(() => {
// 	emitter.emit("anything", { c: 3 });
// }, 1500);


//? Мы можем наследоваться от класса для создания своего функционала
class Dispatcher extends EventEmitter {
	subscribe(eventName, callback) {//Подписываемся на событие
		console.log("[Subscribe...]");
		this.on(eventName, callback);
	}

	dispatch(eventName, data) {//Обрабатываем событие
		console.log("[Dispatching...]");
		this.emit(eventName, data);
	}
}

const dis = new Dispatcher();
dis.subscribe("aa", (data) => {
	console.log("ON: aa ", data);
});
dis.dispatch("aa", { aa: 22 });