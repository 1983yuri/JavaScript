"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и
возвращает полученное значение.
Необходимо продемонстрировать вызов данной функции, с выводом результата,
который получаем от функции, в консоль.
*/
function getCubeDegree(num) {
    if (!Number.isFinite(num)) {
        return 'You inputed a non numeric value!';
    } else {
        return Math.pow(num, 3);
    }
}
const userNum = +prompt('Input a number');
console.log(`${getCubeDegree(userNum)}`);