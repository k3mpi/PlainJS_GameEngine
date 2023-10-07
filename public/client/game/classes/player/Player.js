class Player{

    constructor(imageSrc){

        this.image = new Image();
        this.image.src = imageSrc;
        this.image.onload = () => {
            // Das Bild wurde erfolgreich geladen
            this.loaded = true;
        };


        this.x = 0;
        this.y = 0; 
        this.screenX = 0;
        this.screenY = 0;
        this.collisionX = 0;
        this.collisionY = 0;
        this.collisionWidth = 24;
        this.collisionHeight = 24;


        this.rotation = 0;


        this.health = 100;
        this.speed = 0;
        this.maxSpeed = 6;
        this.accelleration = 0.2;

        
    }

  



    

}

export default Player