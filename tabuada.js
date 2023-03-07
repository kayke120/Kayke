function Tabuada(){
  var linha = document.getElementById('linha');
  var num = parseInt(document.getElementById("num").value);
  var Tabuada = '';
  
  for(var i = 1; i <= 10; i++)
  Tabuada += num + " * " + i + " = " + num * i + "<br />";
  linha.innerHTML = Tabuada;    
  console.log(Tabuada);
                       
                       
                       
}

