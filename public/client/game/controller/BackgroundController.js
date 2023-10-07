class BackgroundController{

    constructor(config, context, backgroundContext, canva, backgroundCanva,gameController){
        this.config = config;
        this.context = context;
        this.canva = canva;
        this.backgroundCanva = backgroundCanva;
        this.backgroundContext = backgroundContext;

     

        this.gameController = gameController
        this.mapSize = config.mapSize;
        this.image = new Image();
        this.image.src = "/client/game/assets/img/tiles/background_01.png"; // Pfad zu Ihrer PNG-Datei
        this.image.onload = () => {
            // Das Bild wurde erfolgreich geladen
            this.loaded = true;
        };

        this.gameController = gameController

    }

    update(){

    }

    render() {
        // Speichern Sie den aktuellen Zustand des Canvas
        this.backgroundContext.save();
      
      
        this.backgroundContext.drawImage(
              this.image,
              0,
              0,
              //this.config.originalTileSize * this.config.scale,
              //this.config.originalTileSize * this.config.scale
        );
         
  
        // Stellen Sie den Canvas-Zustand wieder her
        this.backgroundContext.restore();
    }
        


  

    init(){
        this.initTilePalette();
        this.map = this.generateMap(this.config.mapSize);
    }
      
}
export default BackgroundController;
