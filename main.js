// let userName = "Mark";
// console.log(userName);
// userName = "vaspurak";
// console.log(userName);
// const yearOfBirth = 1984;
// console.log(yearOfBirth);
// // ------------------------//

// {
//   let userName = "Bob";
//   console.log(userName);

//   var someNumber = 10;
//   console.log(someNumber);
// }
// console.log(someNumber);
// console.log(someNumber);
// var может меняться за пределами блока кода

// let name, age;
// name = "Yura";
// age = 28;
// console.log(name, age);
// console.log(age);

// const profession = "js developer";
// console.log(profession);

// typeof-определитель
// const someName = "44";
// console.log(typeof someName);

// BigInt-встроенный объект,которы позволяет создавать большие числа
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(43589737n + 484564358n);

//  =====3 - Операторы сравнения=====

// console.log(10 > 5);
// console.log(20 > 80);
// let result = 10 == 5;
// console.log(result);
// console.log("5" == 5); //true
// console.log("5" === 5); //false

//if else
// const time = 20;
// if (time < 12) {
//   console.log("dobroe utro");
// } else if (time >= 12 && time < 18) {
//   console.log("dobri den");
// } else {
//   console.log("dobroi vecher");
// }
// && -логическое И
// || - логическое ИЛИ
// ! - логическое НE

// =====4 Урок -Тернарный оператор=====
// if (10 < 12) {
//   console.log("Uslovie verno");
// } else {
//   console.log("Uslovie ne verno");
// }
// 10 < 12 ? console.log("uslovie verno") : console.log("uslovie ne verno");

// let greeting;
// let time = 10;
// if (time < 12) {
//   greeting = "dobroe utro";
// } else {
//   greeting = "dobri den";
// }
// console.log(greeting);

// let time = 20;
// let greeting = time < 12 ? "Dobroe utro" : "Dobrii den";
// console.log(greeting);

// =====5 Урок -Конкатенанция:сложение строк и шаблонные строки в длинну=====
// let greeting = "Privet Mark,";
// let howAreYou = " kak tvoi dela";
// let sayHi = greeting + howAreYou;
// console.log(sayHi);

// const userName = "Mark?";

// console.log(`${greeting}${howAreYou}${userName}`);

// 6 Урок - Функции DRY -don't repeat yourself

// function sayHi() {
//   console.log("privet,dorogoi drug");
// }
// sayHi();

// // ==========function declaration=========
// sayHi();
// function sayHi() {
//   console.log("privet");
//   // alert("privet");
// }

// // ============function expression============
// const sayHI = function () {
//   console.log("PRIVET");
//   // alert("PRIVET");
// };
// sayHI();

// console.log(name);
// let name = "bob";

// =====6.1 Параметры и аргументы для функции=====

// function sayHI(name) {
//   console.log(`privet, ${name}! kak tvoi dela?`);

// }
// sayHI("yura");
// sayHI("pavel");
// sayHI("james");

// ============RETURN===========
// function summ(a, b) {
//   const result = a + b;
//   return result;
// }
// let res = summ(10, 15);
// console.log(res);

//  КОРОТКО
// function summ(a, b) {
//   return a + b;
// }
// let res = summ(10, 15);
// console.log(res);

// =====6.3 - Функция как аргумент=====
// function summ(a, b) {
//   return a + b;
// }

// const result = summ(summ(15, 15), summ(20, 20));
// console.log(result);\

// function summ(a, b) {
//   return a + b;
// }

// function diff(a, b) {
//   return a - b;
// }

// function doSomething(func) {
//   let x = 10;
//   let y = 15;
//   let result = func(x, y);
//   console.log(result);
// }
// doSomething(summ); // 25
// doSomething(diff); // -5

// =====6.4 - Самовызывающая функция IIFE (ES5)=====
// imidetly involt function expresion

// (function sayHi() {
//   console.log("privet bratan");
// })();

