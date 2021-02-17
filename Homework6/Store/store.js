/* Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить»,
 при нажатии на которую происходит добавление имени и цены товара в блок корзины.
  Корзина должна уметь считать общую сумму заказа. */
var goods = [{
        title: "Пиво",
        price: 100,
        amount: 0,
        picture: "StoreItems/beer.jpg"
    },
    {
        title: "Пицца",
        price: 200,
        amount: 0,
        picture: "StoreItems/pizza.jpg"
    },
    {
        title: "Кофе",
        price: 300,
        amount: 0,
        picture: "StoreItems/coffee.jpg"
    },
]



for (var [index, item] of goods.entries()) {

    const myItem = item
    const myIndex = index

    var good = document.createElement("div")
    good.style = "margin:80px; text-align:center"
    var title = document.createElement("h1")
    title.innerHTML = item.title
    var picture = document.createElement("img")
    picture.src = item.picture;
    var price = document.createElement("h2")
    price.innerHTML = item.price + " руб";

    var buttonAdd = document.createElement("button")
    buttonAdd.innerText = "Add"
    buttonAdd.style = "margin-right:10px"
    buttonAdd.onclick = function () {
        addItemToBasket(myItem, myIndex)
    }

    var buttonRemove = document.createElement("button")
    buttonRemove.innerText = "remove"
    buttonRemove.onclick = function () {
        removeItemFromBasket(myItem, myIndex)
    }

    good.appendChild(title)
    good.appendChild(picture)
    good.appendChild(price)
    good.appendChild(buttonAdd)
    good.appendChild(buttonRemove)

    document.getElementById("store").appendChild(good)

}

function countBasketPrice() {
    console.log(goods);
    let basketPrice = 0;
    document.getElementById("basket").innerHTML = ""

    for (var item of goods) {
        basketPrice += (item.price * item.amount)
        if (item.amount > 0) {
            var goodTitle = document.createElement("p")
            goodTitle.innerHTML = `${item.title} : ${item.amount}`
            document.getElementById("basket").appendChild(goodTitle);
        }
    }

    var totalPrice = document.createElement("p")
    totalPrice.innerHTML = `TOTAL: ${basketPrice}`

    document.getElementById("basket").appendChild(totalPrice);
}

function addItemToBasket(item, index) {
    console.log(index);
    item.amount++;
    goods[index] = item;
    countBasketPrice();
}

function removeItemFromBasket(item, index) {
    if (item.amount > 0) {
        item.amount--;
    }
    goods[index] = item;
    countBasketPrice();
}

countBasketPrice(goods);