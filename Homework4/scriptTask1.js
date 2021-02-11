/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
   в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект:
   {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */

let num = +prompt("Введите число от 0 до 999");

let numIntoObject = new Object();

function numToObject(num) {
    if (num > 0 && num < 10) {
        numIntoObject.units = num;
    } else if (num > 9 && num < 100) {
        numIntoObject.units = num % 10;
        numIntoObject.tens = Math.floor(num / 10);
    } else if (num > 99 && num < 1000) {
        numIntoObject.units = num % 10;
        numIntoObject.tens = Math.floor((num / 10) % 10);
        numIntoObject.hundreds = Math.floor((num / 10) / 10)
    } else {
        console.log('Число не находится в указанном промежутке')
    }
}

numToObject(num);
console.log(numIntoObject);