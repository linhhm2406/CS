const ENEMY_DEFAULT_SIZE = 100;
const ENEMY_DEFAULT_SPEED = 2;
let Enemy = function (img_enemy, left, top, direction) {
    this.left = left;
    this.top = top;
    this.width = ENEMY_DEFAULT_SIZE;
    this.height = ENEMY_DEFAULT_SIZE;
    this.speed = ENEMY_DEFAULT_SPEED;
    this.direction = direction;
    this.isShoot = true;
    this.bullet_array_enemy = [];
    this.reload = 100;
    this.reloadCount = 0;

    this.drawEnemyTank = function () {
        ctx.beginPath();
        ctx.drawImage(img_enemy, this.left, this.top, this.width, this.height);
        ctx.closePath();
    };

    this.setDirection = function (direction) {
        this.direction = direction
    };

    this.enemyFire = function () {
        this.reloadCount++;
        if (this.reloadCount >= this.reload) {
            let bullet = new Bullet(this.left + this.width / 2 - 10, this.top + this.height / 2, this.direction);
            this.bullet_array_enemy.push(bullet);
            this.reloadCount = 0;
        }
        for (let i = 0; i < this.bullet_array_enemy.length; i++) {
            if (this.bullet_array_enemy[i].top < 0) {
                this.bullet_array_enemy.splice(i, 1);
                i--;
            } else {
                this.bullet_array_enemy[i].drawBullet();
                this.bullet_array_enemy[i].move();
            }
        }
    }

    this.moveLeft = function () {
        img_enemy = imgEnemyLeft;
        if (this.left > 0) {
            this.left -= this.speed;
        }
    };
    // this.moveRight = function () {
        // img_enemy = imgEnemyRight;
    //     console.log(this.direction);
    //     if (this.left + this.width < canvas.width) {
    //         switch (Math.floor(Math.random()*10 + 1)) {
    //             case 1 : {
    //                 this.direction = DIRECTION_UP;
    //                 img_enemy = imgEnemyUp;
    //                 this.top -= this.speed;
    //                 break;
    //             }
    //             case 4 : {
    //                 this.direction = DIRECTION_LEFT;
    //                 img_enemy = imgEnemyLeft;
    //                 this.left -= this.speed;
    //                 break;
    //             }
    //             case 3 : {
    //                 this.direction = DIRECTION_DOWN;
    //                 img_enemy = imgEnemyDown;
    //                 this.top += this.speed;
    //                 break;
    //             }
    //             case 2 :
    //             case 5 :
    //             case 6 :
    //             case 7 :
    //             case 8 :
    //             case 9 :
    //             case 10 : {
    //                 this.direction = DIRECTION_RIGHT;
    //                 img_enemy = imgEnemyRight;
    //                 this.left += this.speed;
    //                 break;
    //             }
    //         }
    //     }
    // };

    this.moveRight = function () {
        img_enemy = imgEnemyRight;
        if (this.left + this.width < canvas.width) {
            this.left += this.speed;
        }
    };

    this.moveUp = function () {
        img_enemy = imgEnemyUp;
        if (this.top > 0) {
            this.top -= this.speed;
        }
    };

    this.moveDown = function () {
        img_enemy = imgEnemyDown;
        if (this.top + this.height < canvas.height) {
            this.top += this.speed;
        }
    };
};