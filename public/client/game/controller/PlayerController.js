import Player from "../classes/player/Player.js";

class PlayerController{

    constructor(config, context, backgroundContext, canva, backgroundCanva,gameController){
        this.config = config;
        this.context = context;
        this.canva = canva;
        this.backgroundContext = backgroundContext;
        this.backgroundCanva = backgroundCanva;

        this.player = null;

        this.imageSrc = "/client/game/assets/img/entities/spaceship_01.png"; // Pfad zu Ihrer PNG-Datei
      
        this.gameController = gameController
        this.init();

    }

    init(){

        this.player = new Player(this.imageSrc);
        this.player.screenX =  this.config.width/2;
        this.player.screenY = this.config.height/2;
        this.player.image.width = this.config.originalTileSize * this.config.scale;
        this.player.image.height = this.config.originalTileSize * this.config.scale;

    }

    update(){

        if (this.player.speed > 0){
            
            this.player.x += this.player.speed * Math.cos(this.player.rotation);
            this.player.y += this.player.speed * Math.sin(this.player.rotation);
        }

        if (this.player.speed < 0){
            this.player.x += this.player.speed * Math.cos(this.player.rotation);
            this.player.y += this.player.speed * Math.sin(this.player.rotation);
        }
        

        

    }

    render() {


    const { screenX, screenY, rotation } = this.player;
    
    // Speichern Sie den aktuellen Zustand des Canvas
    this.backgroundContext.save();

    // Verschieben Sie den Zeichenursprung (Origin) zur Position des Spielers
    this.backgroundContext.translate(screenX, screenY);

    // Rotieren Sie den Zeichenursprung entsprechend der Spielerrotation
    this.backgroundContext.rotate(rotation);

    // Zeichnen Sie das Bild auf dem Canvas, wobei es nun um die Spielerkoordinaten gedreht ist
    this.backgroundContext.drawImage(this.player.image, -this.player.image.width / 2, -this.player.image.height / 2);

    // Stellen Sie den Canvas-Zustand wieder her
    this.backgroundContext.restore();
    }

    collide(){
        if (this.player.speed < 0){
            
            this.player.x -= this.player.speed * Math.cos(this.player.rotation);
            this.player.y -= this.player.speed * Math.sin(this.player.rotation);
            this.player.speed = 0;

            
        }
        if (this.player.speed > 0){
            this.player.x -= this.player.speed * Math.cos(this.player.rotation);
            this.player.y -= this.player.speed * Math.sin(this.player.rotation);
            this.player.speed = 0;
     
            
        }
        


    }
    shootPrimary(){
        this.gameController.projectileCtrl.spawnProjectile(this.player.rotation, 
            this.player.x, this.player.y, this.player.screenX, this.player.screenY, 20, 
            10, 30)

    }

    


}
export default PlayerController;