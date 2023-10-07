class Tile {
    constructor(id, name, imageSrc, collision, breakable) {
        this.id = id;
        this.name = name;
        this.image = new Image();
        this.image.src = imageSrc;
        this.collision = collision;
        this.breakable = breakable;
        this.loaded = false;

        this.image.onload = () => {
            // Das Bild wurde erfolgreich geladen
            this.loaded = true;
        };

        
    }
}

export default Tile;
