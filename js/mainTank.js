
let MainTank = function (left, top, direction) {
    this.left = left;
    this.top = top;
    this.width = MAIN_TANK_DEFAULT_SIZE;
    this.height = MAIN_TANK_DEFAULT_SIZE;
    this.speed = MAIN_TANK_DEFAULT_SPEED;
    this.direction = direction;
    this.isShoot = false;
    this.bullet_array = [];

    this.setDirection = function (direction) {
        this.direction = direction;
    };
    this.drawMainTank = function () {
        ctx.beginPath();
        ctx.drawImage(img, this.left, this.top, this.width, this.height);
        ctx.closePath();
    };
    this.moveLeft = function () {
        img = imgLeft;
        if (this.left > 0) {
            this.left -= this.speed;
        }
    };
    this.moveRight = function () {
        img = imgRight;
        if (this.left + this.width < canvas.width) {
            this.left += this.speed;
        }
    };
    this.moveUp = function () {
        img = imgUp;
        if (this.top > 0) {
            this.top -= this.speed;
        }
    };

    this.moveDown = function () {
        img = imgDown;
        if (this.top + this.height < canvas.height) {
            this.top += this.speed;
        }
    };

    this.fire = function () {
        if (this.isShoot) {
            let bullet = new Bullet(this.left + mainTank.width / 2 - 10, this.top + mainTank.height / 2, this.direction);
            this.bullet_array.push(bullet);
            this.isShoot = false;
        }
        for (let i = 0; i < this.bullet_array.length; i++) {
            if (this.bullet_array[i].top < 0) {
                this.bullet_array.splice(i, 1);
                i--;
            } else {
                this.bullet_array[i].drawBullet();
                this.bullet_array[i].move();
            }
        }
    }
};