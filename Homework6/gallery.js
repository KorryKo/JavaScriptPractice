// Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.
var numberOfImages = 3;
var visibleImage = 1

function openPicture(image, position) {
    var src = `BigPic/pic${position}.jpg`;
    image.src = src
}

function addImage(iteration) {
    const position = iteration;
    let image = document.createElement("img");
    image.src = `SmallPic/pic${iteration}.jpg`;
    image.onerror=function(){error(image,iteration)}

    if (position === visibleImage) {
        image.classList.add("show")
    }

    image.onclick = function () {
        openPicture(image, position)
    };
    image.id = `img${position}`
    document.getElementById("gallery").appendChild(image)
}


function checkVisibleImage(imagePosition) {
    console.log(imagePosition)
    if (imagePosition > numberOfImages) {
        visibleImage = 1
    }
    if (imagePosition < 1) {
        visibleImage = 3
    }
}

function showImage(direction) {

    if (direction === "right") {
        document.getElementById(`img${visibleImage}`).classList.remove("show")
        visibleImage++
        checkVisibleImage(visibleImage)
        document.getElementById(`img${visibleImage}`).classList.add("show")
    }

    if (direction === "left") {
        document.getElementById(`img${visibleImage}`).classList.remove("show")
        visibleImage--
        checkVisibleImage(visibleImage)
        document.getElementById(`img${visibleImage}`).classList.add("show")
    }

}

function error(image,iteration){
    alert("фото не найдено")
    return image.src = `SmallPic/pic${iteration}.jpg`;
}

var iteration = 0;
do {
    iteration++;
    addImage(iteration)
} while (iteration != numberOfImages)

document.getElementById("left").onclick = function () {
    showImage("left")
}

document.getElementById("right").onclick = function () {
    showImage("right")
}