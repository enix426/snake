export function aleatoire (){
    
        let allTd = document.querySelectorAll("td");
        let random = Math.round(Math.random() * Math.floor(allTd.length));
    return random;
    
} 