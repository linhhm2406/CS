const DIRECTION_UP = 1;
const DIRECTION_RIGHT = 2;
const DIRECTION_DOWN = 3;
const DIRECTION_LEFT = 4;
const MAIN_TANK_DEFAULT_SIZE = 100;
const MAIN_TANK_DEFAULT_SPEED = 20;

let imgUp = document.getElementById('mainTankImage_up');
let imgLeft = document.getElementById('mainTankImage_left');
let imgRight = document.getElementById('mainTankImage_right');
let imgDown = document.getElementById('mainTankImage_down');
let img = imgUp;

// let imgEnemy = [];
let imgEnemyUp = document.getElementById('enemy_up');
// imgEnemy.push(imgEnemyUp);
let imgEnemyLeft = document.getElementById('enemy_left');
// imgEnemy.push(imgEnemyLeft);
let imgEnemyDown = document.getElementById('enemy_down');
// imgEnemy.push(imgEnemyDown);
let imgEnemyRight = document.getElementById('enemy_right');
// imgEnemy.push(imgEnemyRight);



let img_enemy1 = imgEnemyRight;
let img_enemy2 = imgEnemyLeft;
let img_enemy3 = imgEnemyDown;
let img_enemy4 = imgEnemyUp;