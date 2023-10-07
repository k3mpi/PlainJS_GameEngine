class CollisionController{
    
    constructor(config, gameController){
        this.config = config; 
        this.gameController = gameController
    }
    checkTile(entity){
        console.log("### CHECK PLAYER TILE COLLISION")
        let entityLeftWorldX = entity.x + entity.collisionX;
        let entityRightWorldX = entity.x + entity.collisionX + entity.collisionWidth;
        let entityTopWorldY = entity.y + entity.collisionY;
        let entityBottomWorldY = entity.y + entity.collisionY + entity.collisionHeight;

        let entityLeftCol = Math.floor(entityLeftWorldX / (this.config.originalTileSize * this.config.scale));   
        let entityRightCol = Math.floor(entityRightWorldX / (this.config.originalTileSize * this.config.scale));   
        let entityTopRow = Math.floor(entityTopWorldY / (this.config.originalTileSize * this.config.scale));   
        let entityBottomRow = Math.floor(entityBottomWorldY / (this.config.originalTileSize * this.config.scale));

        console.log(entityLeftWorldX);
        console.log(entityRightWorldX);
        console.log(entityTopWorldY);
        console.log(entityBottomWorldY);
        console.log(entityLeftCol);
        console.log(entityRightCol);
        console.log(entityTopRow);
        console.log(entityBottomRow);


        for(let col = entityLeftCol; col <= entityRightCol; col++){
            for(let row = entityTopRow; row <= entityBottomRow; row++){
                // Check if the indices are in bounds of the map array.
                if(col >= 0 && col < this.gameController.mapCtrl.map.length &&
                   row >= 0 && row < this.gameController.mapCtrl.map[col].length){
                    let tile = this.gameController.mapCtrl.map[col][row];
                    if(tile.collision){
                 
                        this.gameController.playerCtrl.collide();
                    }
                }
            }
        }
    


    }
    checkProjectile(projectiles){
        projectiles.forEach(projectile => {
            // Berechne die Koordinaten des Projektils
            let projectileLeft = projectile.x + projectile.collisionX;
            let projectileRight = projectile.x + projectile.collisionX + projectile.collisionWidth;
            let projectileTop = projectile.y + projectile.collisionY;
            let projectileBottom = projectile.y + projectile.collisionY + projectile.collisionHeight;

            // Berechne die entsprechenden Kachelkoordinaten
            let projectileLeftCol = Math.floor(projectileLeft / (this.config.originalTileSize * this.config.scale));
            let projectileRightCol = Math.floor(projectileRight / (this.config.originalTileSize * this.config.scale));
            let projectileTopRow = Math.floor(projectileTop / (this.config.originalTileSize * this.config.scale));
            let projectileBottomRow = Math.floor(projectileBottom / (this.config.originalTileSize * this.config.scale));

            for(let col = projectileLeftCol; col <= projectileRightCol; col++){
                for(let row = projectileTopRow; row <= projectileBottomRow; row++){
                    // Checke, ob die Indizes innerhalb der Grenzen des Map-Arrays sind.
                    if(col >= 0 && col < this.gameController.mapCtrl.map.length &&
                        row >= 0 && row < this.gameController.mapCtrl.map[col].length){
                        let tile = this.gameController.mapCtrl.map[col][row];
                        if(tile.collision){
                            // Hier kannst du den Code hinzufügen, um mit der Kollision umzugehen
                            this.gameController.mapCtrl.map[col][row] = 0;
                            this.gameController.animationCtrl.explosion1(projectile.x, projectile.y, projectile.screenX, projectile.screenY);
                            console.log('Projectile collided with a tile!');
                            // Beispiel: Entferne das Projektil aus dem Array
                            const index = projectiles.indexOf(projectile);
                            if (index > -1) {
                                projectiles.splice(index, 1);
                            }
                        }
                    }
                }
            }
        });
    }
    

    init(){
        
    }

    update(){
        this.checkTile(this.gameController.playerCtrl.player)
        this.checkProjectile(this.gameController.projectileCtrl.projectiles)
         

    }

    render(){

    }
}
export default CollisionController;