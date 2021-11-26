export function setTimer(gameState, timeLimit, clock){
    const timer = setInterval(function(){
        clock.innerText = timeLimit.toFixed(2);
        timeLimit -= 0.01;
        if (timeLimit < 0){
            clock.innerText = 0.00;
            clearInterval(timer);
        }
        else if (!gameState){
            clearInterval(timer);
        }
    }, 10)

    return timer;
}