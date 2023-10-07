class Logger {
    constructor(logKey, maxLines = 2000) {
      this.logKey = logKey;
      this.maxLines = maxLines;
      this.logData = [];
  
      // Lade vorhandene Logdaten aus dem localStorage (falls vorhanden).
      const storedLog = localStorage.getItem(this.logKey);
      if (storedLog) {
        this.logData = JSON.parse(storedLog);
      }
    }
  
    log(message) {
  
      const logEntry = `[${new Date().toISOString()}] ${message}`;
      console.log(logEntry);
      // Füge das neue Logeintrag hinzu.
      this.logData.push(logEntry);
  
      // Begrenze die Anzahl der Zeilen auf 'maxLines'.
      if (this.logData.length > this.maxLines) {
        this.logData.splice(0, this.logData.length - this.maxLines);
      }
  
      // Speichere die aktualisierten Logdaten im localStorage.
      localStorage.setItem(this.logKey, JSON.stringify(this.logData));
    }
  
    getLog() {
      // Gib die gesamten Logdaten zurück.
      return this.logData.join('\n');
    }
  }

  export default Logger;
  
  
 