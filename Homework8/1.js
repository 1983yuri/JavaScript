"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все
теги будут созданы браузером.
*/
document.addEventListener('DOMContentLoaded', () => {
    console.log('все теги прогрузились');
});
/*
2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все
ресурсы страницы будут загружены.
*/
window.addEventListener('load', () => {
    console.log('страница загрузилась');
});
/*
3. При клике на какой-либо тег на странице в консоль должно выводиться
сообщение наподобие:
Класс "super_element" присутствует в элементе "div".
сообщение должно определять, присутствует или отсутствует класс 
"super_element" у элемента, а также выводить в нижнем регистре верный тег 
в данной строке, по которому был совершен клик.
Необходимо использовать делегирование.
*/
document.addEventListener('click', (e) => {
    const tagEl = e.target.tagName.toLowerCase();
    if (e.target.classList.contains('super_element')) {
        console.log(`Класс "super_element" присутствует в элементе ${tagEl}`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе ${tagEl}`);
    }
});
// Второй вариант от преподавателя:
document.addEventListener('click', (e) => {
    const containStr = event.target.classList.contains('super_element') ? 'присутствует' : 'отсутствует';
    console.log(`Класс "super_element" ${containStr} в элементе "${event.target.tagName.toLowerCase()}".`);
});
/*
4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение:
"Вы навели на textarea."
*/
document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'TEXTAREA') {
        console.log('Вы навели на textarea.');
    }
});
// С правками преподавателя:

const taEl = document.querySelector('textarea');
taEl.addEventListener('mouseover', () => {
    console.log('Вы навели на textarea.');
})

/*
5. Необходимо повесить событие клика на тег ul. В обработчике события в
консоль необходимо выводить текст, который записан внутри элемента кнопки,
по которой был произведен клик.
Если клик был не по кнопке, то ничего выводить не нужно.
Необходимо использовать делегирование.
Если у вас получается другой порядок вывода, значит, скорее всего, вы неверно 
использовали, либо вовсе не использовали, делегирование в 3 и 5 заданиях.
*/
const ulEl = document.querySelector('ul');
ulEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.innerText);
    }
});
/*
6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только
потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul?
Ответ необходимо написать здесь же, под этим комментарием, своими словами.
*/
// Это происходит потому, что в 5 задании мы "вешаем" событие непосредственно на тег ul, а в 3 делегируем событие всему документу document.Цепочка погружения - всплытия, короче в 5 задании, поэтому код отрабатывает в первую очередь.
/*
7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
*/
const liElsEven = document.querySelectorAll('li:nth-child(even)');
liElsEven.forEach(element => {
    element.style.background = 'green';
});
// console.log(liEls);
