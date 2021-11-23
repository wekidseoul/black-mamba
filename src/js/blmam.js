// 뱀은 보드에서 움직이고, 뱀이 있는 위치를 테이블에 띄운다.
// 뱀을 좌표로 기억해야함. (x, y)
// board에 빈 땅은 0, 뱀은 1, 유저는 2, 보석은 3

let board = null;

const user = [0,24];

const dx = [0, -1, 0, 1]
const dy = [1, 0, -1, 0]

const button = document.getElementById("game-start");
const gameResult = document.getElementById("result");

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
function makeBoard(){
    board = new Array(25);
    for (let i = 0; i<25; i++){
        board[i] = new Array(25);
    }
    for (let i=0;i<25;i++){
        for (let j=0; j<25; j++){
            board[i][j] = 0;
        }
    }

    board[user[0]][user[1]] = 2;
}

function addSnake(){
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
const allSnake = [];
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
    allSnake.push(moving);
}

function forward(snake, now_dir, count, forward_rnd){
    count = count + 1;
    let snakeHead = snake[snake.length - 1];
    const nextX = snakeHead[0] + dx[now_dir];
    const nextY = snakeHead[1] + dy[now_dir];
    
    if ((nextX>=0 && nextX<25) && (nextY>=0 && nextY<25) && board[nextX][nextY] === 2){
        gameResult.innerText = "블랙맘바에게 잡아먹혔습니다.";
        removeAllSnake();
        gameState();
    }

    if (count === forward_rnd){
        const nextDir = turn(snake);
        forward_rnd = Math.floor(Math.random() * 10) % 3 + 3;
        if (nextDir === -1){
            return [resetSnake(snake), 0, 0, forward_rnd];
        }
        return [snake, nextDir, 0, forward_rnd];
    }
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
    for (let i = 0; i < 9; i++){
        document.getElementById(`${snake[i][0]},${snake[i][1]}`).style.backgroundColor = "white";
        board[snake[i][0]][snake[i][1]] = 0;
    }
    return -1;
}
/*
function userLeft(){
    const nextX = user[0];
    const nextY = user[1]-1;
    if (checkMovable(nextX, nextY)){
        document.getElementById(`${user[0]},${user[1]}`).style.backgroundColor = "white";
        user[1] -= 1;
        document.getElementById(`${user[0]},${user[1]}`).style.backgroundColor = "gray";
    }
}
function userRight(){
    const nextX = user[0];
    const nextY = user[1]+1;
    if (checkMovable(nextX, nextY)){
        document.getElementById(`${user[0]},${user[1]}`).style.backgroundColor = "white";
        user[1] += 1;
        document.getElementById(`${user[0]},${user[1]}`).style.backgroundColor = "gray";
    }
}
function userUp(){
    const nextX = user[0]-1;
    const nextY = user[1];
    if (checkMovable(nextX, nextY)){
        document.getElementById(`${user[0]},${user[1]}`).style.backgroundColor = "white";
        user[0] -= 1;
        document.getElementById(`${user[0]},${user[1]}`).style.backgroundColor = "gray";
    }
}
function userDown(){
    const nextX = user[0]+1;
    const nextY = user[1];     
    if (checkMovable(nextX, nextY)){
        document.getElementById(`${user[0]},${user[1]}`).style.backgroundColor = "white";
        user[0] += 1;
        document.getElementById(`${user[0]},${user[1]}`).style.backgroundColor = "gray";
    }                                                                                                                     
}
*/
function userMove(x, y){
    const nextX = user[0] + x;
    const nextY = user[1] + y;
    const check = checkMovable(nextX, nextY);
    if (check === 0){
        document.getElementById(`${user[0]},${user[1]}`).style.backgroundColor = "white";
        board[user[0]][user[1]] = 0;
        user[0] += x;
        user[1] += y;
        document.getElementById(`${user[0]},${user[1]}`).style.backgroundColor = "gray";
        board[user[0]][user[1]] = 2;
    }
    else if (check === 1){
        //game over
        gameResult.innerText = "블랙맘바에게 잡아먹혔습니다.";
        gameState();
    }
    else if (check === 3){
        //보석 습득
        document.getElementById(`${user[0]},${user[1]}`).style.backgroundColor = "white";
        board[user[0]][user[1]] = 0;
        user[0] += x;
        user[1] += y;
        document.getElementById(`${user[0]},${user[1]}`).style.backgroundColor = "gray";
        board[user[0]][user[1]] = 2;
        addSnake();
        regenCrystal();
    }
}
function checkMovable(X, Y){
    if ((X>=0 && X<25) && (Y>=0 && Y<25)){
        if (board[X][Y] === 1){
            return 1; //뱀에 닿았다
        }
        else if (board[X][Y] === 3){
            return 3; //보석에 닿았다
        }
        else{
            return 0; //아무것도 닿지 않았다
        }
    }
    return -1; //벽에 닿았다
}

