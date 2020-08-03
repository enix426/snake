export function souris (aleatoire) {


    let eTd = document.getElementById("case"+aleatoire);

     if(eTd == null){
        aleatoire = aleatoire -1;
        eTd = document.getElementById("case"+aleatoire)
    } 

    console.log("je suis souris ", eTd);
    eTd.style.backgroundColor = "red";
}