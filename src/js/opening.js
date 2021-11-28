import { setBoard } from "./setting.js";

export function opening(){
    const w = "rgb(255,255,255)";
    const b = "rgb(0,0,0)";
    const r = "rgb(255,0,0)";
    const g = "rgb(94,94,94)";
    const h = "rgb(183,183,183)";

    let board = setBoard();

    board = [[w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,w,w,b,b,b,b,b,w,w,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,b,b,w,w,w,w,w,b,b,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,b,b,w,w,h,h,h,h,h,w,w,b,b,w,w,w,w,w,w],
             [w,w,w,w,w,b,w,w,w,w,h,h,h,h,h,w,w,w,w,b,w,w,w,w,w],
             [w,w,w,w,b,b,w,w,w,w,w,h,h,h,h,w,w,h,w,b,b,w,w,w,w],
             [w,w,w,b,w,h,w,w,w,w,w,h,h,h,w,w,h,h,w,w,w,b,w,w,w],
             [w,w,w,b,h,h,w,w,h,h,w,h,h,h,w,w,h,w,w,w,w,b,w,w,w],
             [w,w,w,b,h,h,h,w,w,h,w,h,h,w,w,h,h,w,w,w,w,b,w,w,w],
             [w,w,b,h,h,h,h,w,w,h,w,w,h,w,h,h,w,w,w,w,w,w,b,w,w],
             [w,w,b,h,b,w,h,h,w,h,h,w,h,w,h,w,w,w,w,w,b,w,b,w,w],
             [w,w,b,b,r,b,w,h,h,w,h,w,h,w,h,w,w,w,w,b,r,b,b,w,w],
             [w,w,b,b,r,b,w,w,h,w,h,w,h,w,h,h,h,h,w,b,r,b,b,w,w],
             [w,w,w,b,r,b,w,w,w,w,h,w,h,w,w,w,h,w,w,b,r,b,w,w,w],
             [w,w,w,b,b,w,w,w,w,w,h,w,w,w,w,h,h,w,h,h,b,b,w,w,w],
             [w,w,w,b,w,w,h,w,w,h,h,w,w,w,w,h,w,w,h,w,w,b,w,w,w],
             [w,w,w,b,w,w,h,h,h,h,w,h,h,w,w,h,h,h,h,w,w,b,w,w,w],
             [w,w,w,b,w,w,w,h,h,h,w,w,h,h,w,h,w,h,w,w,w,b,w,w,w],
             [w,w,w,w,b,w,w,w,h,w,w,w,w,w,w,w,w,h,w,w,b,w,w,w,w],
             [w,w,w,w,b,w,w,b,w,w,w,w,w,w,w,w,w,b,w,w,b,w,w,w,w],
             [w,w,w,w,w,b,w,w,b,b,b,b,b,b,b,b,b,w,w,b,w,w,w,w,w],
             [w,w,w,w,w,w,b,b,w,w,b,b,b,b,b,w,w,b,b,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,b,w,w,w,w,w,w,w,w,w,b,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,b,b,b,b,b,b,b,b,b,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w]];
    
    for (let i = 0; i < 25; i++){
        for (let j = 0; j < 25; j++){
            document.getElementById(`${i},${j}`).style.backgroundColor = board[i][j];
        }
    }
}

export function opening1(){
    const w = "rgb(255,255,255)";
    const b = "rgb(0,0,0)";
    const r = "rgb(255,0,0)";
    const g = "rgb(94,94,94)";
    const h = "rgb(183,183,183)";

    let board = setBoard();
    board = [[w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,w,w,b,b,b,b,b,w,w,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,b,b,h,h,g,w,w,b,b,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,b,b,w,w,w,h,g,w,w,w,w,b,b,w,w,w,w,w,w],
             [w,w,w,w,w,b,w,w,w,w,w,h,g,w,w,w,w,w,w,b,w,w,w,w,w],
             [w,w,w,w,b,b,w,w,w,h,w,g,g,g,w,w,w,w,h,b,b,w,w,w,w],
             [w,w,w,b,w,w,g,h,h,g,g,w,w,h,g,g,h,h,g,w,h,b,w,w,w],
             [w,w,w,b,h,w,w,g,g,w,w,w,w,w,w,w,g,g,w,h,h,b,w,w,w],
             [w,w,w,b,g,w,h,w,g,w,w,w,w,w,w,w,g,w,h,h,g,b,w,w,w],
             [w,w,b,h,h,g,h,h,g,h,h,h,w,w,h,h,g,w,h,g,h,w,b,w,w],
             [w,w,b,h,b,h,g,g,g,g,g,g,g,g,g,g,g,g,g,w,b,w,b,w,w],
             [w,w,b,b,r,b,h,w,g,w,w,w,g,w,w,w,g,w,w,b,r,b,b,w,w],
             [w,w,b,b,r,b,w,g,h,h,w,w,g,w,w,h,h,g,w,b,r,b,b,w,w],
             [w,w,w,b,r,b,w,g,h,h,w,w,g,w,w,h,h,g,w,b,r,b,w,w,w],
             [w,w,w,b,b,h,g,g,g,g,g,g,g,g,g,g,g,g,g,h,b,b,w,w,w],
             [w,w,w,b,h,g,h,w,g,h,w,w,g,w,w,h,g,w,h,g,h,b,w,w,w],
             [w,w,w,b,h,g,h,w,g,h,h,w,g,w,w,h,g,w,h,g,h,b,w,w,w],
             [w,w,w,b,h,b,h,g,w,g,g,g,g,g,g,g,w,g,h,b,h,b,w,w,w],
             [w,w,w,w,b,h,b,h,h,h,h,w,g,w,h,h,w,w,b,h,b,w,w,w,w],
             [w,w,w,w,b,h,h,b,h,h,w,w,g,w,w,h,h,b,h,h,b,w,w,w,w],
             [w,w,w,w,w,b,h,h,b,b,b,b,b,b,b,b,b,h,h,b,w,w,w,w,w],
             [w,w,w,w,w,w,b,b,w,h,b,b,b,b,b,h,h,b,b,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,b,h,w,w,w,w,w,w,h,h,b,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,b,b,b,b,b,b,b,b,b,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w]];
    
    for (let i = 0; i < 25; i++){
        for (let j = 0; j < 25; j++){
            document.getElementById(`${i},${j}`).style.backgroundColor = board[i][j];
        }
    }
}

