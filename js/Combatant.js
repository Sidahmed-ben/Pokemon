
import { ctx } from './main.js';

export class Combatant{

    constructor(indice,attack){
        this.health_bar = new Image();
        this.health_bar.src  = './js/img/health_bar.png';
        this.health_bar_width  = 610;
        this.health_bar_height = 270;
        this.indice  = indice
        if(this.indice == 1){
            this.attack = attack;
            // initialiser health bar
            this.health_bar_x = 300;
            this.health_bar_y = 150;
            this.health_bar_w = 300;
            this.health_bar_h = 100;
        }
        else if(this.indice == 2){
            this.attack = attack;
            // initialisation des health_bar
            this.health_bar_x = 780;
            this.health_bar_y = 210;
            this.health_bar_w = 250;
            this.health_bar_h = 80;
        }

        this.faceX = 0;
        this.faceY = 0;
        this.curent_healt_ind = 0;
        this.health_bar_coord  =  [{faceX:0,faceY:0}, {faceX:0,faceY:540},{faceX:610,faceY:270},{faceX:610,faceY:540}];

        this.image_perdu = new Image();
        this.image_perdu.src = './js/img/fin_combat.png' ;
        this.perdu = false;

    }


    draw_health_bar(){            
        ctx.drawImage(
            this.health_bar,
            this.faceX , 
            this.faceY , 
            this.health_bar_width , 
            this.health_bar_height, 
            this.health_bar_x, 
            this.health_bar_y, 
            this.health_bar_w , 
            this.health_bar_h 
        );

        if(this.perdu){
            ctx.drawImage(
                this.image_perdu,
                0, 
                0 , 
                94 ,
                98, 
                900, 
                240, 
                300 , 
                300 
            );

        }
    }

    health_plus(){
        if(this.curent_healt_ind == 0)
            return
        this.curent_healt_ind--;
        this.faceX = this.health_bar_coord[this.curent_healt_ind].faceX;
        this.faceY = this.health_bar_coord[this.curent_healt_ind].faceY;
    }

    health_minus(){
        if(this.curent_healt_ind == 2){
            this.perdu = true;
        }
        this.curent_healt_ind++;
        this.faceX = this.health_bar_coord[this.curent_healt_ind].faceX;
        this.faceY = this.health_bar_coord[this.curent_healt_ind].faceY;

    }

    draw_attack1(){
       if(this.attack.indice == 1){
        if(!this.attack.bool_attack_1_1)
            return
        ctx.drawImage(
            this.attack.attack_1_1,
            this.attack.faceX_attack_1_1 , 
            this.attack.faceY_attack_1_1 , 
            this.attack.attack_1_1_width , 
            this.attack.attack_1_1_height, 
            this.attack.attack_1_1_x, 
            this.attack.attack_1_1_y, 
            this.attack.att_larg, 
            this.attack.att_haut  
        ); 


       }else if (this.attack.indice == 2){
            if(!this.attack.bool_attack_1_2)
                return
            ctx.drawImage(
                this.attack.attack_1_2,
                this.attack.faceX_attack_1_2 , 
                this.attack.faceY_attack_1_2 , 
                this.attack.attack_1_2_width , 
                this.attack.attack_1_2_height, 
                this.attack.attack_1_2_x, 
                this.attack.attack_1_2_y, 
                this.attack.att_larg, 
                this.attack.att_haut  
            ); 
        }
       

    }


    draw_attack2(){
        if(this.attack.indice == 1){
         if(!this.attack.bool_attack_2_1)
             return
         ctx.drawImage(
             this.attack.attack_2_1,
             this.attack.faceX_attack_2_1 , 
             this.attack.faceY_attack_2_1 , 
             this.attack.attack_2_1_width , 
             this.attack.attack_2_1_height, 
             this.attack.attack_2_1_x, 
             this.attack.attack_2_1_y, 
             this.attack.att_larg, 
             this.attack.att_haut  
            ); 
 
        }
        else if (this.attack.indice == 2){
             if(!this.attack.bool_attack_2_2)
                 return
             ctx.drawImage(
                 this.attack.attack_2_2,
                 this.attack.faceX_attack_2_2 , 
                 this.attack.faceY_attack_2_2 , 
                 this.attack.attack_2_2_width , 
                 this.attack.attack_2_2_height, 
                 this.attack.attack_2_2_x, 
                 this.attack.attack_2_2_y, 
                 this.attack.att_larg, 
                 this.attack.att_haut  
             ); 
         }
        
 
    }

