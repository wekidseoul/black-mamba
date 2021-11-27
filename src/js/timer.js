export function setTimer(gameState, timeLimit, clock){
    const timer = setInterval(function(){
        clock.innerText = timeLimit.toFixed(2);
        timeLimit -= 0.01;
        if (timeLimit < 0){
            clearInterval(timer);
            clock.innerText = "0.00";
        }
    }, 10)

    return timer;
}