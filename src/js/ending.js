import { opening, opening1, opening2, opening3, opening4, opening5 } from "./opening.js";

export function ending(state){
    const gameTitle = document.getElementById("game-title");

    const crystal = document.getElementById("crystal");
    crystal.style.visibility = "hidden";

    
    if (state === 0){ //실패
        const endingStr = ["모", "든 걸", " 삼", "켜버릴"];
        let idx = 0;
        let str = "";
        gameTitle.innerText = str;
        let makeTitle = setInterval(function(){
            if (idx === 4){
                clearInterval(makeTitle);
            }
            else
            {
                str += endingStr[idx];
                gameTitle.innerText = str;
                idx+=1;
            }
        }, 200)

        setTimeout(opening4, 500);
        setTimeout(opening3, 1500);
        setTimeout(opening2, 2500);
        setTimeout(opening5, 3500);
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
    }
}