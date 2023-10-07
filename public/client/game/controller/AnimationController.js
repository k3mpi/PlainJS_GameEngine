import Animation from "../classes/Animation.js";
class AnimationController {
  
    constructor(config, context, backgroundContext, canva, backgroundCanva,gameController){
        this.config = config;
        this.context = context;
        this.canva = canva;
        this.backgroundCanva = backgroundCanva;
        this.backgroundContext = backgroundContext;

        this.animations = null;
      
        console.log(config.scale);
        console.log(config.originalTileSize);
        console.log(config.height);
        console.log(this.maxScreenCol);


        this.gameController = gameController
        

        this.animations = [];

        this.explosionFrames = [];

        this.init();


    
    }
    spawnAnimation(frames, x, y, screenX, screenY){
    
            this.animations.push(new Animation(frames, x, y, screenX, screenY))
        
    }
    explosion1(x,y,screenX,screenY){


        this.spawnAnimation(this.explosionFrames, x,y,screenX,screenY)
        
    }

    update(){

    

        for (let i = 0; i < this.animations.length; i++) {
            this.animations[i].update();
        }
        this.animations = this.animations.filter(animation => !animation.isFinished);
    }

    render() {
        this.backgroundContext.save();

        // Iteriere über alle Projektile und rufe ihre `render` Methode auf
        this.animations.forEach((animation) => {
            if (typeof animation.render === 'function') {
                animation.render(this.backgroundContext);
            }
        });
    
        // [Dein aktueller Code, wenn du ihn hier noch benötigst, könnte hier bleiben.]
    
        // Stellen Sie den Canvas-Zustand wieder her
        this.backgroundContext.restore();

    }
   

    init(){
        const numberOfFrames = 5;

        for (let i = 1; i <= numberOfFrames; i++) {
            // Erstelle ein neues Image-Objekt
            const img = new Image();
            
            // Setze den Pfad zum Bild
            img.src = `/client/game/assets/img/animation/explosion_1/impact_rocket_0${i}.png`;
            
            // Füge das Bild zum explosionFrames Array hinzu
            this.explosionFrames.push(img);
        }
        //LoadFrames
     
    }
      


}
export default AnimationController