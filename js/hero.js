import { ctx , cnv} from './main.js';

// classe du héros
export class Hero {

 // Constructeur de la classe du héros...
 constructor(params) {
    this.draw_hero = true;
    this.characterImg = new Image();
    this.characterImg.src = './js/img/'+params // Récupère l'objet image du héros
    this.isTalking = false; // Proprité qui spécifie si le héros est en train de parler
    /* propriétés communes sprites animés */
    this.width = 50; // Largeur du héros en pixel
    this.height = 50; // Hauteur du héros en pixel
    this.x = 1000  // Position X sur le canvas
    this.y = 130  // Position Y sur le canvas
    this.centerX = (this.x + this.width / 2);// Centre X
    this.centerY = (this.y + this.height / 2); // Centre Y
    this.speedX = 10; // Vitesse du héros quand il se déplace en abscisse
    this.speedY = 10; // Vitesse du héros quand il se déplace en ordonnée
    this.faceX = 0; // Coordonnées X du morceau d'image à cropper sur l'image du héros
    this.faceY = 0; // Coordonnées Y du morceau d'image à cropper sur l'image du héros
    this.currentLoopIndex = 0;
    this.rightCycleLoop = [{faceX:0,faceY:128}, {faceX:64,faceY:128},{faceX:128,faceY:128},{faceX:192,faceY:128}];
    this.leftCycleLoop  = [{faceX:0,faceY:64},  {faceX:64,faceY:64},{faceX:128,faceY:64},{faceX:192,faceY:64}];
    this.upCycleLoop    = [{faceX:0,faceY:192}, {faceX:64,faceY:192},{faceX:128,faceY:192},{faceX:192,faceY:192}];
    this.downCycleLoop  = [{faceX:0,faceY:0}, {faceX:64,faceY:0},{faceX:128,faceY:0},{faceX:192,faceY:0}];
  }

  // Méthode pour afficher le héros
  draw() { 
    if(this.draw_hero)
    ctx.drawImage(
      this.characterImg,
      this.faceX , // Position X de la partie à croper
      this.faceY , // Position Y de la partie à croper
      64 , // Largeur de la partie à croper
      64 , // Hauteur de la partie à corper
      this.x, // Position x d'affichage sur le canvas
      this.y, // Position y d'affichage sur le canvas
      this.width, // Largeur de la partie cropée
      this.height // Hauteur de la partie cropée
    );


  }

  // Méthode qui va modifier les coordonnées du héros.
  update(event,kyurem,map) {
    this.setCurrentLoopIndex();
    let dist = 0;
    switch (event) {
      case "ArrowRight":
      if(this.x >= cnv.width-this.width)
        return

        this.x = (this.x + this.speedX);
        if(kyurem.pokemon_draw){
            dist = this.x-kyurem.x;
            if(Math.abs(dist) > 50){
              kyurem.x = this.x-50; 
              kyurem.update(event);
            }
        }
        this.faceX = this.rightCycleLoop[this.currentLoopIndex].faceX;
        this.faceY = this.rightCycleLoop[this.currentLoopIndex].faceY;
        break;

      case "ArrowLeft":
      if(this.x == 0)
        return;
        this.x = (this.x - this.speedX);
        
        if(kyurem.pokemon_draw){
          dist = this.x-kyurem.x;
          if(Math.abs(dist) > 50){
            kyurem.x = this.x+50;
            kyurem.update(event);
          }
        }
        this.faceX = this.leftCycleLoop[this.currentLoopIndex].faceX;
        this.faceY = this.leftCycleLoop[this.currentLoopIndex].faceY;
        break;

      case "ArrowUp":
      if(this.y == 0 )
        return
        this.y = this.y - (this.speedY);
        if(kyurem.pokemon_draw){
          dist = this.y-kyurem.y;
          if(Math.abs(dist) > 50){
            kyurem.y = this.y+50; 
            kyurem.update(event);
          }
        }       
        this.faceX = this.upCycleLoop[this.currentLoopIndex].faceX;
        this.faceY = this.upCycleLoop[this.currentLoopIndex].faceY;
        break;

      case "ArrowDown":
      
      if(this.y >= cnv.height-this.height)
        return

        this.y = this.y + this.speedY;
        if(kyurem.pokemon_draw){
          dist = this.y-kyurem.y;
          if(Math.abs(dist) > 50){
            kyurem.y = this.y-50;
            kyurem.update(event);
          }
        }
        this.faceX = this.downCycleLoop[this.currentLoopIndex].faceX;
        this.faceY = this.downCycleLoop[this.currentLoopIndex].faceY;
        break;

      default:
        break;
    }

    this.pokemon_boul_verif(map);
  }

  pokemon_boul_verif(map){
    let dist_x = this.x - 230;
    let dist_y = this.y - 170;
    let dist = Math.sqrt(Math.pow(dist_x,2)+ Math.pow(dist_y,2)); 
    if(map.dessin_boul && dist <= 50){
      setTimeout(function(){ map.dessin_anim_boul = true;  map.dessin_boul = false; },1000);
    }
  }

  // Méthode qui renseigne l'index de la séquence de marche
  setCurrentLoopIndex(){
    this.currentLoopIndex++;
    // Si l'index est supérieur au nombre de position possible on le repositionne à zero
    if (this.currentLoopIndex >= this.rightCycleLoop.length) {
      this.currentLoopIndex = 0;
    }
  }

}
