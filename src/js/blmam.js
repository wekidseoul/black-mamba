board = new Array(25);
for (let i = 0; i<25; i++){
    board[i] = new Array(25);
}
for (let i=0;i<25;i++){
    for (let j=0; j<25; j++){
        board[i][j] = 0;
    }
}

let snake = [ [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8] ];

function makeBoard(){
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


function drawSnake(){
    for (let i = 0; i < snake.length; i++){
        board[snake[i][0]][snake[i][1]] = 1;
        const block = document.getElementById(snake[i]);
        block.style.backgroundColor = "black";
    }
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
function moveSnake(){
    const snakeHead = snake[snake.length - 1];
    let count = 0;
    while (true){
        count+=1;
        const next_dir = Math.floor(Math.random() * 10) % 4;
        console.log(next_dir);
        const nextX = snakeHead[0]+dx[next_dir];
        const nextY = snakeHead[1]+dy[next_dir];
        if (0<=nextX && nextX<25 && 0<=nextY && nextY<25){
            if (board[nextX][nextY] !== 1){
                snake.push([nextX, nextY]);
                const snakeTail = snake.shift();
                document.getElementById(`${snakeTail[0]},${snakeTail[1]}`).style.backgroundColor = "white";
                board[snakeTail[0]][snakeTail[1]] = 0;
                drawSnake();
                return;
            }
        }
        if (count == 10){
            resetSnake();
            return;
        }
    }
}

function resetSnake(){
    for (let i = 0; i < snake.length; i++){
        board[snake[i][0]][snake[i][1]] = 0;
        const block = document.getElementById(snake[i]);
        block.style.backgroundColor = "white";
    }
    snake = [ [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8] ];
}

makeBoard();
drawSnake();

setInterval(moveSnake, 10);

// 화면에 보여지는 테이블
// 뒤에서 움직이는 보드
// 뱀
// 뱀은 보드에서 움직이고, 뱀이 있는 위치를 테이블에 띄운다.
// 뱀을 좌표로 기억해야함. (x, y)
// board에 빈 땅은 0, 뱀은 1, 유저는 2, 보석은 3