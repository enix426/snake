export function aleatoire (){
    
    let allTr = document.querySelectorAll("tr");
    let randomTr = Math.round(Math.random() * Math.floor(allTr.length));
    let eTr = allTr[randomTr];

    while(randomTr >= allTr.length){
        randomTr = Math.round(Math.random() * Math.floor(allTr.length));
        eTr = allTr[randomTr]
    }
    //console.log("randomTr ",randomTr," eTr ",eTr," allTr.length ",allTr.length);

    let allTd = eTr.querySelectorAll("td");
    let randomTd = Math.round(Math.random() * Math.floor(allTd.length))
    let eTd = allTd[randomTd]

 return eTd; 
    
} 