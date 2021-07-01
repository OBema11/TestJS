// Import stylesheets
// import './style.css';

// Деструктуризация. Домашняя работа.

// Группа С =======================================================
// Задание №1
// Дан массив ["Julius", "Caesar", "Consul", "of the Roman Republic"]
// Вам надо поместить в переменную
// firstName 1-элемент массива, а в
// переменную titul  3-элемент.

// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// let [firstName, , titul,] = arr;
// console.log(firstName, titul);

// Задание №2
// Дана строка `Albert Einstein`.
// Поместите в переменную firstName первое слово,
// в переменную lastName второе слово.

// let str = 'Albert Einstein';
// let [firstName, lastName] = str.split(' ');
// console.log(firstName, lastName);

// Задание №3
// Создайте объект let obj = {};
// В свойство firstName поместите первое
// слово из задания №2
// В свойство lastName поместите второе
// слово из задания №2

// let obj = {
//     firstName: 'Albert',
//     lastName: 'Einstein'
// };
// let { firstName, lastName } = obj;
// console.log(firstName, lastName);

// Задание №4
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}.
// Запишите соответствующие значения в переменные name, surname и age

// let obj = {
//     name: 'Петр',
//     surname: 'Петров',
//     age: '20 лет'
// };
// let { name, surname, age } = obj;
// console.log(name, surname, age);

// Задание №5
// Дан объект: { hello: "World", console: "log", java: "script" }
// Поместите в переменные, первые два свойства.
// Следующий выведите в консоль. Используйте оператор ...rest (spread).

// let obj = {
//     hello: "World",
//     console: "log",
//     java: "script"
// }
// let { hello, console: log, java } = obj
// console.log(log, java);

// Группа B =======================================================

// Задание №6
// Вам нужно поменять местами значения
// переменных.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0

// let a = 0;
// let b = 1;
// a = 1;
// b = 0;
// console.log(a, b);

// Задание №7
// Дан массив ['первый', 'второй'].
// Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3.
// Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee',
// а если нет второго - в переменную elem2 запишите значение 'bbb'.
// Первый элемент никуда записывать не надо.

// решение 1
// let arr = ['первый', 'второй'];
// let [, elem2, elem3 = 'eee'] = arr;
// console.log(elem2, elem3);

// // решение 2
// let arr1 = ['первый', 'второй']
// let [, elem2, elem3] = arr1
// if (elem2 == null) {
//     elem2 = 'bbb'
// }
// if (elem3 == null) {
//     elem3 = 'eee'
// }
// console.log(elem2, elem3);

// Задание №8
// Дан объект {name: 'Jack', age: '22', hobbys: ['football', 'swimming']}
// Запишите в переменные hobby1 и hobby2 слова football и swimming соответственно.

// let obj = {
//     name: 'Jack',
//     age: '22',
//     hobbys: ['football', 'swimming']
// };
// let { hobbys: [hobby1, hobby2] } = obj;
// console.log(hobby1, hobby2);

// Задание №9
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}

// let arr = {
//     name: 'Петр',
//     surname: 'Петров',
//     age: '20 лет'
// };
// let { name = 'Аноном', surname = 'Анонимович', age = '?лет' } = arr;
// console.log(name, surname, age);

// Задание №10
// Перезапишите все свойства объекта person данными из массива info.
// let info = ['Sam', 'Christenson', 22];
// let person1 = {
//     name: '',
//     surname: '',
//     age: null
// };

// let person = { ...info }
// person.name = 'Sam';
// person.surname = 'Christenson';
// person.age = 22

// console.log(person);

// Группа А =======================================================

// Задание №11
// Дан объект {name: 'John', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало введенное значение с prompt.

// let obj = {
//     name: 'John',
//     age: '22'
// };
// let { name, age } = obj;
// if (name === 0, age === 0) {
//     prompt('')
// }
// console.log(name, age);

