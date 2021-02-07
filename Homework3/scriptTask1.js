//  С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
var i = 0

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function printResult(num) {

    if (isPrime(num)) {
        console.log(num)
    }
};

do {
    printResult(i)
    i = i + 1;
} while (i < 100);