    draw_attack3(){
        if(this.attack.indice == 1){
         if(!this.attack.bool_attack_3_1)
             return
         ctx.drawImage(
             this.attack.attack_3_1,
             this.attack.faceX_attack_3_1 , 
             this.attack.faceY_attack_3_1 , 
             this.attack.attack_3_1_width , 
             this.attack.attack_3_1_height, 
             this.attack.attack_3_1_x, 
             this.attack.attack_3_1_y, 
             this.attack.att_larg_attack_3_1, 
             this.attack.att_haut_attack_3_1  
            ); 
 
        }
    }




    mise_a_jour_attack1(that,combatant){
        if(that.indice == 1){
            that.attack.attack_1_1_x += 10;
            if(that.attack.attack_1_1_x == 720 ){
                that.attack.attack_1_1_x += 150;
                that.attack.attack_1_1_y -= 50 ;
                that.attack.faceX_attack_1_1 = that.attack.tab_attack_1_1[1].faceX;
                that.attack.faceY_attack_1_1 = that.attack.tab_attack_1_1[1].faceY;
                that.attack.att_larg = 350;
                that.attack.att_haut = 350;
            }else if(that.attack.attack_1_1_x == 880){

                setTimeout(function (){
                    clearInterval(that.attack.timer_attack_1_1);
                    that.attack.faceX_attack_1_1 = that.attack.tab_attack_1_1[0].faceX;
                    that.attack.faceY_attack_1_1 = that.attack.tab_attack_1_1[0].faceY;
                    that.attack.attack_1_1_x = 400;
                    that.attack.attack_1_1_y = 300; 
                    that.attack.bool_attack_1_1 = false;
                    that.attack.att_larg = 200;
                    that.attack.att_haut = 200;
                    combatant.health_minus();
                }, 80);
            }
        
       
        }else if(that.indice == 2){
            
            that.attack.attack_1_2_x -= 10;
            if(that.attack.attack_1_2_x == 400 ){
                that.attack.attack_1_2_x -= 150;
                that.attack.attack_1_2_y -= 50 ;
                that.attack.faceX_attack_1_2 = that.attack.tab_attack_1_2[1].faceX;
                that.attack.faceY_attack_1_2 = that.attack.tab_attack_1_2[1].faceY;
                that.attack.att_larg = 350;
                that.attack.att_haut = 350;
            }else if(that.attack.attack_1_2_x == 240){

                setTimeout(function (){
                    clearInterval(that.attack.timer_attack_1_2);
                    that.attack.faceX_attack_1_2 = that.attack.tab_attack_1_2[0].faceX;
                    that.attack.faceY_attack_1_2 = that.attack.tab_attack_1_2[0].faceY;
                    that.attack.attack_1_2_x = 690;
                    that.attack.attack_1_2_y = 320; 
                    that.attack.bool_attack_1_2 = false;
                    that.attack.att_larg = 250;
                    that.attack.att_haut = 250;
                    combatant.health_minus();
                }, 80);
            }
        }
    }






