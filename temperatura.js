function conversaoA(){
    var cel = parseFloat(document.getElementById("cel").value);
  var fh = ((9 * cel) + 160) / 5;	
  alert("A conversão de celsius para FH é: " + fh);
  console.log('Temp FH '+fh);      }
      