// (function (a, b) {
//   console.log(a + b);
// })(10, 15);

// возврат в переиенную
// let res = (function (a, b) {
//   return a + b;
// })(10, 15);
// console.log(res);

//  =====6.5 Стрелочные функции(современные ES6)=====
// const sayHi = function sayHI(name) {
//   console.log(`privet,${name}! kak tvoi dela?`);
// };
// sayHI("mark");
// // const arrSayHi2 = (name) => {
// //   console.log(`privet,${name}! kak tvoi dela?`);
// // };
// arrSayHi2("mark");
// const sayHi2 = (name) => console.log(`privet ,${name}!kak tvoi dela?`);
// sayHi2("mark");

// =====7 - Массивы=====

// const autoBrand1 = "audi";
// const autoBrand2 = "bmw";
// const autoBrand3 = "mazda";
// const autoBrand4 = "toyota";

// const autoBrands = ["audi", "bmw", "mazda", "toyota"];
// console.log(autoBrands);
// console.log(autoBrands[0]);
// console.log(autoBrands[1]);
// console.log(autoBrands[2]);
// console.log(autoBrands[3]);
// console.log(autoBrands.length);

// autoBrands.push(items);-Добавить элемент в конец массива
// autoBrands.pop(items);-Удалить элемент с конца массива
// autoBrands.shift()(items);-Удалить элеиент с начало массива
// autoBrands.unshift(....items);-Добавить элеиент в начало массива
// autoBrands.splice([start] [deleteCount, newElement]
// autoBrands.splice(2.2);
// console.log(autoBrands);

// // =====7.1 Методы Массивов=====
// // .push(), .pop(), .shift(), .unshift(),
// // .splice(), .slice(), .forEach(), .idexOf(), .includes()
// const autoBrands = ["audi", "bmw", "mazda", "toyota"];
// console.log(autoBrands);
// autoBrands.push("nissan");
// console.log(autoBrands);
// autoBrands.splice(2, 2);
// console.log(autoBrands);

// 8 - ЦЫКЛЫ
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// =====9 - Обход массива цыклом for=====

// const autoBrands = ["audi", "bmw", "mazda", "toyota"];
// console.log(autoBrands[0]);
// console.log(autoBrands[1]);
// console.log(autoBrands[2]);
// console.log(autoBrands[3]);
// console.log(autoBrands[4]);

// const autoBrands = ["audi", "bmw", "mazda", "toyota"];

// for (i = 0; i < autoBrands.length; i++) {
//   console.log(autoBrands[i]);
// }

// ===== 10 - Обход массива цыклом for (of)=====

// const autoBrands = ["audi", "bmw", "mazda", "toyota"];
// for (let item of autoBrands) {
//   console.log(item);
// }

// 11 - Обход массива методом forEach()

// const autoBrands = ["audi", "bmw", "mazda", "toyota"];
// autoBrands.forEach(function (brand, i) {
//   console.log(`${brand} => ${i}`);
// });

// const autoBrands = ["audi", "bmw", "mazda", "toyota"];
// autoBrands.forEach(printBrand);
// function printBrand(brand, i) {
//   console.log(`${brand}=>${i}`);
// }

// const autoBrands = ["audi", "bmw", "mazda", "toyota"];
// autoBrands.forEach((brand, i) => console.log(`${brand}=>${i}`));

// // =====12 - Объекты=====
// let userName = "mark";
// let age = 30;
// let isMarried = false;

// const person = {
//   userName: "mark",
//   age: 30,
//   isMarried: false,
//   profession: "designer",
// };
// console.log(person);
// console.log(person.userName);
// console.log(person["age"]);

// Если имя свойства находиться в переменной
// то мы вставляем в квадратные скобки

// let propertyName = "profession";
// console.log(person[propertyName]);

// person.work = "js developer";
// console.log(person);

// delete person.age;
// console.log(person);

