/* 2. С этого урока начинаем работать с функционалом интернет-магазина.
 Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

var goods = [{
        title: "Товар 1",
        price: 100,
        amount: 3
    },
    {
        title: "Товар 2",
        price: 200,
        amount: 6
    },
    {
        title: "Товар 3",
        price: 300,
        amount: 1
    },
]

var s = 0;
for (var item of goods) {
    console.log(item.title + " стоит " + item.price)
}

function countBasketPrice(goods) {
    var basketPrise = 0;
    for (var item of goods) {
       basketPrise += (item.price * item.amount)
    }
    console.log('Итого: ' + basketPrise)
}

countBasketPrice(goods)
