export function makeSnake(){
    const snake = [];
    for (let i=0; i<9; i++){
        snake.push([24, i]);
    }
    return snake;
}