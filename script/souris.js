export function souris (aleatoire) {


    let random = aleatoire();
    while (random === undefined || random.style.backgroundColor === "green") {
        random = aleatoire();
    }

    random.style.backgroundColor = "#708090";
    random.setAttribute("id","souris");
    
   
}