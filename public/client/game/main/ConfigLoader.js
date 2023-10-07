const configData = `{
    "width": 1200,
    "height": 680,
    "originalTileSize": 32,
    "scale": 1,
    "mapSize": 100

  }`;


class ConfigLoader {
   
    constructor() {
      this.configData = configData;
    }
  
    loadConfig() {
      try {
        const config = JSON.parse(this.configData);
  
        // Extrahiere die width und height Werte
        const { width, height,  originalTileSize, scale, mapSize} = config;
  
        // Gib ein Objekt mit den geladenen Werten zurück
        return { width, height, originalTileSize, scale, mapSize };
      } catch (error) {
        console.error(`Fehler beim Laden der Konfigurationsdaten: ${error}`);
        return null; // Im Fehlerfall, gib null zurück
      }
    }
  }
 
  export default ConfigLoader;