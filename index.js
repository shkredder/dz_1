//task 1

const count = prompt("Введите Ваше значение:");
let doubleCount = count ** 2;
let tripleCount = count ** 3;
console.log("Значение: " + count);
console.log("Квадрат этого значения: " + doubleCount);
console.log("Куб этого значения: " + tripleCount);

//task 2
const inputDegreesCelsius = prompt("Введите градусы по Цельсию:");
let degreesCelsiusToFahrenh = (inputDegreesCelsius * 9) / 5 + 32;
console.log(inputDegreesCelsius + "\u00B0C равно " + degreesCelsiusToFahrenh + "\u00B0F");

const inputDegreesFahrenh = prompt("Введите градусы по Фаренгейту:");
let degreesFahrenhToCelsius = ((inputDegreesFahrenh - 32) / 9) * 5;
console.log(inputDegreesFahrenh + "\u00B0F равно " + Math.round(degreesFahrenhToCelsius) + "\u00B0C");
