const BULLET_DEFAULT_SPEED = 20;
let FPS = 30;
let Bullet = function (left, top, direction) {
    this.left = left;
    this.top = top;
    this.direction = direction;
    this.speed = BULLET_DEFAULT_SPEED;

    this.drawBullet = function () {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.rect(this.left, this.top, 15, 15);
        ctx.fill();
        ctx.closePath();
    };

    this.move = function () {
        switch (this.direction) {
            case DIRECTION_UP :
                this.moveUp();
                break;
            case DIRECTION_DOWN :
                this.moveDown();
                break;
            case DIRECTION_LEFT :
                this.moveLeft();
                break;
            case DIRECTION_RIGHT :
                this.moveRight();
                break;
        }

    };

    this.moveUp = function () {
        this.top -= this.speed;
    };
    this.moveDown = function () {
        this.top +=this.speed;
    };
    this.moveLeft = function () {
        this.left -= this.speed;
    };
    this.moveRight = function () {
        this.left += this.speed;
    };

    this.checkCollision = function () {
        let count = 0;
        this.board.getOpponents().forEach(function (tank) {
            var distanceX = Math.abs((self.x + BULLET_RADIUS/2) - (tank.getX() + TANK_WIDTH/2));
            var distanceY = Math.abs((self.y + BULLET_RADIUS/2) - (tank.getY() + TANK_HEIGHT/2));
            if(distanceX <= (BULLET_RADIUS + TANK_WIDTH)/2 && distanceY <= (BULLET_RADIUS + TANK_HEIGHT)/2){
                opponent = tank;
                self.board.removeBullet(self);
                self.board.render();
            }
        });

        if(opponent !== null){
            self.board.removeOpponent(opponent);
        }
    };
};

