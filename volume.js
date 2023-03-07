function VolumeB(){
    var R = parseFloat(document.getElementById("R").value);
    var alt = parseFloat(document.getElementById("alt").value);
    var vlm = ((2 * R) * 3.14159) * alt;
   alert("O calculo de volume do óleo é: " + vlm);
   console.log('Vlm Óleo '+vlm);      }