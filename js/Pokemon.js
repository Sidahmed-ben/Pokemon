import { ctx } from './main.js';

export class Pokemon {

constructor(params) {
    this.pokemon_img = new Image();
    this.pokemon_img.src = './js/img/'+params 
    this.pokemon_draw = false;
    this.width_hb = 75 ;  // Largeur de l'image du pokemon quand il se déplace vers le haut ou vers le bas en pixel
    this.height_hb = 72 ; // Hauteur de l'image du pokemon quand il se déplace vers la haut ou vers le bas en pixel
    this.width_gd = 70 ;  // Largeur de l'image du pokemon quand il se déplace vers la gauche ou vers la droite  en pixel
    this.height_gd = 69 ; // Hauteur de l'image du pokemon quand il se déplace vers la gauche ou vers la droite  en pixel
    this.x = 250   //  Position X sur le canvas
    this.y = 170   //  Position Y sur le canvas
    this.speedX = 10; // Vitesse du Pokémon quand il se déplace en abscisse
    this.speedY = 10; // Vitesse du Pokémon quand il se déplace en ordonnée
    this.faceX = 7; // Coordonnées X du morceau d'image à cropper sur l'image du Pokémon
    this.faceY = 0; // Coordonnées Y du morceau d'image à cropper sur l'image du Pokémon
    this.currentLoopIndex = 0;
    this.width  = this.width_hb  ;
    this.height = this.height_hb ;
    this.rightCycleLoop = [{faceX:76,faceY:209},{faceX:153,faceY:209}];
    this.leftCycleLoop  = [{faceX:4,faceY:144},  {faceX:76,faceY:144},{faceX:152,faceY:144}];
    this.upCycleLoop    = [{faceX:6,faceY:71}, {faceX:80,faceY:71},{faceX:156,faceY:71}];
    this.downCycleLoop  = [{faceX:7,faceY:0}, {faceX:80,faceY:0},{faceX:152,faceY:0}];
    }

    draw() { 
      if(this.pokemon_draw)
      {
        ctx.drawImage(
          this.pokemon_img,
          this.faceX , // Position X de la partie à croper
          this.faceY , // Position Y de la partie à croper
          this.width , // Largeur de la partie à croper
          this.height ,// Hauteur de la partie à corper
          this.x,  //  Position X sur le canvas
          this.y,  //  Position Y sur le canvas
          60, // Largeur de la partie cropée
          60 // Hauteur de la partie cropée
        );
      }
    }

    update(event) {

        this.setCurrentLoopIndex();
    
        switch (event) {
          case "ArrowRight":
  
            this.faceX = this.rightCycleLoop[this.currentLoopIndex].faceX;
            this.faceY = this.rightCycleLoop[this.currentLoopIndex].faceY;
            this.height = this.height_gd;
            this.width = this.width_gd;
            break;
    
          case "ArrowLeft":
            this.faceX = this.leftCycleLoop[this.currentLoopIndex].faceX;
            this.faceY = this.leftCycleLoop[this.currentLoopIndex].faceY;
            this.height = this.height_gd;
            this.width = this.width_gd;
            break;
    
          case "ArrowUp":
            this.faceX = this.upCycleLoop[this.currentLoopIndex].faceX;
            this.faceY = this.upCycleLoop[this.currentLoopIndex].faceY;
            this.height = this.height_hb;
            this.width = this.width_hb;
            break;
    
          case "ArrowDown":
            this.faceX = this.downCycleLoop[this.currentLoopIndex].faceX;
            this.faceY = this.downCycleLoop[this.currentLoopIndex].faceY;
            this.height = this.height_hb;
            this.width = this.width_hb;
            break;
    
          default:
            break;
        }

    }

  setCurrentLoopIndex(){
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.rightCycleLoop.length) {
      this.currentLoopIndex = 0;
    }
  }

}