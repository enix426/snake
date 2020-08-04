export function serpent(aleatoire) {


    let random = aleatoire();


    while (random === undefined) {
        random = aleatoire();
    }
    random.style.backgroundColor = "green";

    document.addEventListener("keydown", event => {

        let teteSerpent = random;
        
        let valeurTete = teteSerpent.getAttribute("value");

        let valeurTeteY = teteSerpent.parentElement.getAttribute("value");
        
        switch(event.keyCode){
            case 39:
                valeurTete = parseInt(valeurTete, 10) + 1;
                teteSerpent.parentElement.querySelectorAll("td")[valeurTete].style.backgroundColor = "green";
            break;

            case 37:
                valeurTete = parseInt(valeurTete, 10) - 1;
                teteSerpent.parentElement.querySelectorAll("td")[valeurTete].style.backgroundColor = "green";
            break;
            case 38:
                console.log("fleche haut");
                
                valeurTeteY = parseInt(valeurTeteY, 10) - 1 ;
                teteSerpent = teteSerpent.parentElement.parentElement.querySelectorAll("tr")[valeurTeteY];
                valeurTete = parseInt(valeurTete, 10)
                console.log(teteSerpent.querySelectorAll("td")[valeurTete]);
                teteSerpent.querySelectorAll("td")[valeurTete].style.backgroundColor = "green";
            break;
            case 40:
                console.log("fleche bas");
                valeurTeteY = parseInt(valeurTeteY, 10) + 1 ;
                teteSerpent = teteSerpent.parentElement.parentElement.querySelectorAll("tr")[valeurTeteY];
                valeurTete = parseInt(valeurTete, 10)
                console.log(teteSerpent.querySelectorAll("td")[valeurTete]);
                teteSerpent.querySelectorAll("td")[valeurTete].style.backgroundColor = "green";
            break;
        }
    }
    )}