// =====13 - Методы в объектах=====
// =====14 - Ключевое слово this=====
// this - ссылаеться на объек person

// const person = {
//   userName: "mark",
//   age: 30,
//   isMarried: false,
//   sayHI: function (name) {
//     console.log(this);
//     console.log(`privet, ${name}! menya zovut ${this.userName}`);
//   },
// };
// person.sayHI("yura");4

// =====15 - Оюъекты обход циклом for in (не путать с for of)=====
// const person = {
//   userName: "mark",
//   age: 30,
//   isMarried: false,

//   sayHi: function (yourName) {
//     console.log(`privet  ${yourName}! menya zovut,${this.userName}`);
//   },
// };

// for (let key in person) {
//   console.log(key, ":", person[key]);
// }

// =====17 - Классы.Конструкторы объектов=====

// class Person {
//   constructor(userName, age, isMarried) {
//     this.userName = userName;
//     this.age = age;
//     this.isMarried = isMarried;
//   }
//   sayHi(name) {
//     console.log(`privet  ${name}! menya zovut,${this.userName}`);
//   }
// }
// const person1 = new Person("mark", 30, false);
// const person2 = new Person("pavel", 30, false);

// console.log(person1);
// person1.sayHi("yura");

// console.log(person2);
// person2.sayHi("yura");

// =============Часть 2 Практика============
//  Выбор DOM эллемента
// Выбор одного элемента DOM по селектору
// document.querySelector('selector');
// const header = document.querySelector("h2").classList.add("red");

// const heading2 = document.querySelector("h2");
// heading2.classList.add("red");

// document.querySelector(".heading-3").classList.add("green");

// const headings = document.querySelectorAll("h2");

// for (let item of headings) {
//   console.log(item);
//   item.classList.add("red-text");
// }
// const paragrafs = document.querySelectorAll("p");
// for (let p of paragrafs) {
//   console.log(p);
//   p.classList.add("green-text");
// }
// paragrafs.forEach(function (p) {
//   p.classList.add("green-text");
// });
// это сделал я 😎
// paragrafs.forEach((p) => {
//   p.classList.add("green-text");
// });

// const heading = document.querySelectorAll("h2");
// for (let item of heading) {
//   item.classList.add("red-text");
// }
// ЭТО ПРИМЕРЫ СДЕЛАЛ Я-FOR И forEach возьми на заметку
// const heading = document.querySelectorAll("h2");
// const paragraf = document.querySelectorAll("p");
// for (let head of heading) {
//   head.classList.add("red", "red-text");
// }
// for (let p of paragraf) {
//   p.classList.add("red", "red-text");
// }

// heading.forEach((h2) => {
//   h2.classList.add("red", "red-text");
// });
// paragraf.forEach((p) => {
//   p.classList.add("red", "red-text");
// });

// Методы ES5; - у этих методов нет forEach,выводят в масивах

//  document.getElementsByClassName("link"); //Выбор элемента по CSS
// document.getElementsByTagName("h2"); //Выбор элемента по Tag
// document.getElementsById(#header); //Выбор элемента по ID

// ==========Работа с CSS классами===========

// Element.classList.add()
// .add() - Добавляет CSS класс
// .remove() - Удаляет  CSS класс
// .toggle() - Переключает CSS класс(добавляет если его не было и убирает если он был)
// .contains() - Возвращает true или false в зависимости от того,существует такой класс либо нет

// const heading = document.querySelector("h2");
// console.log(heading);
// heading.classList.add("red-text");
// heading.classList.remove("red-text");
// heading.classList.toggle("green-text");
// heading.classList.toggle("green");
// heading.classList.contains("");
// heading.classList.contains("");

