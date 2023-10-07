class Projectile{

    constructor(rotation, x, y, screenX, screenY, speed, range, damage){

        this.image = new Image();
        this.image.src = "/client/game/assets/img/projectiles/rocket_01.png";
        this.image.onload = () => {
            // Das Bild wurde erfolgreich geladen
            this.loaded = true;
        };


        this.x = x;
        this.y = y; 
        this.screenX = screenX;
        this.screenY = screenY;
        this.collisionX = 0;
        this.collisionY = 0;
        this.collisionWidth = 24;
        this.collisionHeight = 24;


        this.rotation = rotation;

        this.speed = speed;
        this.range = range;
        this.damage = damage;
        this.cooldown = 10;
        

        
    }

    update(){
        this.x += this.speed * Math.cos(this.rotation);
        this.y += this.speed * Math.sin(this.rotation);
        this.screenX += this.speed * Math.cos(this.rotation);
        this.screenY += this.speed * Math.sin(this.rotation);
    }

    render(backgroundContext){
        backgroundContext.save();
   
        backgroundContext.drawImage(
              this.image,
              this.screenX,
              this.screenY,
              16,
              16
              /*
              this.config.originalTileSize * this.config.scale,
              this.config.originalTileSize * this.config.scale
            */
              );
             backgroundContext.restore();
    }

    

}

export default Projectile;