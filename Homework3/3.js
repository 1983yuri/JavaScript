"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/
const userNum1 = +prompt('Введите число номер 1:');
const userNum2 = +prompt('Введите число номер 2:');
const userNum3 = +prompt('Введите число номер 3:');

function userMaxNum(num1, num2, num3) {
    // if (num1 > num2 && num1 > num3) {
    //     return num1;
    // } else if (num2 > num1 && num2 > num3) {
    //     return num2;
    // } else {
    //     return num3;
    // }2
    return console.log(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} 
    равно: ${Math.max(num1, num2, num3)}`);
}
userMaxNum(userNum1, userNum2, userNum3);

