import Logger from "./Logger.js";
import ConfigLoader from "./ConfigLoader.js";
import GameController from "../controller/GameController.js";

class GameEngine {

  constructor() {
    // SCREEN
    this.canvas = document.getElementById("game");
    this.canvas.width = 0;
    this.canvas.height = 0;
    this.context = this.canvas.getContext('2d');
 
    // UTILS
    this.logger = null;
    this.configLoader = new ConfigLoader("./config.");
    this.config = null;
    this.lastFrameTime = 0;
    this.frameCount = 0;

    this.gameController = null;

    this.init();

    /*
    // Um auf die Logdaten zuzugreifen und sie in eine Textdatei zu schreiben:
    const logData = this.logger.getLog();
    const blob = new Blob([logData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'app.log';
    a.textContent = 'Lade die Logdatei herunter';
    document.body.appendChild(a);
  */
  
 
  }
  init() {
    this.config = this.configLoader.loadConfig();
    this.logger = new Logger('appLog', 2000);

    this.canvas.width = this.config.width;
    this.canvas.height = this.config.height;
   
    this.gameController = new GameController(this.config, this.logger, this.canvas, this.context);

   


  }


  start() {
    this.logger.log("################# FRAME START #############################");
 
    setInterval(() => {
      this.update();
      this.render();
      this.calculateFPS();
    }, 1000 / 60);
  }

  update() {
    this.logger.log("################# Update Frame #############################");
    this.gameController.update();
    
  }

  render() {
    this.logger.log("################# Render Frame #############################");
    this.gameController.render();

  }




  calculateFPS() {
    const now = performance.now();
    const elapsed = now - this.lastFrameTime;
    this.frameCount++;

    if (elapsed >= 1000) {
      const fps = (this.frameCount / (elapsed / 1000)).toFixed(2);
      console.log(`FPS: ${fps}`);
      this.lastFrameTime = now;
      this.frameCount = 0;
    }
  }
}

export default GameEngine;
