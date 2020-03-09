let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let mainTank = new MainTank(700,1200,DIRECTION_UP);
let gameBoard = new GameBoard();
gameBoard.control();
gameBoard.level1();
function main() {
    gameBoard.drawBoard();
    mainTank.drawMainTank();
    mainTank.fire();
    gameBoard.enemyMove();
    requestAnimationFrame(main)
}
main();


