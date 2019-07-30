'use strict';
/* 

1.Написать скрипт, которые заменяет слово "функция" и его однокоренные слова в div с id=task1 на «<strong>функция</strong>». 

2. Написать скрипт который в div с id=task2 найдет время. Время имеет формат часы:минуты. И часы, и минуты состоят из двух цифр, пример: 09:00.
заключить найденное время в тег <b></b>

3. Создать запрос во всем документе найти текст в кавычках и заключить его в теги <mark></mark>

4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a>, 

5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль

6. Не обязательное усложненное +1 балл
Ссылки такого вида http://site.ru/aaaa/bbbb.html заменить
на <a href="http://site.ru/aaaa/bbbb.html">site.ru</a>


Попрактикуйтесь на кроссвордах https://regexcrossword.com/
и на задачках https://habr.com/ru/post/167015/
 */

 //1
 //let string = document.getElementById('task1');
//console.log(string);
//let result = string.innerHTML;
//console.log(result); 

//string.innerHTML = result.replace(/функци/gi, '<strong>функция</strong');
//string.innerHTML = text.replace(result, 'MOREEEEE');

//2
let string2 = document.getElementById('task2');
let result2 = string2.innerHTML;
let reg = new RegExp('\d{2}[:]d{2}gi')
string2.innerHTML = result2.replace(reg, '<b>reg</b>')

//3
//let reg3 = new RegExp('["]\.["]');
//let result3 = string2.innerHTML;
//string2.innerHTML = result3.replace(reg3, '<mark>reg3</mark>')

//4 
let result = string2.innerHTML.replace('^http://[a-z.-_]+\.[a-z]{2,3}$', '');
console.log(result);

//string2.innerHTML = result4.replace(reg4, '<a href="http://site.ru">site.ru</a>');


