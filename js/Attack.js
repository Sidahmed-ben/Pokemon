export class Attack{

    constructor (indice){
        this.indice = indice;
        if(this.indice == 1){
            // initialiser l'attack3
            this.timer_attack_3_1 = 0;
            this.bool_attack_3_1 = false;
            this.attack_3_1 = new Image();
            this.attack_3_1.src = './js/img/attack3.png';
            this.attack_3_1_width  =  77;
            this.attack_3_1_height =  33;
            this.current_attack_3_1 = 0;
            this.faceX_attack_3_1 = 278;
            this.faceY_attack_3_1 = 297;
            this.tab_attack_3_1 = [{faceX : 278,faceY:297},{faceX : 260,faceY:330}];
            this.attack_3_1_x = 400;
            this.attack_3_1_y = 300; 
            this.att_larg_attack_3_1 = 200;
            this.att_haut_attack_3_1 = 150;

            // initialiser l'attack2
            this.timer_attack_2_1 = 0;
            this.bool_attack_2_1 = false;
            this.attack_2_1 = new Image();
            this.attack_2_1.src = './js/img/attack2.png';
            this.attack_2_1_width  =  61
            this.attack_2_1_height =  100
            this.current_attack_2_1 = 0;
            this.faceX_attack_2_1 = 278;
            this.faceY_attack_2_1 = 214;
            this.tab_attack_2_1 = [{faceX : 278,faceY:214},{faceX : 343,faceY:214}];
            this.attack_2_1_x = 400;
            this.attack_2_1_y = 300;          // console.log("je suis dans  la condition ");
            this.att_larg = 200;
            this.att_haut = 200;

            // initialiser l'attack1
            this.timer_attack_1_1 = 0;
            this.bool_attack_1_1 = false;
            this.attack_1_1 = new Image();
            this.attack_1_1.src = './js/img/attack1.png';
            this.attack_1_1_width  =  42
            this.attack_1_1_height =  38
            this.current_attack_1_1 = 0;
            this.faceX_attack_1_1 = 172;
            this.faceY_attack_1_1 = 0;
            this.tab_attack_1_1 = [{faceX : 172,faceY:0},{faceX : 94,faceY:100}];
            this.attack_1_1_x = 400;
            this.attack_1_1_y = 300; 
            this.att_larg = 200;
            this.att_haut = 200;
            
        }
        else if(this.indice == 2){

            // initialiser l'attaque 2
            this.timer_attack_2_2 = 0;
            this.bool_attack_2_2 = false;
            this.attack_2_2 = new Image();
            this.attack_2_2.src = './js/img/attack2.png';
            this.attack_2_2_width  =  46
            this.attack_2_2_height =  94
            this.current_attack_2_2 = 0;
            this.faceX_attack_2_2 = 127;
            this.faceY_attack_2_2 = 463;
            this.tab_attack_2_2 = [{faceX : 127,faceY:463},{faceX : 35,faceY:466}];
            this.attack_2_2_x = 750;
            this.attack_2_2_y = 290; 
            this.att_larg = 200;
            this.att_haut = 200;

             // initialiser l'attack1
             this.timer_attack_1_2 = 0;
             this.bool_attack_1_2 = false;
             this.attack_1_2 = new Image();
             this.attack_1_2.src = './js/img/attack1.png';
             this.attack_1_2_width  =  42
             this.attack_1_2_height =  38
             this.current_attack_1_2 = 0;
             this.faceX_attack_1_2 = 0;
             this.faceY_attack_1_2 = 49;
             this.tab_attack_1_2 = [{faceX : 0,faceY:49},{faceX : 94,faceY:100}];
             this.attack_1_2_x = 710;
             this.attack_1_2_y = 320; 
             this.att_larg = 200;
             this.att_haut = 200;
        }
    }
}