// =====РАБОТА С АТРИБУТАМИ====
/*
getAttribute(attrName) - возвращает значние указанного атрибута
setAttribute(name,value) - добавляет указаный атрибут и его значение к элементу
hasAttribute(attrName) - возвращает true при наличии у элемента указанного атрибута
removeAttribute(attrName) - удаляет указанный атрибут

toggleAttribute(name,force) - добавляет новый атрибут при отсутствии или удаляет существующий атрибут
hasAttributes() - возвращает true,если у элемента имеется какие-либо атрибуты
getAttributesNames() - возвращает название атрибутов элемента
*/
// Например в HTML у нас естъ
// <img id="logo" src="/images/js.png" alt="logotip" />
// мы можем менять размеры и атрибуты ,фотки с помощю свойства .setAttribute

// const img = document.querySelector("#logo");
// const foto = img.getAttribute("src");
// console.log(foto);
// img.setAttribute("src", "/images/php.png");
// img.setAttribute("width", "150");
// img.src = "/images/js.png";

// КНОПКА : <input id="button" type="submit" value="knopka" />
// const button = document.querySelector("#button");
// button.setAttribute("value", "otpravit");
// button.value = "text dlya knopki";

// ======РАБОТА С ПРОСЛУШКОЙ СОБЫТИЙ======
// const button = document.querySelector("#button");
// const img = document.querySelector("#logo");
// button.value = "Удалить";

// addEventListener - Это многократное действие

// button.addEventListener("click", function () {
//   img.remove();
//   console.log("Click1");
// });
// button.addEventListener("click", function () {
//   img.remove();
//   console.log("Click2");
// });
// button.addEventListener("click", function () {
//   img.remove();
//   console.log("Click3");
// });

// onclick - Это действие для одного раза

// const button = document.querySelector("#button");
// const img = document.querySelector("#logo");
// button.onclick = function () {
//   img.remove();
// };

// <!-- Прослушка событий 2.Форма -->
// const inputText = document.querySelector("#input-text");
// const textBlock = document.querySelector("#text-block");
// inputText.addEventListener("input", function () {
//   textBlock.innerText = inputText.value;
// });

// СПОСОБ 2 - СО СТРЕЛОЧНОЙ ФУНКЦИЕЙ

// const inputText = document.querySelector("#input-text");
// const textBlock = document.querySelector("#text-block");
// inputText.addEventListener("input", () => {
//   textBlock.innerText = inputText.value;
// });
// СПОСОБ 3 - ОТДЕЛЬНО ПРОПИСАВ ФУНКИЮ ВНИЗУ

// const inputText = document.querySelector("#input-text");
// const textBlock = document.querySelector("#text-block");
// inputText.addEventListener("input", inputHendler);
// function inputHendler() {
//   textBlock.innerText = inputText.value;
// }

// =====Объект event======
// const list = document.querySelector("#list");
// list.addEventListener("click", function (event) {
//   console.log(this);
//   console.log(event);
//   console.log(event.target);
// });
// вместо (event) - можно прописать что угодно,но красивее event

// ====РАБОТА С ЭЛЕМЕНТАМИ=====
// Создать элемент
// document.createElement('tag-name');

// Изменить HTML Содержимое внутри элемента
// element.innerHTML = ''

// Изменить текстовое содержимое внутри элемента
// node.innerText = ''

// Клонирование элеиента
// node.cloneNode(true или false или без ничего)  true - c внутренним содержимым (текст и теги),
// false - без внутреннего содержимого

// Вставить элемент внутрь другого элемента
// element.append(nodesOrDOMString)

// Удалить элемент
// element.remove()

// Выбор контейнера
// const container = document.querySelector("#elementsContainer");

// Создание заголовка
// const newHeader = document.createElement("h1");
// newHeader.innerText = "Новый заголовок";
// container.append(newHeader);

// Клоринование шапки header из HTML
// const mainHeader = document.querySelector("header");
// const headerCopy = mainHeader.cloneNode(true);
// container.append(headerCopy);

// Вставка разметки через строки
// const htmlExample = "<h2>Второй заголовок</h2>";
// container.insertAdjacentHTML("beforeend", htmlExample);

