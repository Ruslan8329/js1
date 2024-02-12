// Первое задание

let userName = prompt("Введите ваше имя:");
alert("Привет, " + userName + "!");

let userSurname = prompt("Введите вашу фамилию:");
alert("Как у вас дела? " + userSurname);

// Второе

const currentYear = new Date().getFullYear();
let birthYear = prompt("Введите год вашего рождения:");
let age = currentYear - birthYear;
alert("Вам " + age + " лет!");

// Третье

let sideLength = prompt("Введите длину стороны квадрата:");

sideLength = parseFloat(sideLength);
let perimeter = 4 * sideLength;
alert("Периметр квадрата равен " + perimeter);

// Четвертое

const pi = Math.PI;

let radius = prompt("Введите радиус окружности:");
radius = parseFloat(radius);

let area = pi * Math.pow(radius, 2);
area = Math.round(area * 100) / 100;
alert("Площадь окружности равна " + area);

// Пятое

let distance = prompt("Введите расстояние между городами :");
let time = prompt("Введите время, за которое вы хотите добраться :");

!isNaN(distance) && !isNaN(time) && distance > 0 && time > 0;
let speed = distance / time;
alert("Cкорость " + speed.toFixed(2) + " км/ч.");

// Шестое

const exchangeRate = 0.93;

let dollars = prompt("Введите сумму в долларах:");

let euros = dollars * exchangeRate;
alert(dollars + " долларов равно " + euros.toFixed(2) + " евро.");

// Седьмое

const fileSizeMB = 820;
let flashDriveSizeGB = prompt("Укажите объем флешки в Гб:");

let numberOfFiles = Math.floor((flashDriveSizeGB * 1024) / fileSizeMB);
alert(
  "На флешке объемом " +
    flashDriveSizeGB +
    " Гб поместится " +
    numberOfFiles +
    " Файлов"
);
