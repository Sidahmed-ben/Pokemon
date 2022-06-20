
import {image_fin,combat1,liste_map,hero1,map_car,ctx,cnv,kyurem,combatant1,combatant2} from './main.js' ;

let dialogue_fin = false;
export let anim1 = true;
export let anim2 = false; 
export let anim3 = false;
export let anim4 = false;
export let anim5 = false;

export function animation1(i){
    liste_map[i].draw_map();
    hero1.draw();
    Draw_dialogue(map_car,i);
}

export function animation2(i){
    liste_map[i].draw_map();
    hero1.draw();
    kyurem.draw();
}

export function animation3(i){
    liste_map[i].draw_map();
    hero1.draw();
    if(dialogue_fin)
        draw_dialogue_fin(map_car,0);
}

export function animation4(i){
    liste_map[i].draw_map();
    liste_map[i].draw_dialogue(map_car,1);
    combatant1.draw_health_bar();
    combatant2.draw_health_bar();
    combatant1.draw_attack1();
    combatant2.draw_attack1();
    combatant1.draw_attack2();
    combatant2.draw_attack2();
    combatant1.draw_attack3();
}


export function animation5(){
    ctx.drawImage(image_fin,
        0,
        0,
        1024,
        576,
        0,
        0,
        cnv.width,
        cnv.height);
}

export function make_shadow(){
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 15
}

export function delete_shadow(){
    ctx.shadowBlur = 0
}

export function control_animation1(i){
  
    let time ; 
    setTimeout(function ( ){ 
        time = setInterval(hero1.update.bind(hero1),60,"ArrowLeft",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time)},4200); 
        },3000);

    setTimeout(function ( ){ 
                            time = setInterval(hero1.update.bind(hero1),60,"ArrowDown",kyurem,liste_map[i]) ;
                            setTimeout(function (){ clearInterval(time)},1700); 
                            },7700);

    setTimeout(function ( ){ 
        make_shadow();
        time = setInterval(hero1.update.bind(hero1),60,"ArrowRight",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time)},100); 
        },9900);
    
    setTimeout(function ( ){ 
        delete_shadow();
        time = setInterval(hero1.update.bind(hero1),60,"ArrowLeft",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time)},3000); 
        },19000);
    
    
    setTimeout(function ( ){ 
        time = setInterval( function(){ hero1.x = 1350 ; hero1.y = 650 ; anim1 = false; anim2 = true;},kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time)},100); 
        },22500);
    
    setTimeout(function ( ){ control_animation2(1);},23500);
}





export function control_animation2(i){
    let time2;
    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowLeft",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},1400); 
        },2000);

    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowDown",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},230); 
        },3900);
    
    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowLeft",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},4400); 
        },4630);

    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowDown",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},400); 
        },9530);
    
    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowLeft",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},1800); 
        },10430);

    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowUp",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},1500); 
        },12730);
    

    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowRight",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},600); 
        },14730);

    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowUp",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},1800); 
        },15830);
    
    
    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowDown",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},1800); 
        },25540);
    
    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowLeft",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},600); 
        },27840);


    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowDown",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},1500); 
        },28940);
        

    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowRight",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},1800); 
        },30940);


    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowUp",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},400); 
        },33240);

    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowRight",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},3000); 
        },34140);

    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowUp",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},2280); 
        },37640);

    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowRight",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},1800); 
        },40420);


    setTimeout(function ( ){ 
        time2 = setInterval(hero1.update.bind(hero1),60,"ArrowUp",kyurem,liste_map[i]) ;
        setTimeout(function (){ clearInterval(time2)},600); 
        },42720);
    
    setTimeout(function ( ){ ctx.shadowColor = 'black';
                             ctx.shadowBlur = 15; 
                             anim2 = false ; 
                             anim3 = true; 
                             hero1.draw_hero = false;
                             control_animation3(); }
                            ,43820);
    
}


export function control_animation3(){

    let time;
    setTimeout(function ( ){ 
        dialogue_fin = true;
        time = setInterval(function ( ){ ind_pos_x_dialogue = ind_pos_x_dialogue == 2 ? 0 : 2 ;
                                         ind_pos_y_dialogue = ind_pos_y_dialogue == 3 ? 1 : 3 ;  
                                         ind_msg = ind_msg == 12 ? 8 : ind_msg+1; 
                                        },5500);
        setTimeout(function (){ dialogue_fin = false ; clearInterval(time)},27000); 
        },2000);
    setTimeout(function (){ anim3 = false;  anim4 = true; control_animation4(); },30000); 
}


export function control_animation4(){
    setTimeout(combat1.mise_a_jour_message_combat.bind(combat1),5000);
    setTimeout(combatant1.draw_attack_3_off.bind(combatant1),6500,combatant2);
    setTimeout(combat1.mise_a_jour_message_combat.bind(combat1),9500);
    setTimeout(combatant2.draw_attack_2_off.bind(combatant2),11000,combatant1);
    setTimeout(combat1.mise_a_jour_message_combat.bind(combat1),14000);
    setTimeout(combatant1.draw_attack_1_off.bind(combatant1),15500,combatant2);
    setTimeout(combat1.mise_a_jour_message_combat.bind(combat1),18500);
    setTimeout(combatant2.draw_attack_1_off.bind(combatant2),20000,combatant1);
    setTimeout(combat1.mise_a_jour_message_combat.bind(combat1), 23000);
    setTimeout(combatant1.draw_attack_2_off.bind(combatant1),24500,combatant2);
    setTimeout(combat1.mise_a_jour_message_combat.bind(combat1), 26000);

    setTimeout(function() { anim4 = false ; 
                            anim5 = true; }
                            ,30000 );

}


export function Draw_dialogue(map_car,i){
    let dist_x = Math.pow(hero1.x - map_car.dialogue_point[i][0],2);
    let dist_y = Math.pow(hero1.y - map_car.dialogue_point[i][1],2);
    let dist = Math.sqrt(dist_x+dist_y);
    if( dist <= 30)
        hero1.isTalking = true;
    else
        hero1.isTalking = false;
        
    if(hero1.isTalking){
        liste_map[i].draw_dialogue(map_car,i);
    }
        
}


let ind_pos_x_dialogue = 2;
let ind_pos_y_dialogue = 3;
let ind_msg = 8;
export function draw_dialogue_fin(map_car){
    ctx.fillStyle="#4d4d4d";
    ctx.fillRect(map_car.dialogue_point[2][ind_pos_x_dialogue],map_car.dialogue_point[2][ind_pos_y_dialogue], 350 , 220);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 3;
    ctx.strokeRect(map_car.dialogue_point[2][ind_pos_x_dialogue], map_car.dialogue_point[2][ind_pos_y_dialogue], 350, 220);
    ctx.font = "italic small-caps bold 35px serif";
    ctx.fillStyle = "#FFFFFF";
    let x = map_car.dialogue_point[2][ind_pos_x_dialogue]+10;
    let y = map_car.dialogue_point[2][ind_pos_y_dialogue]+10;
    let msg = (map_car.messages_dialogue[ind_msg]).split('\n');
    for(let i = 0; i < msg.length; i += 1){
        y += 38;
        ctx.fillText(msg[i], x, y);
    }
}