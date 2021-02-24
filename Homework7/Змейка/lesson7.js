const FIELD_SIZE_X = 20;
const FIELD_SIZE_Y = 20;
const SNAKE_SPEED = 200;
const FOOD_TIMER = 1000;
const BARRIER_TIMER = 2000;

var snake = [];
var direction = 'y+';
var gameIsRunning = false;
var snake_timer;
var score = 0;


function init() {
    prepareGameField();
    let wrap = document.getElementsByClassName('wrap')[0];
    wrap.style.width = '400px';
    document.getElementById('snake-start').addEventListener('click', startGame);
    document.getElementById('snake-renew').addEventListener('click', refreshGame);
    addEventListener('keydown', changeDirection);
}


function prepareGameField() {
    let game_table = document.createElement('table');

    game_table.setAttribute('class', 'game-table');
    for (let i = 0; i < FIELD_SIZE_X; i++) {
        let row = document.createElement('tr');
        row.className = 'game-table-row row-' + i;
        for (let j = 0; j < FIELD_SIZE_Y; j++) {
            let cell = document.createElement('td');
            cell.className = 'game-table-cell cell-' + i + '-' + j;
            row.appendChild(cell);
        }
        game_table.appendChild(row);
    }

    document.getElementById('snake-field').appendChild(game_table);
}


function startGame() {
    gameIsRunning = true;
    respawn();
    snake_timer = setInterval(move, SNAKE_SPEED);
    setTimeout(createFood, FOOD_TIMER);
    setTimeout(createBarrier, BARRIER_TIMER);
}


function respawn() {
    let start_coord_x = Math.floor(FIELD_SIZE_X / 2);
    let start_coord_y = Math.floor(FIELD_SIZE_Y / 2);
    let snake_tail = document.getElementsByClassName('cell-' + start_coord_y + '-' + start_coord_x)[0];
    let snake_head = document.getElementsByClassName('cell-' + (start_coord_y - 1) + '-' + start_coord_x)[0];

    snake_tail.setAttribute('class', snake_tail.getAttribute('class') + ' snake-unit');
    snake_head.setAttribute('class', snake_head.getAttribute('class') + ' snake-unit');
    snake.push(snake_tail);
    snake.push(snake_head);
}


function move() {
    let snake_head_classes = snake[snake.length - 1].getAttribute('class').split(' ');
    let new_unit;
    let snake_coords = snake_head_classes[1].split('-');
    let coord_y = parseInt(snake_coords[1]);
    let coord_x = parseInt(snake_coords[2]);

    if (direction == 'x-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x - 1))[0];
        if (new_unit == undefined) {
            new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (FIELD_SIZE_Y - 1))[0];
        }
    } else if (direction == 'x+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x + 1))[0];
        if (new_unit == undefined) {
            new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + 0)[0];
        }
    } else if (direction == 'y+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-' + (coord_x))[0];
        if (new_unit == undefined) {
            new_unit = document.getElementsByClassName('cell-' + (FIELD_SIZE_Y - 1) + '-' + (coord_x))[0];
        }
    } else if (direction == 'y-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + (coord_x))[0];
        if (new_unit == undefined) {
            new_unit = document.getElementsByClassName('cell-' + 0 + '-' + (coord_x))[0];
        }
    }

    if (!isSnakeUnit(new_unit)) {
        new_unit.setAttribute('class', new_unit.getAttribute('class') + ' snake-unit');
        snake.push(new_unit);
        if (!haveFood(new_unit)) {
            var removed = snake.splice(0, 1)[0];
            var classes = removed.getAttribute('class').split(' ');
            removed.setAttribute('class', classes[0] + ' ' + classes[1]);
        }
        if (haveBarrier(new_unit)) {
            finishTheGame();
        }

    } else {
        finishTheGame();
    }
}


function isSnakeUnit(unit) {
    let check = false;

    if (snake.includes(unit)) {
        check = true;
    }
    return check;
}

function haveFood(unit) {
    let check = false;
    let unit_classes = unit.getAttribute('class').split(' ');

    if (unit_classes.includes('food-unit')) {
        check = true;
        createFood();
        createBarrier();
        score++;
        document.getElementById("score").innerHTML = `Ваш счет: ${score}`;
    }

    return check;
}

function haveBarrier(unit) {
    let check = false;
    let unit_classes = unit.getAttribute('class').split(' ');
    if (unit_classes.includes('barrier-unit')) {
        check = true;
    }
    return check;
}




function createFood() {
    let foodCreated = false;

    while (!foodCreated) {
        let food_x = Math.floor(Math.random() * FIELD_SIZE_X);
        let food_y = Math.floor(Math.random() * FIELD_SIZE_Y);
        let food_cell = document.getElementsByClassName('cell-' + food_y + '-' + food_x)[0];
        let food_cell_classes = food_cell.getAttribute('class').split(' ');
        if (food_cell_classes.includes('barrier-unit')) {
            createFood()
        }
        if (!food_cell_classes.includes('snake-unit')) {
            let classes = '';

            for (let i = 0; i < food_cell_classes.length; i++) {
                classes += food_cell_classes[i] + ' ';
            }

            food_cell.setAttribute('class', classes + 'food-unit');
            foodCreated = true;
        }

    }
}


function createBarrier() {
    let barrierCreated = false;

    while (!barrierCreated) {
        let barrier_x = Math.floor(Math.random() * FIELD_SIZE_X);
        let barrier_y = Math.floor(Math.random() * FIELD_SIZE_Y);
        let barrier_cell = document.getElementsByClassName('cell-' + barrier_y + '-' + barrier_x)[0];
        let barrier_cell_classes = barrier_cell.getAttribute('class').split(' ');

        if (!barrier_cell_classes.includes('snake-unit')) {
            let classes = '';

            for (let i = 0; i < barrier_cell_classes.length; i++) {
                classes += barrier_cell_classes[i] + ' ';
            }

            barrier_cell.setAttribute('class', classes + 'barrier-unit');
            barrierCreated = true;
        }
    }
}


function changeDirection(e) {
    console.log(e);

    switch (e.keyCode) {
        case 37:
            if (direction != 'x+') {
                direction = 'x-'
            }
            break;
        case 38:
            if (direction != 'y-') {
                direction = 'y+'
            }
            break;
        case 39:
            if (direction != 'x-') {
                direction = 'x+'
            }
            break;
        case 40:
            if (direction != 'y+') {
                direction = 'y-'
            }
            break;
    }
}


function finishTheGame() {
    gameIsRunning = false;
    clearInterval(snake_timer);
    alert('Вы проиграли! Ваш результат: ' + score.toString());
}

function refreshGame() {
    location.reload();
}

window.onload = init;