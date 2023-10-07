import Tile from "../classes/tile/Tile.js";

class MapController {

    constructor(config, context, backgroundContext, canva, backgroundCanva,gameController){
        this.config = config;
        this.context = context;
        this.canva = canva;
        this.backgroundCanva = backgroundCanva;
        this.backgroundContext = backgroundContext;

        this.map = null;
        this.maxScreenCol = Math.ceil(config.width / (config.originalTileSize * config.scale));
        this.maxScreenRow = Math.ceil(config.height / (config.originalTileSize * config.scale));
        this.mapSize = config.mapSize;
        this.mapSizeInPx = this.mapSize * (this.originalTileSize*this.scale)

        console.log(config.scale);
        console.log(config.originalTileSize);
        console.log(config.height);
        console.log(this.maxScreenCol);

        this.gameController = gameController
        

        this.tiles = [];
        this.tileSize = config.originalTileSize * config.scale;
        this.tileImage = new Image();

        // Getting Images before Logic
        this.tileImage.src = "/client/game/assets/img/tiles/stonetile.png"; // Pfad zu Ihrer PNG-Datei
        this.tileImage.onload = () => {
          // Das Bild wurde erfolgreich geladen
          this.init();
        };
        this.gameController = gameController

    }

    update(){

    }

    render() {
        // Speichern Sie den aktuellen Zustand des Canvas
        this.backgroundContext.save();
      
        let worldCol = 0; // Initialisieren Sie col
        let worldRow = 0; // Initialisieren Sie row
        let worldX = 0;
        let worldY = 0;
        let screenX = 0;
        let screenY = 0;
      
      
        while (worldCol < this.mapSize && worldRow < this.mapSize) {
          // Hier können Sie den Zeichnungscode für Ihre Tiles hinzufügen
          worldX = worldCol * this.tileSize;
          worldY = worldRow * this.tileSize;
          screenX = worldX - this.gameController.playerCtrl.player.x + this.gameController.playerCtrl.player.screenX;
          screenY = worldY - this.gameController.playerCtrl.player.y + this.gameController.playerCtrl.player.screenY;

          if (this.map[worldCol][worldRow] !== 0){
            this.backgroundContext.drawImage(
              this.map[worldCol][worldRow].image,
              screenX,
              screenY,
              this.config.originalTileSize * this.config.scale,
              this.config.originalTileSize * this.config.scale
            );
          }
      
          // Aktualisieren Sie col, row, x und y basierend auf Ihrer Logik
          worldCol++;
   
      
          if (worldCol === this.mapSize) {
            worldCol = 0;
            worldRow++;

          }
        }
      
        // Stellen Sie den Canvas-Zustand wieder her
        this.backgroundContext.restore();
    }
        
    initTilePalette() {
      const tileImageSrc = "/client/game/assets/img/tiles/stonetile.png";
      const tile1 = new Tile(0, "Stone Tile", tileImageSrc, true, true);
      this.tiles[0] = tile1;
  
      // Fügen Sie weitere Tiles hinzu, falls erforderlich
  }
    

    generateMap(mapSize) {
        // Erstellen Sie ein leeres 2D-Array
        const map = [];
        for (let i = 0; i < mapSize; i++) {
          map.push(new Array(mapSize).fill(0));
        }
      
        // Füllen Sie das Array mit zufälligen Kreisen
        const numCircles = 24;
        for (let i = 0; i < numCircles; i++) {
          const circleX = Math.floor(Math.random() * mapSize);
          const circleY = Math.floor(Math.random() * mapSize);
          const circleDiameter = Math.floor(Math.random() * 5) + 16; // Zufälliger Durchmesser von 6 bis 10
      
          for (let x = circleX - circleDiameter; x <= circleX + circleDiameter; x++) {
            for (let y = circleY - circleDiameter; y <= circleY + circleDiameter; y++) {
              if (x >= 0 && x < mapSize && y >= 0 && y < mapSize) {
                const distance = Math.sqrt((x - circleX) ** 2 + (y - circleY) ** 2);
                if (distance <= circleDiameter / 2) {
                  map[y][x] = this.tiles[0];
                }
              }
            }
          }
        }
      
        return map;
    }

    init(){
        this.initTilePalette();
        this.map = this.generateMap(this.config.mapSize);
    }
      
}

export default MapController;
