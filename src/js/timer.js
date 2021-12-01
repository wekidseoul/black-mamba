export function setTimer(timeLimit, gameTitle){
    const timer = setInterval(function(){
        gameTitle.innerText = timeLimit.toFixed(2);
        timeLimit -= 0.01;
        if (timeLimit < 0){
            clearInterval(timer);
            gameTitle.innerText = "0.00";
        }
    }, 10)

    return timer;
}