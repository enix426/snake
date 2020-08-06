export function serpent(eHauteur,eLongueur,aleatoire) {
    let random = aleatoire();
    while (random === undefined) {
        random = aleatoire();
    }
    random.style.backgroundColor = "green";
    let teteSerpent = random;
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
        console.log(teteSerpent);

        
        if(teteSerpent === undefined){
            console.log("je suis mort");
            arreteInterval();

        } 

        teteSerpent.style.backgroundColor = "green";
        console.log("teteSerpent",teteSerpent);
        console.log(eTableau.querySelectorAll("tr").length);
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