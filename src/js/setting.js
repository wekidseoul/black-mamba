export function makeField(gameBoard){
    const table = document.createElement("table");
    
    for (let i = 0; i<25; i++){
        const tr = document.createElement("tr");
        for (let j = 0; j<25; j++){
            const td = document.createElement("td");
            td.id = `${i},${j}`;
            td.className = "piece";
            td.style.border = "solid";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    table.id = "field";
    gameBoard.appendChild(table);
}

export function resetField(){
    document.querySelectorAll('.piece').forEach(p=>{
        p.style.backgroundColor = "white";
    })
}

export function setBoard(){
    const board = new Array(25);
    for (let i = 0; i<25; i++){
        board[i] = new Array(25);
    }
    for (let i=0;i<25;i++){
        for (let j=0; j<25; j++){
            board[i][j] = 0;
        }
    }
    return board;
}

export function resetBoard(board){
    for (let i=0;i<25;i++){
        for (let j=0; j<25; j++){
            board[i][j] = 0;
        }
    }
}

export function setHTML(gameTitle, timeLimit){
    gameTitle.innerText = timeLimit.toFixed(2);
    document.querySelectorAll('.colorTable').forEach(crystal => {
        crystal.style.backgroundColor = 'dimgray';
    })
}