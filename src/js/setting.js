export function makeField(gameBoard){
    const table = document.createElement("table");
    table.style.border = "solid";
    table.style.color = "darkgray"
    table.style.borderCollapse = "collapse";
    table.style.width = "500px";
    table.style.height = "500px";
    
    for (let i = 0; i<25; i++){
        const tr = document.createElement("tr");
        for (let j = 0; j<25; j++){
            const td = document.createElement("td");
            td.id = `${i},${j}`;
            td.style.border = "solid";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    gameBoard.appendChild(table);
}

export function makeCrystalList(crystalList){
    const table = document.createElement("table");
    table.style.width = "140px";
    table.style.height = "20px";

    const tr = document.createElement("tr");
    for (let i=0; i<7; i++){
        const td = document.createElement("td");
        td.id = `color${i}`;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    crystalList.appendChild(table);

    console.log(crystalList);
}

export function resetField(){
    for (let i = 0; i<25; i++){
        for (let j = 0; j<25; j++){
            document.getElementById(`${i},${j}`).style.backgroundColor = "white";
        }
    }
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

export function makeArrowKeys(arrowKeys){
    let idx = 0;
    const table = document.createElement("table");
    for (let i = 0; i<3; i++){
        const tr = document.createElement("tr");
        for (let j = 0; j<3; j++){
            const td = document.createElement("td");
            if ((i+j) % 2 === 1){
                const arrowButton = document.createElement("button");
                arrowButton.style.width = "100px";
                arrowButton.style.height = "100px";
                arrowButton.id = `arrow${idx}`;
                td.appendChild(arrowButton);
            }
            tr.appendChild(td);
            idx+=1;
        }
        table.appendChild(tr);
    }
    arrowKeys.appendChild(table);

    document.getElementById("arrow1").innerText = "⬆";
    document.getElementById("arrow3").innerText = "⬅";
    document.getElementById("arrow5").innerText = "➡";
    document.getElementById("arrow7").innerText = "⬇";
}

export function setHTML(gameTitle, clock, button, gameControlButton, crystalList){
    gameTitle.innerText = "BLACK MAMBA";
    gameTitle.style.visibility = "visible";
    clock.style.visibility = "visible";
    clock.innerText = "30.00";
    button.style.visibility = "visible";
    gameControlButton.style.visibility = "visible";
    crystalList.style.visibility = "visible";

    for (let i = 0; i < 7; i++){
        document.getElementById(`color${i}`).style.backgroundColor = "dimGray";
    }
}