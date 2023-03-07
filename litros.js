function LitrosD(){
    var temp = parseFloat(document.getElementById("temp").value);
    var vel = parseFloat(document.getElementById("vel").value);
    var dist = (temp * vel);
    var litros = (dist / 12);
   alert("A Velocidade Media é: " + vel);
   alert("A quantidade de tempo gasto é : " + temp);
   alert("A quantidade de distância percorrida é: " + dist);
   alert("A quantidade de litros gastos são : " + litros);}
                    