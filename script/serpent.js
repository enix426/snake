export function serpent(aleatoire){


   let random = aleatoire();

    
   while(random === undefined){
      random = aleatoire();
   }
   random.style.backgroundColor = "green";

    document.addEventListener("keydown", event => {

       let teteSerpent = random;
       console.log(teteSerpent);
       let valeurTete = teteSerpent.getAttribute("value");
       console.log(valeurTete);

    if (event.keyCode === 39) {
        
       valeurTete = parseInt(valeurTete, 10) + 1;
       console.log(teteSerpent.parentElement.querySelectorAll("td")[valeurTete]);
       teteSerpent.parentElement.querySelectorAll("td")[valeurTete].style.backgroundColor = "green";
    } 
    if (event.keyCode ===  37) {
       valeurTete = parseInt(valeurTete, 10) - 1;
       console.log(teteSerpent.parentElement.querySelectorAll("td")[valeurTete]);
       teteSerpent.parentElement.querySelectorAll("td")[valeurTete].style.backgroundColor = "green";
    } 
    })
}