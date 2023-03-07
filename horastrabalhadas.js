function Horas(){
	     
     var C = parseFloat(document.getElementById("C").value);
     var N = parseFloat(document.getElementById("N").value);
     var s = 10 * N;
     var st = s;
     if(N > 50){
        var slex = ((N - 50) * 20);
        var st = s + slex;
     }
    else{
         slex = 0
         alert("Trabaia mais irmão : "+s)
}
    alert("O valor do salário é de: "+s+"\nO valor do salário excedente é de: "+slex+"\nO salário total é: "+st) 
}