// Вставка разметки через шаблонные строки
// const title = "Текст заголовка";
// const htmlExample = `<h2>${title}</h2>`;
// container.insertAdjacentHTML("beforeend", htmlExample);

// ========Todo список задач========
// const todoList = document.querySelector("#todo-list");
// const todoForm = document.querySelector("#todo-form");
// const todoInput = document.querySelector("#todo-input");

// todoForm.addEventListener("submit", formHandler);

// function formHandler(event) {
//   event.preventDefault();
//   // Получаем название задачи из инпута
//   const taskText = todoInput.value;
//   // Создаём тег li через разметку : 1 - Мэтод
//   const li = `<li>${taskText}</li>`;

//   // Добавляем разметку на страницу
//   todoList.insertAdjacentHTML("beforeend", li);
//   // Очищаем поле ввода
//   todoInput.value = "";
//   // Фокус на поле ввода
//   todoInput.focus();
// }

// Создаём тег li через разметку : 2 - Мэтод

// const todoList = document.querySelector("#todo-list");
// const todoForm = document.querySelector("#todo-form");
// const todoInput = document.querySelector("#todo-input");

// todoForm.addEventListener("submit", formHendler);
// function formHendler(event) {
//   event.preventDefault();
//   // Получаем название задачи из инпута
//   const taskText = todoInput.value;
//   // Создаём ТЭГ li с помошью создания элемента
//   const newTask = document.createElement("li");
//   newTask.innerText = taskText;
//   // Создаём кнопку удалить
//   const deleteBtn = document.createElement("button");
//   deleteBtn.setAttribute("role", "button");
//   deleteBtn.innerText = "Удалить";
//   deleteBtn.style["margin-left"] = "15px";
//   newTask.append(deleteBtn);
//   // Добавляем события по клику
//   deleteBtn.addEventListener("click", function () {
//     this.closest("li").remove();
//   });
//   // Добавить элемент на страницу
//   todoList.append(newTask);
//   // Очищаем поле вводя после просписи
//   todoInput.value = "";
//   // Фокус на поле ввода
//   todoInput.focus();
// }

// ============setInterval==========
// setInterval -Это включается счётчик.Надо задать число,например 1000млс
// clearInterval - Это стоп для счётчиков.

// const timerIntervalID = setInterval(function () {
//   console.log("fired");
// }, 1000);

// clearInterval(timerIntervalID);

//        =====setTimeout=====
// Это анологтчный мэтод clearInterval-а,который выполняет
// какое-либо функцию или код,через определённый
// проежуток времени.те черезопределённый таймер

// const timeID = setTimeout(function () {
//   console.log("setTimeout Fired");
// }, 2000);
// clearInterval(timeID);

// Вместе
// ========setInterval + setTimeout========
// const timerID = setInterval(function () {
//   console.log("setInterval Fired!");
// }, 1000);
// setTimeout(function () {
//   clearInterval(timerID);
// }, 10000);

// ========ПРАКТИКА. -СЕКУНДОМЕР========
// const counterElement = document.querySelector("#counter");
// let counter = 0;
// let timerID;

// const btnStart = document.querySelector("#start");
// btnStart.onclick = function () {
//   timerID = setInterval(function () {
//     counter++;
//     counterElement.innerText = counter;
//   }, 1000);
// };

// const btnPause = document.querySelector("#pause");
// btnPause.onclick = function () {
//   clearInterval(timerID);
// };

// const btnReset = document.querySelector("#reset");
// btnReset.onclick = function () {
//   counter = 0;
//   counterElement.innerText = counter;
//   clearInterval(timerID);
// };
// 5:00

// =======CallBack , CallBack hell========
// setTimeout(function () {
//   console.log("step 1");
//   setTimeout(function () {
//     console.log("step 2");
//     setTimeout(function () {
//       console.log("step 3");
//     }, 1000);
//   }, 1500);
// }, 2000);

