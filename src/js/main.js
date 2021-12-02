/*
- 전체 구성 : 오프닝 → 게임 → 엔딩
    - 오프닝
    - 게임
        - 유저, 뱀, 보석 관련 초기화
        - 필드, 보드 초기화
        - 타이머 초기화
        - 승리 조건 → 시간안에 보석을 7개 모으면 승리
        - 패배 조건 → 뱀에 닿거나 30초가 지나면 패배
    - 엔딩
        - 승리 엔딩
        - 패배 엔딩

- 화면 구성
    - 오프닝 : 필드
    - 게임 : 타이머, 보석 획득 현황, 필드, 버튼
    - 엔딩 : 필드 → 성공 엔딩 → 결과, 버튼
*/
import { setTimer } from "./timer.js";
import { makeField, resetField, setBoard, resetBoard, setHTML} from "./setting.js";
import { makeSnake } from "./snake.js";
import { opening, opening1, opening2, opening3, opening4, opening5 } from "./opening.js";
import { ending } from "./ending.js";

//html 가져오기
const gameTitle = document.getElementById("game-title");

const crystal = document.getElementById("crystal");

const gameBoard = document.getElementById("game-board");
const arrowKeys = document.getElementById("arrow-keys");


//게임 관련 변수
//변하는 값
let board = setBoard();
let user = [0, 0];
let allSnake = [];
let crystalIdx = -1;
let timeLimit = 30;
let gameState = false;
let timerState = null;
//고정된 값
const crystalColor = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
const dx = [0, -1, 0, 1]
const dy = [1, 0, -1, 0]

//함수
function game(){
    initialization();
    if (gameState){ //종료
        gameState = false;
        clearInterval(timerState);
        arrowKeys.style.visibility = "hidden";
        document.removeEventListener("keydown", keyEvent);
        setTimeout(game, 5000);
    }
    else{   //시작
        gameState = true;
        gameStart();
    }
}

function gameStart(){
    //유저, 뱀, 보석
    const snake = makeSnake();
    addSnake(snake);
    userSetting();
    regenCrystal();
    drawField();
    timerState = setTimer(timeLimit, gameTitle);
    crystal.style.visibility = "visible"; 
    arrowKeys.style.visibility = "visible";
}

function drawField(){
    let draw = setInterval(function(){
        for (let i = 0; i < 25; i++){
            for (let j = 0; j < 25; j++){
                if (board[i][j] === 0){
                    document.getElementById(`${i},${j}`).style.backgroundColor = "white";
                }
                else if (board[i][j] === 1){
                    document.getElementById(`${i},${j}`).style.backgroundColor = "black";
                }
                else if (board[i][j] === 2){
                    document.getElementById(`${i},${j}`).style.backgroundColor = "gray";
                }
                else if (board[i][j] === 3){
                    document.getElementById(`${i},${j}`).style.backgroundColor = crystalColor[crystalIdx];
                }
            }
        }
        if (!gameState){
            clearInterval(draw);
            resetField();
        }
        else if (gameTitle.innerText === "0.00"){
            game();
            ending(0);
        }
    }, 10);
}

function addSnake(snake){
    //새로 만들어지는 뱀이 기존 뱀이 있는 곳에 생기지 않도록 해야함
    let checkEmpty = setInterval(function(){
        let check = true;
        for (let i = 0; i<9; i++){
            if (board[24][i] !== 0){
                check = false;
            }
        }
        if (check){
            clearInterval(checkEmpty);
            moveSnake(snake);
        }
    }, 100);
}
function moveSnake(snake){
    let now_dir = 0;
    for (let i = 0; i<9; i++){
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
            addSnake(makeSnake());
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
        game();
        ending(0);
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
        board[nextX][nextY] = 1;
        const snakeTail = snake.shift();
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
        board[snake[i][0]][snake[i][1]] = 0;
    }
    return -1;
}
function killAllsnake(){
    for (let i = 0; i<allSnake.length; i++){
        clearInterval(allSnake[i]);
    }
}


function userMove(x, y){
    const nextX = user[0] + x;
    const nextY = user[1] + y;
    const check = checkMovable(nextX, nextY);
    if (check === 1){
        //game over
        game();
        ending(0);
    }
    else if (check !== -1){
        board[user[0]][user[1]] = 0;
        user[0] += x;
        user[1] += y;
        board[user[0]][user[1]] = 2;
        if (check === 3){
            addSnake(makeSnake());
            regenCrystal();
        }
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
    document.addEventListener("keydown", keyEvent);
    board[user[0]][user[1]] = 2;
}
function keyEvent(e){
    let x = 0;
    let y = 0;
    if (e.key === "ArrowLeft" || e.target.id === "arrow3"){
        y -= 1;
    }else if (e.key === "ArrowRight" || e.target.id === "arrow5"){
        y += 1;
    }else if (e.key === "ArrowUp" || e.target.id === "arrow1"){
        x -= 1;
    }else if (e.key === "ArrowDown" || e.target.id === "arrow7"){
        x += 1;
    }
    userMove(x, y);
}

function regenCrystal(){
    crystalIdx+=1;
    if (crystalIdx === 7){
        win();
        return;
    }
    document.getElementById(`color${crystalIdx}`).style.backgroundColor = crystalColor[crystalIdx];
    while (true){
        let crystalX = Math.floor(Math.random() * 100) % 25;
        let crystalY = Math.floor(Math.random() * 100) % 25;
        if (board[crystalX][crystalY] === 0){
            board[crystalX][crystalY] = 3;
            return;
        }
    }
}

function win(){
    gameState = false;
    clearInterval(timerState);
    document.removeEventListener("keydown", keyEvent);
    arrowKeys.style.visibility = "hidden";
    killAllsnake();
    resetBoard(board);
    resetField();
    ending(1);
    setTimeout(game,5000);
}




//게임 관련된 모든 변수 등 초기화 작업
function initialization(){
    killAllsnake();
    user = [0, 0];
    crystalIdx = -1;
    allSnake = [];
    timeLimit = 30;
    resetBoard(board);
    resetField();
    setHTML(gameTitle, timeLimit);
}

makeField(gameBoard);
opening();
setTimeout(opening1, 500);
setTimeout(opening2, 1000);
setTimeout(opening3, 1500);
setTimeout(opening4, 2000);
setTimeout(opening5, 2500)

setTimeout(function(){
    initialization();
    game();
}, 4000);

const upBtn = document.getElementById("arrow1");
const downBtn = document.getElementById("arrow7");
const leftBtn = document.getElementById("arrow3");
const rightBtn = document.getElementById("arrow5");
upBtn.addEventListener("click", keyEvent);
downBtn.addEventListener("click", keyEvent);
leftBtn.addEventListener("click", keyEvent);
rightBtn.addEventListener("click", keyEvent);

document.addEventListener('dblclick', (e) => {
    e = e.originalEvent || e;
    if (e.scale > 1){
        e.preventDefault();
    }
}, false);

document.addEventListener("contextmenu", (e) => {
    return false;
})