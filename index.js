// déclaration des variables a utiliser
let val1 = "";
    val2 = "";
    som = ""; 

// gestion de saisie
const saisieValeur = () => {
   val1 = parseFloat(prompt("saisir la première valeur"));
   
   val2 = parseFloat(prompt("saisir la seconde valeur"));     
}

// gestion de calcul
function calcule() {
    
  let operateur = prompt("1. Faire la somme de deux valeurs\n2. Faire la soustraction de deux valeurs\n3. Faire le produit de deux valeurs\n4. Faire la division de deux valeurs\n5. Quitter");
  
  switch (operateur) {

    case '1':
        saisieValeur();
        som = val1 + val2;
        alert(`${som}`)
        calcule();
    case '2':
        saisieValeur();
        sous = val1 - val2;
        alert(`${sous}`)
        calcule(); 
    case '3':
        saisieValeur();
        prod = val1 * val2;
        alert(`${prod}`)
        calcule();
    case '4':
        saisieValeur();
        div = val1 / val2;
        alert(`${div}`)
        calcule(); 
    case '5':
        alert("voulez-vous quitter ?");
       alert("Vous avez mis fin à ce programme") ;
    
    default:
        break;
  } 
}
calcule();