export function opening2(){
    const w = "rgb(255,255,255)";
    const b = "rgb(0,0,0)";
    const r = "rgb(255,0,0)";
    const g = "rgb(94,94,94)";
    const h = "rgb(183,183,183)";

    let board = setBoard();
    board = [[w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,w,w,b,b,b,b,b,w,w,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,b,b,h,h,g,w,w,b,b,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,b,b,w,w,h,h,g,w,w,h,w,b,b,w,w,w,w,w,w],
             [w,w,w,w,w,b,w,w,w,h,w,g,g,g,w,h,w,w,w,b,w,w,w,w,w],
             [w,w,w,w,b,b,g,h,h,g,g,w,w,w,g,g,h,h,g,b,b,w,w,w,w],
             [w,w,w,b,w,w,w,g,g,w,w,h,w,h,w,w,g,g,w,w,w,b,w,w,w],
             [w,w,w,b,h,w,w,w,g,h,h,h,h,h,h,w,g,w,w,w,w,b,w,w,w],
             [w,w,w,b,g,b,b,w,g,b,b,b,b,b,b,b,g,w,b,b,g,b,w,w,w],
             [w,w,b,h,b,r,r,b,b,w,w,w,g,w,w,w,b,b,r,r,b,w,b,w,w],
             [w,w,b,h,b,b,b,w,g,w,w,w,g,w,w,w,g,w,b,b,b,w,b,w,w],
             [w,w,b,b,w,w,w,g,w,b,b,b,b,b,b,b,w,g,w,w,w,b,b,w,w],
             [w,w,b,b,b,w,b,b,b,b,w,h,w,w,w,b,b,b,b,w,b,b,b,w,w],
             [w,w,w,b,w,b,b,w,b,b,h,h,w,h,w,b,b,w,b,b,w,b,w,w,w],
             [w,w,w,b,w,b,w,w,w,b,h,h,w,w,w,b,h,h,w,b,w,b,w,w,w],
             [w,w,w,b,w,b,w,h,h,b,w,h,w,h,w,b,h,h,w,b,w,b,w,w,w],
             [w,w,w,b,w,b,h,h,w,w,h,h,w,w,w,w,h,h,w,b,h,b,w,w,w],
             [w,w,w,b,h,b,w,h,h,w,h,w,w,h,w,w,w,h,w,b,h,b,w,w,w],
             [w,w,w,w,b,h,b,w,w,w,w,h,h,h,w,w,w,w,b,h,b,w,w,w,w],
             [w,w,w,w,b,h,h,b,w,b,w,h,h,h,w,b,w,b,h,h,b,w,w,w,w],
             [w,w,w,w,w,b,h,h,b,b,b,b,b,b,b,b,b,h,h,b,w,w,w,w,w],
             [w,w,w,w,w,w,b,b,w,h,b,b,b,b,b,h,h,b,b,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,b,h,w,w,w,w,w,w,h,h,b,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,b,b,b,b,b,b,b,b,b,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w]];

    for (let i = 0; i < 25; i++){
        for (let j = 0; j < 25; j++){
            document.getElementById(`${i},${j}`).style.backgroundColor = board[i][j];
        }
    }
}

