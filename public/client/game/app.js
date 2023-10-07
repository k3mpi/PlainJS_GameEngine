
import GameEngine from "/client/game/main/GameEngine.js";

class GameComponent {
  constructor() {
    this.engine = new GameEngine("test", 32,50);
    this.initialize();
  }

  initialize() {
    // Initialisierungscode für das Spiel
   // someFunction(); // Hier kannst du Funktionen aus anderen Modulen verwenden
    console.log("initialiiert");

  }
}

const gameComponent = new GameComponent();
gameComponent.engine.start(); // Hier wird die Game Engine gestartet

// Exportiere Funktionen, Klassen oder Variablen, die von anderen Modulen verwendet werden sollen
export { GameComponent };