// 1 - Проверка номеров в отеле
// function checkRooms() {
//   setTimeout(function () {
//     console.log("proverka nomerov");
//     const Rooms = true;
//     if (Rooms) {
//       console.log("nomer est");
//       console.log("edem v otpusk");
//     } else {
//       console.log("nomerov net");
//       console.log("otpusk otmenyaetca");
//     }
//   }, 1000);
// }
// checkRooms();
// 2 - Проверка аиабилетов

// function checkRooms(succes, failed) {
//   setTimeout(function () {
//     console.log("PROVERKA NOMEROV V OTELE");
//     const avaiLableRooms = true;
//     if (avaiLableRooms) {
//       let message = "NOMERA EST";
//       submitVacation(message);
//     } else {
//       let message = "NOMERA NET";
//       cancelVacacion(message);
//     }
//   }, 1000);
// }
// checkRooms();
// function cancelVacacion(message) {
//   console.log("===cancelVacation===");
//   console.log("Otvet na predidushem shage :", message);
//   console.log("Otpusk otmenyaeca😥");
// }

// function submitVacation(message) {
//   console.log("=submitVacation=");
//   console.log("Otvet na predidushem shage :", message);
//   console.log("Edem v otpusk🌴");
// }

// 3 - Проверка номеров и авиабилетов

// function checkRooms(success, failed) {
//   setTimeout(function () {
//     console.log("PROVERKA NOMEROV V OTELE");
//     const avaiLableRooms = true;
//     if (avaiLableRooms) {
//       let message = "NOMERA EST";
//       success(message);
//     } else {
//       let message = "NOMERA NET";
//       failed(message);
//     }
//   }, 1000);
// }
// function checkTicets(message, success, failed) {
//   setTimeout(function () {
//     console.log("---function checkTicets");
//     console.log("Otvet na predidushem Shage :", message);
//     console.log("Proveryaem Aviabileti");
//     const avaiLableTickets = true;
//     if (avaiLableTickets) {
//       let message = "Bileti est";
//       success(message);
//     } else {
//       let message = "Biletov net";
//       failed(message);
//     }
//   }, 500);
// }
// function cancelVacation(message) {
//   console.log("===cancelVacation===");
//   console.log("Otvet na predidushem shage :", message);
//   console.log("Otpusk otmenyaeca😥");
// }

// function submitVacation(message) {
//   console.log("=submitVacation=");
//   console.log("Otvet na predidushem shage :", message);
//   console.log("Edem v otpusk🌴");
// }

// checkRooms(
//   function (messageFromCheckRooms) {
//     checkTickets(
//       messageFromCheckRooms,
//       function (messageFromCheckTickets) {
//         submitVacation(messageFromCheckTickets);
//       },
//       function (messageFromCheckTickets) {
//         cancelVacation(messageFromCheckTickets);
//       }
//     );
//   },
//   function (messageFromCheckRooms) {
//     cancelVacation(messageFromCheckRooms);
//   }
// );
// =============Создание промисов=========
// const myPromise = new Promise(function (resolve, reject) {
//   console.log("Promise created");
//   setTimeout(function () {
//     // Запрос на сервер
//     const response = true;

//     if (response) {
//       let message = "SUCCESS";
//       resolve(message);
//     } else {
//       let message = "FAILED";
//       reject(message);
//     }
//   }),
//     1500;
// });
// myPromise
//   .then(function (data) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         console.log("Then1");
//         console.log(data);
//         const response = false;
//         if (response) {
//           resolve("data from then 1");
//         } else {
//           reject("data from then 1");
//         }

//         resolve();
//       }, 1000);
//     });
//   })
//   .then(function (data) {
//     setTimeout(() => {
//       console.log("Then2");
//       console.log(data);
//     }, 500);
//   })

//   .catch(function (data) {
//     console.log("Catch");
//     console.log(data);
//   });

