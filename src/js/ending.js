import { opening2, opening3, opening4, opening5 } from "./opening.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {getFirestore, collection, query, orderBy, getDocs, addDoc} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

export function ending(state, timeLimit){
    const gameTitle = document.getElementById("game-title");
    
    const crystal = document.getElementById("crystal");
    crystal.style.visibility = "hidden";

    
    if (state === 0){ //실패
        const endingStr = ["든 걸", " 삼", "켜버릴"];
        let idx = 0;
        let str = "모";
        gameTitle.innerText = str;
        let makeTitle = setInterval(function(){
            if (idx === 3){
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
        setTimeout(opening3, 1000);
        setTimeout(opening2, 1500);
        setTimeout(opening5, 2000);
    }
    else if (state === 1){ //성공
        const winEnding = ["chrome", " to", " colors"];
        const winner = document.getElementById("winner");
        const clearTime = document.getElementById("clearTime");

        clearTime.innerText = `score : ${parseInt(timeLimit * 100)}`;
        let winIdx = 0;
        let str = "Mono";
        gameTitle.innerText = str;
        let makeTitle = setInterval(function(){
            if (winIdx === 3){
                clearInterval(makeTitle);
            }
            else
            {
                str += winEnding[winIdx];
                gameTitle.innerText = str;
                winIdx+=1;
            }
        }, 200)
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
                winner.style.display = "block";

                const nameInput = document.getElementById('winner-name')
                const submitBtn = document.getElementById('winner-submit')
                const rankContainer = document.getElementById('rank')
                const rankBoard = document.getElementById('rank-board')
                document.getElementById('clearTime').style.display = 'block'

                nameInput.style.display = 'inline'
                submitBtn.style.display = 'inline'

                submitBtn.addEventListener('click', async () => {
                    const name = nameInput.value;
                    const score = parseInt(timeLimit * 100);

                    const firebaseConfig = {
                        apiKey: "AIzaSyAlmmpwGTbsTVgCfWOehOp0j_QM17BLH98",
                        authDomain: "black-mamba-f01aa.firebaseapp.com",
                        projectId: "black-mamba-f01aa",
                        storageBucket: "black-mamba-f01aa.appspot.com",
                        messagingSenderId: "888380763117",
                        appId: "1:888380763117:web:94d2b9c505919cd43315e4"
                    };
                    
                        const app = initializeApp(firebaseConfig);
                        const db = getFirestore(app);
                        const mambaCol = collection(db, 'black-mamba');

                        await addDoc(collection(db, "black-mamba"), {
                            name,
                            score
                          });

                    nameInput.style.display = 'none'
                    submitBtn.style.display = 'none'
                    nameInput.value = '';
                    document.getElementById('clearTime').style.display = 'none'

                    document.getElementById('game-board').style.display = 'none';
                    rankContainer.style.display = 'block';

                    const q = await query(mambaCol, orderBy("score", "desc"));
                    const mambaSnapshop = await getDocs(q);
                    const rankList = mambaSnapshop.docs.map(doc => doc.data());

                    const text = rankList.map((rank, idx) => `
                    <li><span class="rank__index">${idx + 1}</span> ${rank.name}: ${rank.score}</li>
                `)
                    rankBoard.innerHTML = text.join('')
                })
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