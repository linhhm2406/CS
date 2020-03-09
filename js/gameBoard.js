let GameBoard = function () {
    this.enemy = [];

    this.control = function () {
        window.addEventListener("keydown", move);

        function move(evt) {
            switch (evt.keyCode) {
                case 32 :
                    mainTank.isShoot = true;
                    break;
                case 37 :
                    mainTank.setDirection(DIRECTION_LEFT);
                    mainTank.moveLeft();
                    break;
                case 38 :
                    mainTank.setDirection(DIRECTION_UP);
                    mainTank.moveUp();
                    break;
                case 39 :
                    mainTank.setDirection(DIRECTION_RIGHT);
                    mainTank.moveRight();
                    break;
                case 40 :
                    mainTank.setDirection(DIRECTION_DOWN);
                    mainTank.moveDown();
                    break;
            }
        }
    };
    this.drawBoard = function () {
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.rect(0, 0, 1500, 1500);
        ctx.fill();
        ctx.closePath();
    };
    this.level1 = function () {
        let enemy1 = new Enemy(img_enemy1, 0, 0, DIRECTION_RIGHT);
        this.enemy.push(enemy1);

        let enemy2 = new Enemy(img_enemy2, canvas.width - ENEMY_DEFAULT_SIZE, 0, DIRECTION_LEFT);
        this.enemy.push(enemy2);

        let enemy3 = new Enemy(img_enemy3, 0, canvas.height / 2, DIRECTION_DOWN);
        this.enemy.push(enemy3);

        let enemy4 = new Enemy(img_enemy4, canvas.width - ENEMY_DEFAULT_SIZE, canvas.height / 2, DIRECTION_UP);
        this.enemy.push(enemy4);
    }
    // this.autoSetDirection = function () {
    //     console.log(Math.floor(Math.random() * 10 + 1));
    //     // for (let i = 0; i < this.enemy.length; i++) {
    //     switch (Math.floor(Math.random(10) + 1)) {
    //         case 1 : {
    //             this.enemy[0].direction = DIRECTION_UP;
    //             img_enemy1 = imgEnemyUp;
    //         }
    //         case 2 : {
    //             this.enemy[0].direction = DIRECTION_LEFT;
    //             img_enemy1 = imgEnemyLeft;
    //         }
    //         case 3 : {
    //             this.enemy[0].direction = DIRECTION_DOWN;
    //             img_enemy1 = imgEnemyDown;
    //         }
    //         case 4 :
    //         case 5 :
    //         case 6 :
    //         case 7 :
    //         case 8 :
    //         case 9 :
    //         case 10 : {
    //             this.enemy[0].direction = DIRECTION_RIGHT;
    //             img_enemy1 = imgEnemyRight;
    //         }
    //     }
    //     // setInterval(this.autoSetDirection, 1000)
    // };

    this.enemyMove = function () {
        for (let i = 0; i < this.enemy.length; i++) {
            switch (this.enemy[i].direction) {
                case DIRECTION_RIGHT :
                    this.enemy[i].moveRight();
                    break;
                case DIRECTION_UP  :
                    this.enemy[i].moveUp();
                    break;
                case DIRECTION_LEFT :
                    this.enemy[i].moveLeft();
                    break;
                case DIRECTION_DOWN  :
                    this.enemy[i].moveDown();
                    break;
            }
                    this.enemy[i].drawEnemyTank();
                    this.enemy[i].enemyFire();
            }
                    // switch (Math.floor(Math.random() * 10 + 1)) {
                    //     case 1 : {
                    //         this.enemy[i].direction = DIRECTION_UP;
                    //         this.enemy[i].img_enemy = imgEnemyUp;
                    //         this.enemy[i].top -= this.speed;
                    //         break;
                    //     }
                    //     case 4 : {
                    //         this.enemy[i].direction = DIRECTION_LEFT;
                    //         this.enemy[i].img_enemy = imgEnemyLeft;
                    //         this.enemy[i].left -= this.speed;
                    //         break;
                    //     }
                    //     case 3 : {
                    //         this.enemy[i].direction = DIRECTION_DOWN;
                    //         this.enemy[i].img_enemy = imgEnemyDown;
                    //         this.enemy[i].top += this.speed;
                    //         break;
                    //     }
                    //     case 2 :
                    //     case 5 :
                    //     case 6 :
                    //     case 7 :
                    //     case 8 :
                    //     case 9 :
                    //     case 10 : {
                    //         this.enemy[i].direction = DIRECTION_RIGHT;
                    //         this.enemy[i].img_enemy = imgEnemyRight;
                    //         this.enemy[i].left += this.speed;
                    //         break;
                    //     }
                    // }


        }
    };

