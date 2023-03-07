function IMC(){
    var peso = parseFloat(document.getElementById("peso").value);
    var alt = parseFloat(document.getElementById("alt").value);
    var imc = (peso  / (alt* 2)) ;   
    alert("Seu IMC É: " + imc);    }                   
