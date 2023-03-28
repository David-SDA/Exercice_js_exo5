let nombre = document.getElementById("valeur");
let francs = document.getElementsByClassName("francs");

nombre.addEventListener("input", function(){
    let inputTextarea = nombre.value;
    if(isNaN(inputTextarea)){
        alert("Il faut une valeur numérique");
    }
})