// Задание №12
// Переделайте следующую функцию через деструктуризацию.
// Сделайте так, чтобы если какое-либо из значений отсутствует, то переменной присваивалось значение по умолчанию.
// function func(person) {
//     let name = person.n;
//     let surname = person.s;
//     let age = person.a
//     console.log(name, surname, age);
// }
// func({ n: 'Luck', a: 22 });

// let obj = {
//     name: 'John',
//     age: 39
// }
// function func({ name = 'Luck', age = 22 }) {

//     console.log(name, age);
// }
// func(obj);

// Задание №13
// Дан объект {"Sam": 22,"Kate": 28,"Luck": 16}.
// Напишите функцию, которая возвращает имя самого старшего студента.
// Для решения задачи используйте Object.entries и деструктурирование.

// let students = {
//     "Sam": 22,
//     "Kate": 28,
//     "Luck": 16
// };
// function oldest(students) {
//     let arr = Object.entries(students);
//     arr.sort((a, b) => b[1] - a[1]);
//     let [name] = arr[0];
//     console.log(name);
// }
// oldest(students);

// Задание №14
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы и выведите в консоли.

// let obj = { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true };
// let { size: { width, height }, items: [a, b], extra } = obj;
// console.log(width, height, a, b, extra);

// Задание №15
// Дан массив [[15, 15.1, 15.2], [16,16.1,16.2], [17,17.1,17.2]].
// Используя цикл for...of и деструктуризацию вывести в консоль все числа вложенных массивов.
// Пример ввода:
// [[15, 15.1, 15.2], [16,16.1,16.2], [17,17.1,17.2]]
// Пример вывода:
// Первое - 15, второе - 15.1, третье - 15.2
// Первое - 16, второе - 16.1, третье - 16.2
// и т.д

// let arr = [[15, 15.1, 15.2], [16, 16.1, 16.2], [17, 17.1, 17.2]];
// for (let [first, second, third] of arr) {
//     console.log(`Первое - ${first}, Второе - ${second}, Третье - ${third}`)
// };














// Import stylesheets
// import './style.css';

// Деструктуризация. Экстра задания.

// Задание №1
// Дан объект {name: "John", years: 30}.
// Напишите деструктурирующее присваивание, которое:
// 	•	свойство name присвоит в переменную name.
// 	•	свойство years присвоит в переменную age.
// 	•	свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// let obj = { name: "John", years: 30 };
// let { name = name, years: age, isAdmin = false } = obj;
// console.log(name, age, isAdmin);

// Задание №2
// Переделайте следующий код через деструктуризацию:
// function func(employee) {
//     let name = employee[0];
//     let surname = employee[1];
//     let department = employee[2];
//     let position = employee[3];
//     let salary = employee[4];
//     console.log(name, surname, department, position, salary);
// }
// func(["Иван", "Иванов", "отдел разработки", "программист", 2000]);

// let employee = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// let [name, surname, department, position, salary] = employee;
// console.log(name, surname, department, position, salary);

// Задание №3
// Значение переменной firstName равно 32, lastName равно Michael, и age равно Jackson.
// Поменяйте значения переменные так, чтобы в них хранились соответствующие значения.
// Используйте деструктуризацию.

// let arr = {
//     firstName: 32,
//     lastName: 'Michael',
//     age: 'Jackson'
// };
// let { firstName, lastName, age } = arr;
// console.log(firstName, lastName, age);

// Задание №4
// Напишите функцию, которая принимает массив из чисел и возвращает сумму всех чисел, кроме первых двух.
// Используйте деструктуризацию.

// Задание №5
// Дан объект {name: 'Patrick', age: '22', dog: {dogName: 'Hachi', age: 2}}
// Используя деструктуризацию вывести в консоль свойства dogName и age.

// let obj = {
//     name: 'Patrick',
//     age: '22',
//     dog: {
//         dogName: 'Hachi',
//         age: 2
//     }
// };
// let { dog: { dogName, age } } = obj;
// console.log(dogName, age);