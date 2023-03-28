let nombre = document.getElementById("valeur");
let francs = document.getElementById("franc");

nombre.addEventListener("input", function(){
    let inputTextarea = nombre.value;
    if(isNaN(inputTextarea)){
        alert("Il faut une valeur numérique");
    }
    else{
        calcul = inputTextarea * 6.55957;
        resultat = calcul.toFixed(2);
        francs.innerHTML = resultat;
    }
})