class KeyController {
    constructor(config, gameController) {
      this.config = config;
      this.gameController = gameController;
  
      // Tastenstatus-Objekt zum Verfolgen, welche Tasten gedrückt sind
      this.keys = {
        w: false,
        a: false,
        s: false,
        d: false,
        space: false,
        q: false,
        e: false,
        shift: false,
      };
  
      // Starten der kontinuierlichen Tastenverarbeitung
      this.startContinuousKeyPressHandling();
  
      // Fügen Sie Event-Listener für Tastendrücke hinzu
      window.addEventListener("keydown", this.handleKeyDown.bind(this));
      window.addEventListener("keyup", this.handleKeyUp.bind(this));
    }
  
    handleKeyDown(event) {
      let key = event.key.toLowerCase();
      if (key === " ") {
          key = "space";
      }
      if (key in this.keys) {
          this.keys[key] = true;
      }
  }
  
  handleKeyUp(event) {
      let key = event.key.toLowerCase();
      if (key === " ") {
          key = "space";
      }
      if (key in this.keys) {
          this.keys[key] = false;
      }
  }
  
    // Starten der kontinuierlichen Tastenverarbeitung
    startContinuousKeyPressHandling() {
      this.intervalId = setInterval(() => {
        for (const key in this.keys) {
          if (this.keys[key]) {
            this.handleKeyPress(key);
          }
        }
      }, 15); // Aktualisieren Sie alle 100 Millisekunden (oder passen Sie den Wert an)
    }
  
    // Stoppen der kontinuierlichen Tastenverarbeitung
    stopContinuousKeyPressHandling() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  
    // Methode zur Behandlung von Tastenanschlägen
    handleKeyPress(key) {
      const player = this.gameController.playerCtrl.player;
    
  
      // Hier können Sie die Logik für die Tastenbehandlung hinzufügen
      if (key === "w") {
        if (player.speed < player.maxSpeed){
            player.speed += player.accelleration;
        }
        // Berechnen Sie die X- und Y-Komponenten der Bewegung basierend auf der Rotation
  
      }
      if (key === "a") {
        // Ändern Sie die Rotation des Spielers (links drehen)
        player.rotation -= 0.1; // Passen Sie den Drehwinkel an
      }
      if (key === "d") {
        // Ändern Sie die Rotation des Spielers (rechts drehen)
        player.rotation += 0.1; // Passen Sie den Drehwinkel an
      }
      // Fügen Sie weitere Tastenaktionen hinzu
      if (key === "s") {
        // Berechnen Sie die X- und Y-Komponenten der Bewegung basierend auf der Rotation
        if (player.speed > (player.maxSpeed/-1)){
            player.speed -= player.accelleration;
        }
      }                                                                   
      if (key === "space") {
        // Berechnen Sie die X- und Y-Komponenten der Bewegung basierend auf der Rotation
        console.log("space pressed");
        this.gameController.playerCtrl.shootPrimary();
        }
      }
    
    
  }
  
  export default KeyController;