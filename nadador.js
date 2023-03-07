function Nadador(){
    var idade = parseFloat(document.getElementById("idade").value);
     if((idade >= 5) && (idade <= 7)){
              alert("Infantil A\n ")
     }
        else{
            if ((idade>=8)&&(idade<= 10)){
                alert("Infatil B\n")
            }
            
            else{
                if ((idade>=11)&&(idade<=13)){
                    alert("Juvenil A\n")
                }
                else{
                    if((idade>=14)&&(idade<=17)){
                        alert("Juvenil B\n")
                }
                else{
                    if(idade>=18){
                        alert("Adulto\n")

                }
                 else{
                  alert("Menor De 5 anos");
                } 
            }                  
        }
    }
}    
}