export function opening3(){
    const w = "rgb(255,255,255)";
    const b = "rgb(0,0,0)";
    const r = "rgb(255,0,0)";
    const g = "rgb(94,94,94)";
    const h = "rgb(183,183,183)";

    let board = setBoard();
    board = [[w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,w,w,b,b,b,b,b,w,w,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,b,b,h,h,g,w,w,b,b,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,b,b,w,w,w,h,g,w,w,w,w,b,b,w,w,w,w,w,w],
             [w,w,w,w,w,b,w,w,w,w,b,b,b,b,b,w,w,w,w,b,w,w,w,w,w],
             [w,w,w,w,b,b,w,w,b,b,w,w,w,w,w,b,b,w,w,b,b,w,w,w,w],
             [w,w,w,b,w,h,g,b,b,w,h,w,w,w,h,w,b,b,g,w,w,b,w,w,w],
             [w,w,w,b,h,h,b,b,b,h,w,h,h,w,w,w,b,b,b,w,w,b,w,w,w],
             [w,w,w,b,g,b,w,b,b,h,h,h,h,w,w,h,b,b,w,b,g,b,w,w,w],
             [w,w,b,w,w,b,w,b,b,w,h,h,w,w,h,h,b,b,w,b,w,w,b,w,w],
             [w,w,b,h,g,b,h,w,b,w,w,w,w,w,h,w,b,w,h,b,g,h,b,w,w],
             [w,w,b,h,b,w,h,w,b,w,w,w,w,w,w,w,b,h,h,w,b,h,b,w,w],
             [w,w,b,w,b,h,h,w,b,h,w,w,w,w,w,h,b,w,h,h,b,h,b,w,w],
             [w,w,b,h,b,h,w,w,h,w,h,w,w,w,h,h,h,w,w,h,b,w,b,w,w],
             [w,w,w,b,b,h,h,h,h,h,w,w,w,w,h,h,h,w,h,h,b,b,w,w,w],
             [w,w,w,b,b,h,h,h,h,h,w,h,w,w,w,w,h,h,w,h,b,b,w,w,w],
             [w,w,w,b,w,b,h,w,w,h,w,h,h,h,w,w,h,w,w,b,w,b,w,w,w],
             [w,w,w,b,w,b,w,w,b,w,w,h,h,h,w,w,b,w,w,b,w,b,w,w,w],
             [w,w,w,w,b,w,b,w,b,w,w,h,h,w,w,w,b,w,b,w,b,w,w,w,w],
             [w,w,w,w,b,b,w,b,b,w,h,w,h,h,w,w,b,b,w,b,b,w,w,w,w],
             [w,w,w,w,w,b,w,h,b,h,h,w,w,h,h,h,b,w,w,b,w,w,w,w,w],
             [w,w,w,w,w,b,b,h,h,b,b,b,b,b,b,b,w,h,b,b,w,w,w,w,w],
             [w,w,w,w,w,w,w,b,w,h,h,w,h,h,h,h,w,b,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,b,b,b,b,b,b,b,b,b,w,w,w,w,w,w,w,w],
             [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w]];

    for (let i = 0; i < 25; i++){
        for (let j = 0; j < 25; j++){
            document.getElementById(`${i},${j}`).style.backgroundColor = board[i][j];
        }
    }
}

export function opening4(){
    let board = setBoard();
    for (let i = 0; i < 25; i++){
        for (let j = 0; j < 25; j++){
            document.getElementById(`${i},${j}`).style.backgroundColor = "white";
        }
    }
    
    const blackmamba = [[7,3],[7,4],[7,7],[7,12],[7,15],[7,16],[7,17],[7,19],[7,21],
                        [8,3],[8,5],[8,7],[8,11],[8,13],[8,15],[8,17],[8,19],[8,21],
                        [9,3],[9,4],[9,7],[9,11],[9,12],[9,13],[9,15],[9,19],[9,20],
                        [10,3],[10,5],[10,7],[10,11],[10,13],[10,15],[10,17],[10,19],[10,21],
                        [11,3],[11,4],[11,5],[11,7],[11,8],[11,9],[11,11],[11,13],[11,15],[11,16],[11,17],[11,19],[11,21],
                        
                        [13,3],[13,5],[13,8],[13,11],[13,13],[13,15],[13,16],[13,20],
                        [14,3],[14,4],[14,5],[14,7],[14,9],[14,11],[14,12],[14,13],[14,15],[14,17],[14,19],[14,21],
                        [15,3],[15,4],[15,5],[15,7],[15,8],[15,9],[15,11],[15,12],[15,13],[15,15],[15,16],[15,19],[15,20],[15,21],
                        [16,3],[16,5],[16,7],[16,9],[16,11],[16,13],[16,15],[16,17],[16,19],[16,21],
                        [17,3],[17,5],[17,7],[17,9],[17,11],[17,13],[17,15],[17,16],[17,17],[17,19],[17,21]];

    let pos = 0;
    let write = setInterval(function(){
        if (pos < 104){
            document.getElementById(`${blackmamba[pos][0]},${blackmamba[pos][1]}`).style.backgroundColor = "black";
            pos+=1;
        }
        else{
            clearInterval(write);
        }
    }, 10);
}