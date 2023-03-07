function Peixes(){
    var pex = parseFloat(document.getElementById("pex").value);
    var exc = 0;
    var mult = 0;
   
   if (pex > 50){
    var exc = pex-50;
    var mult = 4*exc;
   alert("O excesso de peixe é: " + exc +" e a multa foi de: "+mult);
   }
   
   else{ 
           exc = 0;
           m = 0;
           alert("Não há excesso de peso e sem multa a pagar"+ "\n"+"Excesso = "+exc+"\nMulta ="+mult);
   }                   
}   