    mise_a_jour_attack2(that,combatant){
        if(that.indice == 1){
            that.attack.attack_2_1_x += 10;
            if(that.attack.attack_2_1_x == 720 ){
                that.attack.attack_2_1_x += 100;
                that.attack.attack_2_1_y -= 50 ;
                that.attack.faceX_attack_2_1 = that.attack.tab_attack_2_1[1].faceX;
                that.attack.faceY_attack_2_1 = that.attack.tab_attack_2_1[1].faceY;
                that.attack.att_larg = 300;
                that.attack.att_haut = 300;
            }else if(that.attack.attack_2_1_x == 830){

                setTimeout(function (){
                    clearInterval(that.attack.timer_attack_2_1);
                    that.attack.faceX_attack_2_1 = that.attack.tab_attack_2_1[0].faceX;
                    that.attack.faceY_attack_2_1 = that.attack.tab_attack_2_1[0].faceY;
                    that.attack.attack_2_1_x = 400;
                    that.attack.attack_2_1_y = 300; 
                    that.attack.bool_attack_2_1 = false;
                    that.attack.att_larg = 200;
                    that.attack.att_haut = 200;
                    combatant.health_minus();
                }, 80);
            }
        }


        else if(that.indice == 2){
            
            that.attack.attack_2_2_x -= 10;
            if(that.attack.attack_2_2_x == 400 ){
                that.attack.attack_2_2_x -= 150;
                that.attack.attack_2_2_y -= 50 ;
                that.attack.faceX_attack_2_2 = that.attack.tab_attack_2_2[1].faceX;
                that.attack.faceY_attack_2_2 = that.attack.tab_attack_2_2[1].faceY;
                that.attack.att_larg = 350;
                that.attack.att_haut = 350;
            }else if(that.attack.attack_2_2_x == 240){

                setTimeout(function (){
                    clearInterval(that.attack.timer_attack_2_2);
                    that.attack.faceX_attack_2_2 = that.attack.tab_attack_2_2[0].faceX;
                    that.attack.faceY_attack_2_2 = that.attack.tab_attack_2_2[0].faceY;
                    that.attack.attack_2_2_x = 750;
                    that.attack.attack_2_2_y = 290; 
                    that.attack.bool_attack_2_2 = false;
                    that.attack.att_larg = 200;
                    that.attack.att_haut = 200;
                    combatant.health_minus();
                }, 80);
            }
        }
    }


    
    mise_a_jour_attack3(that,combatant){
        if(that.indice == 1){
            that.attack.attack_3_1_x += 10;
            if(that.attack.attack_3_1_x == 720 ){
                that.attack.attack_3_1_x += 100;
                that.attack.attack_3_1_y -= 100 ;
                that.attack.faceX_attack_3_1 = that.attack.tab_attack_3_1[1].faceX;
                that.attack.faceY_attack_3_1 = that.attack.tab_attack_3_1[1].faceY;
                that.attack.att_larg_attack_3_1 = 500;
                that.attack.att_haut_attack_3_1 = 500;

            }else if(that.attack.attack_3_1_x == 830){
                setTimeout(function (){
                    clearInterval(that.attack.timer_attack_3_1);
                    that.attack.faceX_attack_3_1 = that.attack.tab_attack_3_1[0].faceX;
                    that.attack.faceY_attack_3_1 = that.attack.tab_attack_3_1[0].faceY;
                    that.attack.attack_3_1_x = 400;
                    that.attack.attack_3_1_y = 300; 
                    that.attack.bool_attack_3_1 = false;
                    that.attack.att_larg_attack_3_1 = 200;
                    that.attack.att_haut_attack_3_1 = 150;
                    combatant.health_minus();
                }, 80);
            }
        }
    }

    draw_attack_1_off(combatant){
        let that = this;
        if(this.indice == 1){
            this.attack.bool_attack_1_1 = true;
            this.attack.timer_attack_1_1 = setInterval(this.mise_a_jour_attack1, 30,that,combatant);
        }else if (this.indice == 2 ){
            this.attack.bool_attack_1_2 = true;
            this.attack.timer_attack_1_2 = setInterval(this.mise_a_jour_attack1, 30,that,combatant);
        }
    }

    draw_attack_2_off(combatant){
        let that = this;
        if(this.indice == 1){
            this.attack.bool_attack_2_1 = true;
            this.attack.timer_attack_2_1 = setInterval(this.mise_a_jour_attack2, 30,that,combatant);
        }
        else if (this.indice == 2 ){
            this.attack.bool_attack_2_2 = true;
            this.attack.timer_attack_2_2 = setInterval(this.mise_a_jour_attack2, 30,that,combatant);
        }
    }
    

    draw_attack_3_off(combatant_adv){
        let that = this;
        if(this.indice == 1){
            this.attack.bool_attack_3_1 = true;
            this.attack.timer_attack_3_1 = setInterval(this.mise_a_jour_attack3, 30,that,combatant_adv);
        }
    }

}