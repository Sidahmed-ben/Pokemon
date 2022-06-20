import {ctx,cnv} from './main.js'


export class Combat_env {
    constructor(map_name,map_width,map_height){
        this.pokemon1_img = new Image();
        this.pokemon1_img.src = './js/img/pokemon1.png';
        this.pokemon1 = false;
        this.pokemon2_img = new Image();
        this.pokemon2_img.src = './js/img/pokemon2.png';
        this.pokemon2 = false;
        this.map_src  = './js/img/'+map_name;
        this.map_width = map_width;
        this.map_height = map_height;
        this.background = new Image();
        this.background.src = this.map_src;
        this.indice_message_combat = 1;
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
                      cnv.height);
    }


    draw_dialogue(map_car) {
        ctx.strokeStyle = "#AAAAAA";
        ctx.lineWidth = 3;
        ctx.strokeRect(map_car.dialogue_point[1][0], map_car.dialogue_point[1][1], 1400, 200);
        ctx.font = "italic small-caps bold 40px serif";
        ctx.fillStyle = "#FFFFFF";
        let x = map_car.dialogue_point[1][2];
        let y = map_car.dialogue_point[1][3];
        let msg = (map_car.messages_dialogue[this.indice_message_combat]).split('\n');
        for(let i = 0; i < msg.length; i += 1){
            y += 50;
            ctx.fillText(msg[i], x, y);
        }
        if(this.pokemon1){
            ctx.drawImage(this.pokemon1_img,
                0,
                0,
                120,
                160,
                1200,
                480,
                220,
                220
            );
        }
        if(this.pokemon2){
            ctx.drawImage(this.pokemon2_img,
                0,
                0,
                63,
                94,
                1200,
                500,
                200,
                200
            );
        }

        // kyurem
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.strokeRect(500, 150, 110, 30);
        ctx.fillStyle="#a492ff";
        ctx.fillRect(500, 150, 110, 30);
        ctx.font = "italic small-caps bold 20px serif";
        ctx.fillStyle = "#000000";
        ctx.fillText("KYUREM", 510, 172);

        // Florizarre
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
        ctx.strokeRect(920, 200, 132, 30);
        ctx.fillStyle="#76FFAA";
        ctx.fillRect(920, 200, 132, 30);
        ctx.font = "italic small-caps bold 20px serif";
        ctx.fillStyle = "#000000";
        ctx.fillText("FLORIZARRE", 922,222 );
    }



    mise_a_jour_message_combat(){
        this.indice_message_combat = this.indice_message_combat == 7 ? 1 : this.indice_message_combat+1;
        this.pokemon1 =  this.pokemon1 == false ? true  : false ; 
        this.pokemon2 =  this.pokemon1 == true  ? false : true  ;
        if(this.indice_message_combat == 7){
            this.pokemon1 = true;
            this.pokemon2 = false;
        }
    }

}