// //== 1. Цепочка проитсов.Несколько промисов с setTimeout==

// const checkRooms = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("ПРОВЕРЯЕМ НОМЕРА В ОТЕЛЕ");
//     const avaiLableRooms = true;
//     console.log(avaiLableRooms);

//     if (avaiLableRooms) {
//       resolve("Nomera est");
//     } else {
//       reject("Nomera net");
//     }
//     // console.log(checkRooms);
//   }),
//     5500;
// });
// checkRooms
//   .then(function (data) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         console.log("--Then 1.--Proverka nomerov...");
//         console.log("Otvet na predidushem shage:", data);
//         console.log("Proveryaem aviabileti...");

//         const avaiLableTickets = true;
//         if (avaiLableTickets) {
//           let message = "BILETI EST";
//           resolve(message);
//         } else {
//           let message = "NET BILETOV";
//           reject(message);
//         }
//       }),
//         5000;
//     });
//   })
//   .then(function (data) {
//     console.log("---then 2---");
//     console.log("Otvet na predidushem shage:", data);
//     console.log("letim v otpusk 😉🌴😜");
//   })
//   .catch(function (data) {
//     console.log("---cathc---");
//     console.log("Otvet na predidushem shage:", data);
//     console.log("otpusk otmenyaeca😥🥵");
//   });

//==2.Цепочка проитсов.Отдельные функции.Несколько промисов с setTimeout==

// Эту функцию переносим в новую вниз function checkTickets()
// checkRooms().then(checkTickets).then(success).catch(failed);

// function checkRooms() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("ПРОВЕРЯЕМ НОМЕРА В ОТЕЛЕ");
//       const avaiLableRooms = true;
//       console.log(avaiLableRooms);

//       if (avaiLableRooms) {
//         resolve("Nomera est");
//       } else {
//         reject("Nomera net");
//       }
//     }, 1500);
//   });
// }

// function checkTickets(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("--Then 1--");
//       console.log("Otvet na predidushem shage:", data);
//       console.log("Proveryaem aviabileti...");
//       const avaiLableTickets = true;
//       if (avaiLableTickets) {
//         let message = "BILETI EST";
//         resolve(message);
//       } else {
//         let message = "NET BILETOV";
//         reject(message);
//       }
//     }, 1000);
//   });
// }

// // эту функцию оборачиваем в .then(success),чтобы было коротко
// function success(data) {
//   console.log("---success--");
//   console.log("Otvet na predidushem shage:", data);
//   console.log("letim v otpusk 😉🌴😜");
// }
// // эту функцию оборачиваем в  .catch(failed);чтобы было коротко
// function failed(data) {
//   console.log("---failed--");
//   console.log("Otvet na predidushem shage:", data);
//   console.log("otpusk otmenyaeca😥🥵");
// }

// ==Async function.Асинхронные функции.Потребление промиса

// function promiseFunction() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const result = false;
//       if (result) {
//         resolve("DONE!");
//       } else {
//         reject("FAIL!");
//       }
//     }, 500);
//   });
// }
// async function startPromise() {
//   try {
//     const result = await promiseFunction();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// startPromise();

// ==Несколько асихронных операцый.Серия промисов.ПРИМЕР==

// function checkRooms() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Проверяем номера в отеле...");
//       let Rooms = true;
//       if (Rooms) {
//         resolve("Номера есть!");
//       } else {
//         reject("Нет номеров");
//       }
//     }, 1500);
//   });
// }
// function checkTicets(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("----checkTicets----");
//       console.log("Ответ на предыдущем шаге:", data);
//       let ticets = true;
//       if (ticets) {
//         let message = "Билеты есть";
//         resolve(message);
//       } else {
//         reject(message);
//       }
//     }, 1500);
//   });
// }
// // ---Подверждение---
// function submitVacation(data) {
//   console.log("---submitVacation----");
//   console.log("Ответ на предыдущем шаге:", data);
//   console.log("Едем в отпуск🌴😜");
// }
// // ---Отмена---
// function cancelVacation(data) {
//   console.log("---canceltVacation----");
//   console.log("Ответ на предыдущем шаге:", data);
//   console.log("Отпуск отменяется 🥵");
// }
// async function checkVacation() {
//   try {
//     const roomResult = await checkRooms();
//     const ticketsResult = await checkTicets(roomResult);
//     submitVacation(ticketsResult);
//   } catch (error) {
//     cancelVacation(error);
//   }
// }
// checkVacation();

