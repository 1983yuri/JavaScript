"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/
console.log(document.getElementById('super_link'));
/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/
const cardLink = document.querySelectorAll('.card-link');
cardLink.forEach(element => element.textContent = 'ссылка');
/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/
console.log(document.querySelectorAll('.card-body .card-link'));
/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/
console.log(document.querySelector('[data-number="50"]'));
/*
5. Выведите содержимое title страницы в консоль.
*/
console.log(document.title);
/*
6. Получите элемент с классом "card-title" и выведите его родительский узел
в консоль.
*/
const node = document.querySelector('.card-title');
console.log(node.parentNode);
/*
7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/
const card = document.querySelector('.card');
const paragraphEl = document.createElement('p');
paragraphEl.textContent = 'Привет';
card.prepend(paragraphEl);
/*
8. Удалите тег h6 на странице.
*/
document.querySelector('h6').remove();
