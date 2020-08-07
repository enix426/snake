import {souris} from "./souris";
import {aleatoire} from "./utiliter";

export function serpent() {
    let random = aleatoire();
    while (random === undefined) {
        random = aleatoire();
    }
    random.style.backgroundColor = "green";

    //souris(aleatoire);
/* creation du corps du serpent*/
    let corpsSerpent = [];
    const longueurCorps = 2;
    let teteSerpent = random;
    corpsSerpent.push(teteSerpent);
    let valeurTete = teteSerpent.getAttribute("value");
    let eTableau = document.getElementById("tableau");
    let valeurTeteY = teteSerpent.parentElement.getAttribute("value");
    let direction = false;
    let interval = setInterval(function () {
        switch (direction) {
            case "droite":
                console.log("droite");

                valeurTete = parseInt(valeurTete, 10) + 1;
                teteSerpent = teteSerpent.parentElement.querySelectorAll("td")[valeurTete];
                break;
            case "gauche":
                console.log("gauche");
                valeurTete = parseInt(valeurTete, 10) - 1;
                teteSerpent = teteSerpent.parentElement.querySelectorAll("td")[valeurTete];
                break;
            case "haut":
                console.log("haut");
                valeurTeteY = parseInt(valeurTeteY, 10) - 1;
                teteSerpent = eTableau.querySelectorAll("tr")[valeurTeteY];
                if(teteSerpent != undefined){
                valeurTete = parseInt(valeurTete, 10);
                teteSerpent = teteSerpent.querySelectorAll("td")[valeurTete];
                }
                break;
            case "bas":
                console.log("bas");
                valeurTeteY = parseInt(valeurTeteY, 10) + 1;
                teteSerpent = eTableau.querySelectorAll("tr")[valeurTeteY];
                if(teteSerpent != undefined){
                    valeurTete = parseInt(valeurTete, 10);
                    teteSerpent = teteSerpent.querySelectorAll("td")[valeurTete];
                    }
                break;
            default:
                console.log("je ne bouge pas");
                break;
        }
        
        
        if(teteSerpent === undefined){
            console.log("je suis mort");
            arreteInterval();

        }else{
            corpsSerpent.push(teteSerpent);
            console.log(corpsSerpent);
            teteSerpent.style.backgroundColor = "green";
        }

        if(corpsSerpent.length > 2){
            
            corpsSerpent[0].style.backgroundColor = "white";
            corpsSerpent.shift();
        } 
        if(teteSerpent === document.getElementById("souris")){
            console.log("j'ai manger la souris");
            corpsSerpent.push(teteSerpent);
            souris(aleatoire);
        }

    }, 1000);
    document.addEventListener("keydown", event => {
        switch (event.keyCode) {
            case 39:
                direction = "droite";
                break;
            case 37:
                direction = "gauche";
                break;
            case 38:
                console.log("fleche haut");
                direction = "haut";
                break;
            case 40:
                console.log("fleche bas");
                direction = "bas";
                break;
        }
    })
    function arreteInterval(){
        clearInterval(interval);
    }
}