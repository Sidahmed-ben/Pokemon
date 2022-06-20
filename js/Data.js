export class  Data {

    constructor(){
        this.dialogue_point = [ 
            //map1  position dialogue 
            [320,420 /** position de hero pour afficher le message  */    ,400,200 /** position du rectangle contenant le message*/],
            
            // Les messages du combats 
            [ 0, 600    /** position du la bordure qui contient le message   */  ,100,640  /** position du texte dans le combat*/],
            
            [750, 550,  /* position du dialogue 1 (Sacha) dans la chambre de batail */  270,70 /* position du dialogue 2 (Méchante) dans la chambre de batail  */  ]
            
        ]

        this.messages_dialogue = [ 
                                // Message du vieux .
                                // 0
                                " Bonjour Sacha !!\n Aujourd'hui tu as une grande mission c'est\n sauver Pikachu, et pour cela il te faut 2 choses :\n 1- Trouver le pokemon KYUREM. \n 2-Trouver le grand chateau ou se trouve Pikachu.\n\n Bonne chance. ",

                                // Messages du combat
                                " COMMENÇONS  LA  PARTIE  !!! ", // 1
                                " Le  'KYUREM'  attaque en premier :\n 'Boule De Feu'   " , // 2
                                " Le  'FLORIZARRE' attaque   :\n   'Force Nature'   ", // 3
                                " Le  'KYUREM'  attaque une deuxiéme fois  :\n  'Attaque Rapide'  ", // 4
                                " Le  'FLORIZARRE' rèattaque :\n  'Attaque Rapide'  ",  // 5
                                " Le  'KYUREM'  réattaque :\n  'Draco-Météore'  Peut être que c'est la derniére ! ", // 6
                                "   Bravo  'SACHA' a gagné le combat avec son pokemon 'KYUREM'  !!  ", // 7

                                // Dialogue entre Sacha et la méchante.
                                " Enfin tu es la !!\n Tu es venu pour\n Pikachu je suppose\n !? ", // 8
                                " J'ai pas de temps à\n perdre ici donne moi\n Pikachu !!", // 9
                                " Hahaha !! Non Non,\n ça ne se passe pas\n comme ça !!\n  Prépare toi pour\n le combat. \n", //10
                                " Tu veux un combat !!\n ok !! Moi je suis \n toujours prêt.\n", // 11
                                " Lool !! tu es trés\n confiant mon petit\n on va voir qui va\n gagner.... " // 12
                            ]

    }
}