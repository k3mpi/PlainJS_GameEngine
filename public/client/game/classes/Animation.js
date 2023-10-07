class Animation{
    constructor(frames, x, y, screenX, screenY){
        this.frames = frames;
        this.currentFrameIndex = 0;
        this.frameCounter = 0;

        this.x = x;
        this.y = y; 
        this.screenX = screenX;
        this.screenY = screenY;
        this.image = null;
           
        this.isFinished = false; //
        
        
        this.init();
    }

    init() {
        console.log("booooooooooooooooooooooooooooooom")
        console.log("booooooooooooooooooooooooooooooom")
        console.log("booooooooooooooooooooooooooooooom")
        console.log("booooooooooooooooooooooooooooooom")
        console.log("booooooooooooooooooooooooooooooom")
        console.log("booooooooooooooooooooooooooooooom")
        console.log("booooooooooooooooooooooooooooooom")
        console.log("booooooooooooooooooooooooooooooom")
        console.log("booooooooooooooooooooooooooooooom")
        console.log("booooooooooooooooooooooooooooooom")
        this.image = this.frames[this.currentFrameIndex];
        // Weitere Initialisierungslogik...
    }
    update(){
        this.frameCounter++;
        if (this.frameCounter >= 6) {
            this.currentFrameIndex++;
            if (this.currentFrameIndex >= this.frames.length) {
                // Wenn das Ende des Frame-Arrays erreicht ist, markiere die Animation als beendet
                this.isFinished = true;
                return; // Beende die update Funktion hier, um keine neuen Frames zu setzen
            }
            this.image = this.frames[this.currentFrameIndex];
            this.frameCounter = 0;
        }
    }

    render(backgroundContext){
        backgroundContext.save();
   
        backgroundContext.drawImage(
              this.image,
              this.screenX - 96/2, 
              this.screenY - 96 / 2,
              96, // Diese Werte sollten wahrscheinlich nicht hart codiert sein
              96  // sondern als Variablen/Parameter/Eigenschaften bereitgestellt werden
              /*
              this.config.originalTileSize * this.config.scale,
              this.config.originalTileSize * this.config.scale
              */
        );
        backgroundContext.restore();
    }
}
export default Animation;