function userSetting(){
    document.getElementById("0,24").style.backgroundColor = "gray";
    document.addEventListener("keydown", keyEvent);
    board[user[0]][user[1]] = 2;
}
function keyEvent(e){
    let x = 0;
    let y = 0;
    if (e.key === "ArrowLeft"){
        y -= 1;
    }else if (e.key === "ArrowRight"){
        y += 1;
    }else if (e.key === "ArrowUp"){
        x -= 1;
    }else if (e.key === "ArrowDown"){
        x += 1;
    }
    userMove(x, y);
}

const crystalColor = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
let nowColor = 0;
function regenCrystal(){
    if (nowColor === 7){
        removeAllSnake();
        return win();
    }
    while (true){
        let crystalX = Math.floor(Math.random() * 100) % 25;
        let crystalY = Math.floor(Math.random() * 100) % 25;
        if (board[crystalX][crystalY] === 0){
            board[crystalX][crystalY] = 3;
            document.getElementById(`${crystalX},${crystalY}`).style.backgroundColor = crystalColor[nowColor];
            nowColor+=1;
            return;
        }
    }
}

function win(){
    gameResult.innerText = "Game Clear!!";
    gameState();
}

function clearField(){
    for (let i = 0; i<25; i++){
        for (let j = 0; j<25; j++){
            document.getElementById(`${i},${j}`).style.backgroundColor = "white";
        }
    }
}

function removeAllSnake(){
    for (let i = 0; i<allSnake.length; i++){
        clearInterval(allSnake[i]);
    }
}

function initialization(){ //뱀 모두 제거, 유저 초기화, 보석 초기화
    removeAllSnake();
    nowColor = 0;
    user[0] = 0;
    user[1] = 24;
    document.removeEventListener("keydown", keyEvent);
    makeBoard();
    clearField();
    button.innerText = "Game Start";
}

function gameStart(){
    button.innerText = "Reset";
    gameResult.innerText = "";
    makeBoard();
    addSnake();
    userSetting();
    regenCrystal();
}

function gameState(){
    if (this.innerText === "Game Start"){
        gameStart();
    }
    else{
        initialization();
    }
}

makeField();
button.addEventListener("click", gameState);



/*

오프닝 (필드, 보드 생성 후 텍스트 및 필드 애니메이션)
게임 시작 버튼, 타이머 등장
시작을 누르면 뱀 한마리와 유저, 보석 1개 등장
뱀은 자동으로 움직이고 유저는 방향키로 조종
유저가 보석을 습득하면 뱀이 한마리 증가
뱀에 닿으면 패배
실패시 재시작 버튼만 등장

*/


/*
문제점
잡혔을 때 뱀이 사라지지 않은 현상
뱀의 흔적이 한 칸 남는 현상


남은거

오프닝, 엔딩

타이머 추가
시간안에 보석을 못 모으면 패배

승리시 엔딩 후 클리어 시간
*/
