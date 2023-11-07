let rankedTotal = calculateWins(1985, 1723);
let heroLevel = ""
function rankedTotal(wins, defeats) {
    let totalWins = wins - defeats; 
    return totalWins;
}

if (rankedTotal <= 10) {
    heroLevel = "Ferro"
    }
    else if (rankedTotal >= 11 && xp <= 20){
        heroLevel ="Bronze"
    }    
    else if (rankedTotal >= 21 && xp <= 50){
        heroLevel = "Prata"
    }
    else if (rankedTotal >= 51 && xp <= 80){ 
        heroLevel = "Ouro"
    }
    else if (rankedTotal >= 81 && xp<= 90){
        heroLevel ="Diamante" 
    }
     else if(rankedTotal >= 90 && xp <= 100){
        heroLevel ="Lendário"
     }    
    else if (rankedTotal > 100){
        heroLevel ="Imortal"
    }

console.log ("O Herói tem o saldo de " + totalWins + " vitórias e está no nível de " + heroLevel )
