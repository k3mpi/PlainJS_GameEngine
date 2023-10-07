import Projectile from "../classes/projectile/Projectile.js";
class ProjectileController {
  
    constructor(config, context, backgroundContext, canva, backgroundCanva,gameController){
        this.config = config;
        this.context = context;
        this.canva = canva;
        this.backgroundCanva = backgroundCanva;
        this.backgroundContext = backgroundContext;

        this.projectiles = null;
        this.maxScreenCol = Math.ceil(config.width / (config.originalTileSize * config.scale));
        this.maxScreenRow = Math.ceil(config.height / (config.originalTileSize * config.scale));
        this.mapSize = config.mapSize;
        this.mapSizeInPx = this.mapSize * (this.originalTileSize*this.scale)

        console.log(config.scale);
        console.log(config.originalTileSize);
        console.log(config.height);
        console.log(this.maxScreenCol);

        this.cooldown = 0;

        this.gameController = gameController
        

        this.projectiles = [];
        this.init();
    
    }
    spawnProjectile(rotation, x, y, screenX, screenY, speed, range, damage){
        if(this.cooldown==0){
            this.projectiles.push(new Projectile(rotation, x, y, screenX, screenY, speed, range, damage))
            this.cooldown += 10;
        }
    }

    update(){

        if(this.cooldown > 0){
            this.cooldown--;
        }

        for (let i = 0; i < this.projectiles.length; i++) {
            this.projectiles[i].update();
        }
    }

    render() {
        this.backgroundContext.save();

        // Iteriere über alle Projektile und rufe ihre `render` Methode auf
        this.projectiles.forEach((projectile) => {
            if (typeof projectile.render === 'function') {
                projectile.render(this.backgroundContext);
            }
        });
    
        // [Dein aktueller Code, wenn du ihn hier noch benötigst, könnte hier bleiben.]
    
        // Stellen Sie den Canvas-Zustand wieder her
        this.backgroundContext.restore();

    }
        
    initProjectilePalette() {
   
        const rocket = new Projectile(0, "Stone Tile", ImageSrc, true, true);
        this.tiles[0] = rocket;
    
        // Fügen Sie weitere Tiles hinzu, falls erforderlich
    }


    init(){
     
    }
      


}
export default ProjectileController