// ===Пример fetch с промисами получения данных по API
//htpps://www.cbr-xmL-daily.ru
// 1.Данные с сервера
// fetch("https://www.cbr-xml-daily.ru/daily_json.js")
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
// async function getCurrencies() {
//   const url = "https://www.cbr-xml-daily.ru/daily_json.js";
//   const response = await fetch(url);
//   const data = await response.json();

//   console.log(data.Valute.USD.Value.toFixed(2)); //tofixe(),сокращает числа с конца
//   console.log(data.Valute.EUR.Value.toFixed(2));

//   const usdRate = data.Valute.USD.Value.toFixed(2);
//   const eurRate = data.Valute.EUR.Value.toFixed(2);
//   // Отображаем на страницу
//   const usdElement = document.querySelector("#usd");
//   const eurElement = document.querySelector("#eur");
//   usdElement.innerText = usdRate;
//   eurElement.innerText = eurRate;
// }

// getCurrencies();

// ====================================
// const myPromise = new Promise(function (resolve, reject) {
//   console.log("Promise created");
//   setTimeout(function () {
//     const response = true;

//     if (response) {
//       let message = "SUCCESS";
//       resolve(message);
//     } else {
//       let message = "FAILED";
//       reject(message);
//     }
//   }, 1500);
// });
// myPromise
//   .then(function (data) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         console.log("THEN 1!");
//         const response = false;
//         if (response) {
//           resolve("data from then 1");
//         } else {
//           reject("data from then 1");
//         }
//         resolve("data from then 2");
//         console.log(data);
//         // return "data from then 1";
//       }, 1000);
//     });
//   })

//   .then(function (data) {
//     setTimeout(() => {
//       console.log("Then 2!");
//       console.log(data);
//     }, 500);
//   })
//   .catch(function (data) {
//     console.log("CATCH!!!");
//     console.log(data);
//   });
const checkRooms = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Proverka nomerov v otele...!");
    let availableRooms = true;
    if (availableRooms) {
      resolve("Nomera est!");
    } else {
      reject("Nomerov net!");
    }
  }, 1500);
});
// ----------then---------------
checkRooms
  .then(function (data) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log("-------then1-------");
        console.log("Otvet na predidushen shage:", data);
        console.log("proveryaem aviabileti");
        let avaiLableTickets = true;
        if (avaiLableTickets) {
          let message = "Bileti est!!!";
          resolve(message);
        } else {
          let message = "Biletov net";
          reject(message);
        }
      });
    }, 1000);
  })
  // ------------catch-----------
  .then(function (data) {
    console.log("---then2---");
    console.log("Otvet na predidushen shage:", data);
    console.log("Edem v otpusk 👌");
  })

  .catch(function (data) {
    console.log("---catch!!!!---");
    console.log("Otvet na predidushen shage:", data);
    console.log("Otpusk otmenyaeca 😡");
  });

// // ----------then---------------
// checkRooms
//   .then(function (data) {
//     console.log("---then1 submitvacation---");
//     console.log("Otvet na predidushen shage", data);
//     console.log("Edem v otpusk 👌");
//   })
//   // ------------catch-----------

//   .catch(function (data) {
//     console.log("---catch!!!!---");
//     console.log("Otvet na predidushen shage", data);
//     console.log("Otpusk otmenyaeca 😡");
//   });
