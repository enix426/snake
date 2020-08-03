export function serpent(aleatoire){

    let eTd = document.getElementById("case"+aleatoire);

     if(eTd == null){
        aleatoire = aleatoire -1;
        eTd = document.getElementById("case"+aleatoire)
    } 
    
    eTd.style.backgroundColor = "green";
    console.log("je suis serpent ", eTd);
}