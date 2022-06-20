import {ctx,cnv} from './main.js'
import {hero1,kyurem} from './main.js'

export class New_map {
    constructor(map_name,map_width,map_height,dessin_boul){
        this.pokemon_boule_img = new Image();
        this.pokemon_boule_img.src = './js/img/boul_pok.png';
        this.pokemon_boule_img_anim = new Image();
        this.pokemon_boule_img_anim.src = './js/img/my_pok_boule.png';
        this.kyurem_img_anim = new Image();
        this.kyurem_img_anim.src = './js/img/keryuma_anim_img.png';
        this.dessin_boul = dessin_boul;
        this.kyurem_anim = false;
        this.dessin_anim_boul = false;
        this.map_width = map_width;
        this.map_height = map_height;
        this.background = new Image();
        this.background.src = './js/img/'+map_name;
    }

    draw_map(){
        ctx.drawImage(this.background,
                      0,
                      0,
                      this.map_width,
                      this.map_height,
                      0,
                      0,
                      cnv.width,
                      cnv.height
                    );
        this.draw_pok_boule();
        this.dessin_anim_boule();
    }


    draw_pok_boule(){
        if(this.dessin_boul){
            ctx.drawImage(this.pokemon_boule_img,
                55,
                5,
                22,
                18,
                230,
                170,
                30,
                30
            );
        }
    }

    dessin_anim_boule(){
        if(this.dessin_anim_boul){
            hero1.draw_hero = false;
            let that = this;
            ctx.drawImage(that.pokemon_boule_img_anim,
                0,
                0,
                800,
                450,
                0,
                0,
                cnv.width,
                cnv.height);
            if(this.kyurem_anim){
                ctx.drawImage(that.kyurem_img_anim,
                    0,
                    0,
                    1400,
                    800,
                    0,
                    0,
                    cnv.width,
                    cnv.height);
                }
            setTimeout(function(){that.kyurem_anim = true;},3000);    
            setTimeout(function(){that.dessin_anim_boul = false; hero1.draw_hero = true; kyurem.pokemon_draw = true;},6000);
        }
    }



    draw_dialogue(map_car,i) {

        ctx.fillStyle="#4d4d4d";
        ctx.fillRect(map_car.dialogue_point[i][2],map_car.dialogue_point[i][3], 490 , 200);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.strokeRect(map_car.dialogue_point[i][2], map_car.dialogue_point[i][3], 490, 200);
        ctx.font = "italic small-caps bold 21px serif";
        ctx.fillStyle = "#FFFFFF";
        let x = map_car.dialogue_point[i][2];
        let y = map_car.dialogue_point[i][3];
        
        let msg = (map_car.messages_dialogue[i]).split('\n');
        for(let i = 0; i < msg.length; i += 1){
            y += 25;
            ctx.fillText(msg[i], x, y);      
        }
    }

}