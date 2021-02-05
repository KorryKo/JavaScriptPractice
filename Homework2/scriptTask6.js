/*  Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
 где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).*/

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сумма':
            return arg1 + arg2;
            break;
        case 'разность':
            return arg1 - arg2;
            break;
        case 'произведение':
            return arg1 * arg2;
            break;
        default:
            console.log("Выберите один из операторов: сумма, разность, произвдение");
    }
}

console.log(mathOperation(4, 7, 'произведение'))