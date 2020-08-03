export function tableauJeu (axeY,axeX){
    let eTableau = document.getElementById("tableau");

    let compte = 0;
    for(let i = 0; i < axeY; i++){
        let eTr = document.createElement("tr");
        eTableau.appendChild(eTr);
        for(let i = 0; i < axeX; i++){
            let eTd = document.createElement("td");
            eTd.setAttribute("id","case"+compte);
            eTr.appendChild(eTd);
            compte++;
        } 

    }

}