import { Hero } from "./hero.js";
import {New_map} from "./New_map.js";
import {Data} from "./Data.js";
import {Combat_env} from "./Combat_env.js"
import {Combatant} from "./Combatant.js"
import { Attack } from "./Attack.js";
import { Pokemon  } from "./Pokemon.js";
import * as scenario from "./Scenario.js";

export let cnv = document.getElementById("myCanvas");
export let  ctx = cnv.getContext("2d");
cnv.style.position = "absolute";
cnv.style.left ='240px';
cnv.style.top = '80px';


export let hero1 = new Hero('Sacha.png');
export let combat1 = new Combat_env('combat1.png',1280,720);
let attack1 = new Attack(1);
let attack2 = new Attack(2);
export let combatant1 = new Combatant(1,attack1);
export let combatant2 = new Combatant(2,attack2);
let map1 = new New_map('map1.jpg',1400,800,false);
let map2 = new New_map('map2.png',2208,1253,true);
let map3 = new New_map('map3.jpg',672,512,false);
export let kyurem = new Pokemon('kyurem.png');
export let image_fin = new Image() ;
image_fin.src = './js/img/pokemon_fin_image.png';
export let map_car = new Data();
export let liste_map = [];


liste_map.push(map1);
liste_map.push(map2);
liste_map.push(map3);
liste_map.push(combat1);


function loop () {
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    if(scenario.anim1){
        scenario.animation1(0);
        // control_animation1();
    }else

    if(scenario.anim2){
        scenario.animation2(1);
        // control_animation2();
    }else

    if(scenario.anim3){
        scenario.animation3(2);
        // control_animation1();
    }else

    if(scenario.anim4){
        scenario.animation4(3);
        // control_animation1();
    }else

    if(scenario.anim5){
        scenario.animation5();
    }
    requestAnimationFrame(loop);
}


scenario.control_animation1(0);
requestAnimationFrame(loop);






