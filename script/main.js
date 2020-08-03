import {tableauJeu} from "./tableauJeu";
import {serpent} from "./serpent";
import {souris} from "./souris";
import {aleatoire} from "./utiliter";
console.log("main");

let eDemarrer = document.getElementById("demarrer");
eDemarrer.addEventListener("click",function(){



    let eTableau = document.getElementById("tableau");
        eTableau.innerHTML = "";

    let eHauteur = document.getElementById("hauteur");
    let eLongueur = document.getElementById("longueur");

    tableauJeu(eHauteur.value,eLongueur.value);

    
    serpent(aleatoire());
    souris(aleatoire());


});




