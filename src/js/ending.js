import { opening, opening1, opening2, opening3, opening4, opening5 } from "./opening.js";

export function ending(state){
    const gameTitle = document.getElementById("game-title");
    gameTitle.style.visibility = "visible";

    const button = document.getElementById("button");
    button.style.visibility = "hidden";

    const crystal = document.getElementById("crystal");
    crystal.style.visibility = "hidden";

    
    if (state === 0){ //실패
        const clock = document.getElementById("timer");
        clock.style.visibility = "hidden";

        gameTitle.innerText = "모든 걸 삼켜버릴";
        opening5();
        setTimeout(opening4, 1500);
        setTimeout(opening3, 2100);
        setTimeout(opening2, 2600);
        setTimeout(function(){
            button.style.visibility = "visible";
            clock.style.visibility = "visible";
            crystal.style.visibility = "visible";
        },3000);
    }
    else if (state === 1){ //성공
        gameTitle.innerText = "Monochrome to colors";
        
        const colors = [];
   
        for (let i=0; i<25; i++){
            for (let j=0; j<25; j++){
                colors.push([i,j]);      
            }
        }
        
        let idx = 0;

        let fill = setInterval(function(){
            if (idx === 625){
                clearInterval(fill);
            }
            else{
                const i = colors[idx][0];
                const j = colors[idx][1];

                const r = Math.floor(Math.random() * 1000) % 256;
                const g = Math.floor(Math.random() * 1000) % 256;
                const b = Math.floor(Math.random() * 1000) % 256;
                document.getElementById(`${i},${j}`).style.backgroundColor = `rgb(${r},${g},${b})`;
                idx+=1;
            }
        },1);
        
        setTimeout(function(){
            button.style.visibility = "visible";
        },3000);

    }
}