import PlayerController from "./PlayerController.js";
import KeyController from "./KeyController.js";
import MapController from "./MapController.js";
import EntityController from "./EntityController.js";
import CollisionController from "./CollisionController.js";
import EventController from "./EventController.js";
import ObjectController from "./ObjectController.js";
import SoundController from "./SoundController.js";
import ProjectileController from "./ProjectileController.js";
import ParticleController from "./ParticleController.js";
import SocketController from "./SocketController.js";
import CameraController from "./CameraController.js";
import BackgroundController from "./BackgroundController.js";
import AnimationController from "./AnimationController.js";

class GameController {

    constructor(config,logger, canvas, context){
   
        this.canvas = canvas;
        this.context = context;
        this.config = config;
        this.logger = logger;

        this.backgroundCanvas = document.createElement("canvas");
        this.backgroundContext = this.backgroundCanvas.getContext("2d")


        this.originalTileSize = config.originalTileSize;
        this.scale = config.scale;
        this.tileSize = this.originalTileSize * this.scale;
        this.screen


        this.playerCtrl = null;
        this.keyCtrl = null;
        this.mapCtrl = null;
        this.entityCtrl = null;
        this.objectCtrl = null;
        this.eventCtrl = null;
        this.projectileCtrl = null;
        this.eventCtrl = null;
        this.cameraCtrl = null;
        this.soundCtrl = null;
        this.particleCtrl = null;
        this.socketCtrl = null;

        this.player = null;
        this.map = null;
        this.objects = [];
        this.entities = [];
        this.projectiles = [];
        this.particles = [];
        this.cameraX = 0;
        this.cameraY = 0;
        this.ui = null;


        this.init();


    }

    init(){
        this.backgroundCanvas.width = this.canvas.width;
        this.backgroundCanvas.height = this.canvas.height;

        // INIT CONTROLLERS
        this.eventCtrl = new EventController(this.config, this);

        this.backgroundCtrl = new BackgroundController(this.config, this.context, this.backgroundContext, this.canva, this.backgroundCanvas, this)
        this.playerCtrl = new PlayerController(this.config, this.context, this.backgroundContext, this.canva, this.backgroundCanvas, this);
        this.mapCtrl = new MapController(this.config, this.context, this.backgroundContext, this.canva, this.backgroundCanvas, this);
        this.entityCtrl = new EntityController(this.config, this.context, this.canva, this);
        this.objectCtrl = new ObjectController(this.config, this.context, this.canva, this);
        this.projectileCtrl = new ProjectileController(this.config, this.context, this.backgroundContext, this.canva, this.backgroundCanvas, this);
        this.particleCtrl = new ParticleController(this.config, this.context, this.canva, this);
        this.animationCtrl = new AnimationController(this.config, this.context, this.backgroundContext, this.canva, this.backgroundCanvas, this)
        this.cameraCtrl = new CameraController(this.config, this);
        this.keyCtrl = new KeyController(this.config , this);
       

        this.collisionCtrl = new CollisionController(
            this.config,  this);
        this.soundCtrl = new SoundController(this.config, this);
        this.socketCtrl = new SocketController(this.config);


    }


    update(){
        this.logger.log("################# Update GameController #############################");
        this.renderToBackgroundCanvas();

        this.playerCtrl.update();
        this.mapCtrl.update();
        this.projectileCtrl.update();
        this.collisionCtrl.update();
        this.animationCtrl.update();
    
        // Den gesamten Hintergrund-Canvas auf den Vordergrund-Canvas zeichnen

    }

    render(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(this.backgroundCanvas, 0, 0);  
    }

    renderToBackgroundCanvas() {
        // Hier alle Spielobjekte auf das Hintergrund-Canvas zeichnen
        this.backgroundContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.backgroundCtrl.render();
        this.mapCtrl.render();
        this.playerCtrl.render();
        this.projectileCtrl.render();
        this.animationCtrl.render();
        
    
        // Fügen Sie hier die Rendervorgänge für andere Objekte hinzu
      }
    
}

export default GameController;