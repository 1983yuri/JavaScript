"use strict";
// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
// const num1 = +prompt('Введите первое число: ');
// const num2 = +prompt('Введите второе число: ');
// if (num1 <= 1) {
//     alert('Первое число меньше или равно 1');
// }
// else {
//     alert('Первое число больше 1');
// }
// if (num2 >= 3) {
//     alert('Второе число больше или равно 3');
// }
// else {
//     alert('Второе число меньше 3');
// }

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test !== true) {
// console.log('+++');
// } else {
// console.log('---');
// }

// Решение
// let test = true;
// test !== true ? console.log('+++') : console.log('---');

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// const day = +prompt('Введите дату: ');
// if (day < 1 || day > 31) {
//     alert('Вы ввели неверную дату!');
// }
// else if (day >= 1 && day <= 10) {
//     alert('Эта дата относится к первой декаде месяца');
// }
// else if (day >= 11 && day <= 20) {
//     alert('Эта дата относится ко второй декаде месяца');
// }
// else {
//     alert('Эта дата относится к третьей декаде месяца');
// }

// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц. // 654
const introdused = +prompt('Введите число: ');
if (isNaN(introdused)) {
    alert('Вы ввели не числовое значение, либо число с недопустимыми символами, например «,» вместо «.» в дробной части');
}
else {
    const userNum = Math.abs(parseInt(introdused));
    const unitOfNum = userNum % 10;
    const tenOfNum = Math.trunc((userNum / 10) % 10);
    const hundredOfNum = Math.trunc((userNum / 100) % 10);
    alert(`Сотен: ${hundredOfNum} \n Десятков: ${tenOfNum} \n Единиц: ${unitOfNum}`);
}


