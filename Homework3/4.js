"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/
/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} результат сложения чисел
 */
const sum = (num1, num2) => {
    return num1 + num2;
}

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} результат разности чисел, из большего вычитается меньшее
 */
const diff = (num1, num2) => {
    let result;
    if (num1 > num2) {
        result = num1 - num2;
    } else if (num2 > num1) {
        result = num2 - num1;
    } else {
        result = 0;
    }
    return result;
}

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} результат умножения чисел
 */
const mult = (num1, num2) => {
    return num1 * num2;
}


/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number} результат деления(частное) чисел
 */
const div = (num1, num2) => {
    return num1 / num2;
}
