
let isIgnite = false
function changeCard(event) {
  const card = event.currentTarget
  const bg = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}

// joking whith switch case bellow

let corfundo;
corfundo = prompt("Quem será atrás destas cortinas ?????");

switch(corfundo) {
  case "verde":  
    alert("Essa cor é do IGNITE!"); 
    break;
  case"roxo" || "roxo": 
    alert("Essar cor é do EXPLORER!");
   break;
  case "branco":
    alert("Essa cor iremos implementar!");
    break;
  default: // padrão - ausencia de dados
    alert("BUNITOOOOOOOOOO!");
    break;

}