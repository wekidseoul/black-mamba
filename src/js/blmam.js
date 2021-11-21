// 뱀은 보드에서 움직이고, 뱀이 있는 위치를 테이블에 띄운다.
// 뱀을 좌표로 기억해야함. (x, y)
// board에 빈 땅은 0, 뱀은 1, 유저는 2, 보석은 3

const board = new Array(25);
for (let i = 0; i<25; i++){
    board[i] = new Array(25);
}
for (let i=0;i<25;i++){
    for (let j=0; j<25; j++){
        board[i][j] = 0;
    }
}

const mamba = document.getElementById("mamba");
let mambaCount = 0;

const dx = [0, -1, 0, 1]
const dy = [1, 0, -1, 0]

const button = document.getElementById("add-snake");

function makeField(){
    const gameboard = document.getElementById("game-board");
    
    for (let i = 0; i<25; i++){
        const tr = document.createElement("tr");
        for (let j = 0; j<25; j++){
            const td = document.createElement("td");
            td.id = `${i},${j}`;
            tr.appendChild(td);
        }
        gameboard.appendChild(tr);
    }
}

function addSnake(){
    mambaCount += 1;
    mamba.innerText = mambaCount;
    //처음 3마리, 최대 9마리까지 생성되어야함
    //새로 만들어지는 뱀이 기존 뱀이 있는 곳에 생기지 않도록 해야함
    const snake = [];
    for (let i = 0; i < 9; i++){
        snake.push([24, i])
    }
    
    let checkEmpty = setInterval(function(){
        let check = true;
        for (let i = 0; i<9; i++){
            if (board[24][i] === 1){
                check = false;
            }
        }
        if (check){
            clearInterval(checkEmpty);
            moveSnake(snake);
        }
    }, 100);
}

//방향 0:좌, 1:하, 2:우, 3:상
function moveSnake(snake){
    let now_dir = 0;
    for (let i = 0; i<9; i++){
        document.getElementById(`24,${i}`).style.backgroundColor = "black";
        board[24][i] = 1;   
    }
    
    let forward_rnd = Math.floor(Math.random() * 10) % 3 + 3;
    let count = 0;
    let moving = setInterval(function() {
        let move = forward(snake, now_dir, count, forward_rnd);
        snake = move[0];
        now_dir = move[1];
        count = move[2];
        forward_rnd = move[3];
        if (snake === -1){
            clearInterval(moving);
            addSnake();
        }
    }, 100);
}

function forward(snake, now_dir, count, forward_rnd){
    count = count + 1;
    if (count === forward_rnd){
        const nextDir = turn(snake);
        forward_rnd = Math.floor(Math.random() * 10) % 3 + 3;
        if (nextDir === -1){
            return [resetSnake(snake), 0, 0, forward_rnd];
        }
        return [snake, nextDir, 0, forward_rnd];
    }
    let snakeHead = snake[snake.length - 1];
    const nextX = snakeHead[0] + dx[now_dir];
    const nextY = snakeHead[1] + dy[now_dir];
    if ((nextX>=0 && nextX<25) && (nextY>=0 && nextY<25) && board[nextX][nextY] === 0){
        snake.push([nextX,nextY]);
        document.getElementById(`${nextX},${nextY}`).style.backgroundColor = "black";
        board[nextX][nextY] = 1;
        const snakeTail = snake.shift();
        document.getElementById(`${snakeTail[0]},${snakeTail[1]}`).style.backgroundColor = "white";
        board[snakeTail[0]][snakeTail[1]] = 0;
        return [snake, now_dir, count, forward_rnd];
    }else{
        const nextDir = turn(snake);
        forward_rnd = Math.floor(Math.random() * 10) % 3 + 3;
        if (nextDir === -1){
            return [resetSnake(snake), 0, 0, forward_rnd];
        }
        return [snake, nextDir, 0, forward_rnd];
    }
}

function turn(snake){
    const snakeHead = snake[snake.length - 1];
    let count = 0;
    while (true){
        count+=1;
        const next_dir = Math.floor(Math.random() * 10) % 4;
        const nextX = snakeHead[0]+dx[next_dir];
        const nextY = snakeHead[1]+dy[next_dir];
        if (0<=nextX && nextX<25 && 0<=nextY && nextY<25){
            if (board[nextX][nextY] === 0){
                return next_dir;
            }
        }
        if (count == 30){
            return -1;
        }
    }
}

function resetSnake(snake){
    mambaCount -= 1;
    mamba.innerText = mambaCount;
    for (let i = 0; i < 9; i++){
        document.getElementById(`${snake[i][0]},${snake[i][1]}`).style.backgroundColor = "white";
        board[snake[i][0]][snake[i][1]] = 0;
    }
    return -1;
}

makeField();
button.addEventListener("click", addSnake);