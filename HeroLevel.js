let heroName = "Chres"
let xp = 823
let heroLevel = ""

if (xp <= 1000){
    heroLevel = "Ferro"
  }  
  else if (xp >= 1001 && xp <= 2000){
      heroLevel ="Bronze"
  }    
  else if (xp >= 2001 && xp <= 5000){
      heroLevel = "Prata"
  }
  else if (xp >= 5001 && xp <= 7000){ 
      heroLevel = "Ouro"
  }
  else if (xp >= 7001 && xp<= 8000){
      heroLevel ="Platina" 
  }
   else if(xp >= 8001 && xp <= 9000){
      heroLevel ="Ascendente"
   }    
  else if (xp >= 9001 && xp<= 10000){
      heroLevel ="Imortal"
  }      
  else if(xp >= 10000){
      heroLevel="Radiante"
}  

console.log("O heroi de nome " + heroName + " está no nivel " + heroLevel )