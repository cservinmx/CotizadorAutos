/*
  Author: Carlos Servín Romero
  email: carlos@servin.mx, cservinmx@gmail.com
*/
// Check browser support
if (typeof(Storage) !== "undefined") {
  // Capturo inputs
  //tab1
  var imagen=document.getElementById("divimg").value;
  var modelo=document.getElementById("modelo").value;
  var hprecio=document.getElementById("hprecio").value;
  var tvehiculo=document.getElementById("tvehiculo").value;
  var transmision=document.getElementById("transmision").value;
  var pcontrato=document.getElementById("pcontrato").value;
  var kilometraje=document.getElementById("kilometraje").value;
  var op11=document.getElementById("op-1-1").value;
  var op12=document.getElementById("op-1-2").value;
  var tcobertura=document.getElementById("tcobertura").value;
  var op13=document.getElementById("op-1-3").value;
  var op14=document.getElementById("op-1-4").value;
  var dgarantia=document.getElementById("dgarantia").value;

  //tab2

  var op2imagen=document.getElementById("op2-divimg").value;
  var op2modelo=document.getElementById("op2-modelo").value;
  var op2hprecio=document.getElementById("op2-hprecio").value;
  var op2tvehiculo=document.getElementById("op2-tvehiculo").value;
  var op2transmision=document.getElementById("op2-transmision").value;
  var op2pcontrato=document.getElementById("op2-pcontrato").value;
  var op2kilometraje=document.getElementById("op2-kilometraje").value;
  var op21=document.getElementById("op-2-1").value;
  var op22=document.getElementById("op-2-2").value;
  var op2tcobertura=document.getElementById("op2-tcobertura").value;
  var op23=document.getElementById("op-2-3").value;
  var op24=document.getElementById("op-2-4").value;
  var op2dgarantia=document.getElementById("op2-dgarantia").value;



  //tab3

  var op3imagen=document.getElementById("op3-divimg").value;
  var op3modelo=document.getElementById("op3-modelo").value;
  var op3hprecio=document.getElementById("op3-hprecio").value;
  var op3tvehiculo=document.getElementById("op3-tvehiculo").value;
  var op3transmision=document.getElementById("op3-transmision").value;
  var op3pcontrato=document.getElementById("op3-pcontrato").value;
  var op3kilometraje=document.getElementById("op3-kilometraje").value;
  var op31=document.getElementById("op-3-1").value;
  var op32=document.getElementById("op-3-2").value;
  var op3tcobertura=document.getElementById("op3-tcobertura").value;
  var op33=document.getElementById("op-3-3").value;
  var op34=document.getElementById("op-3-4").value;
  var op3dgarantia=document.getElementById("op3dgarantia").value;

  // Guardo en localStorage

  //Tab1
  localStorage.setItem("imagen", imagen);
  localStorage.setItem("modelo", modelo);
  localStorage.setItem("hprecio", hprecio);
  localStorage.setItem("tvehiculo", tvehiculo);
  localStorage.setItem("transmision", transmision);
  localStorage.setItem("pcontrato", pcontrato);
  localStorage.setItem("kilometraje", kilometraje);
  localStorage.setItem("op11", op11);
  localStorage.setItem("op12", op12);
  localStorage.setItem("tcobertura", tcobertura);
  localStorage.setItem("op13", op13);
  localStorage.setItem("op14", op14);
  localStorage.setItem("dgarantia", dgarantia);

  //Tab2
  localStorage.setItem("op2imagen", op2imagen);
  localStorage.setItem("op2modelo", op2modelo);
  //localStorage.setItem("op2hprecio", op2hprecio);
  localStorage.setItem("op2tvehiculo", op2tvehiculo);
  localStorage.setItem("op2transmision", op2transmision);
  localStorage.setItem("op2pcontrato", op2pcontrato);
  localStorage.setItem("op2kilometraje", op2kilometraje);
  localStorage.setItem("op21", op21);
  localStorage.setItem("op22", op22);
  localStorage.setItem("op2tcobertura", op2tcobertura);
  localStorage.setItem("op23", op23);
  localStorage.setItem("op24", op24);
  localStorage.setItem("op2dgarantia", op2dgarantia);

  //Tab2
  localStorage.setItem("op3imagen", op3imagen);
  localStorage.setItem("op3modelo", op3modelo);
  //localStorage.setItem("op2hprecio", op2hprecio);
  localStorage.setItem("op3tvehiculo", op3tvehiculo);
  localStorage.setItem("op3transmision", op3transmision);
  localStorage.setItem("op3pcontrato", op3pcontrato);
  localStorage.setItem("op3kilometraje", op3kilometraje);
  localStorage.setItem("op31", op31);
  localStorage.setItem("op32", op32);
  localStorage.setItem("op3tcobertura", op3tcobertura);
  localStorage.setItem("op33", op33);
  localStorage.setItem("op34", op34);
  localStorage.setItem("op3dgarantia", op3dgarantia);

} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}


// cargar
$(document).ready(function(){
  $( window ).on( "load", function() {

  //Tab1
    document.getElementById("divimg").innerHTML = localStorage.getItem("imagen");
    document.getElementById("modelo").innerHTML = localStorage.getItem("modelo");
    document.getElementById("hprecio").innerHTML = localStorage.getItem("hprecio");
    document.getElementById("tvehiculo").innerHTML = localStorage.getItem("tvehiculo");
    document.getElementById("transmision").innerHTML = localStorage.getItem("transmision");
    document.getElementById("pcontrato").innerHTML = localStorage.getItem("pcontrato");
    document.getElementById("kilometraje").innerHTML = localStorage.getItem("kilometraje");
    document.getElementById("op-1-1").innerHTML = localStorage.getItem("op11");
    document.getElementById("op-1-2").innerHTML = localStorage.getItem("op12");
    document.getElementById("tcobertura").innerHTML = localStorage.getItem("tcobertura");
    document.getElementById("op-1-3").innerHTML = localStorage.getItem("op13");
    document.getElementById("op-1-4").innerHTML = localStorage.getItem("op14");
    document.getElementById("dgarantia").innerHTML = localStorage.getItem("dgarantia");

    //Tab2
    document.getElementById("op2-divimg").innerHTML = localStorage.getItem("op2imagen");
    document.getElementById("op2-modelo").innerHTML = localStorage.getItem("op2modelo");
    //document.getElementById("hprecio").innerHTML = localStorage.getItem("hprecio");
    document.getElementById("op2-tvehiculo").innerHTML = localStorage.getItem("op2tvehiculo");
    document.getElementById("op2-transmision").innerHTML = localStorage.getItem("op2transmision");
    document.getElementById("op2-pcontrato").innerHTML = localStorage.getItem("op2pcontrato");
    document.getElementById("op2-kilometraje").innerHTML = localStorage.getItem("op2kilometraje");
    document.getElementById("op-2-1").innerHTML = localStorage.getItem("op21");
    document.getElementById("op-2-2").innerHTML = localStorage.getItem("op22");
    document.getElementById("op2-tcobertura").innerHTML = localStorage.getItem("op2tcobertura");
    document.getElementById("op-2-3").innerHTML = localStorage.getItem("op23");
    document.getElementById("op-2-4").innerHTML = localStorage.getItem("op24");
    document.getElementById("op2-dgarantia").innerHTML = localStorage.getItem("op2dgarantia");

      //Tab3
    document.getElementById("op3-divimg").innerHTML = localStorage.getItem("op3imagen");
    document.getElementById("op3-modelo").innerHTML = localStorage.getItem("op3modelo");
    //document.getElementById("hprecio").innerHTML = localStorage.getItem("hprecio");
    document.getElementById("op3-tvehiculo").innerHTML = localStorage.getItem("op3tvehiculo");
    document.getElementById("op3-transmision").innerHTML = localStorage.getItem("op3transmision");
    document.getElementById("op3-pcontrato").innerHTML = localStorage.getItem("op3pcontrato");
    document.getElementById("op3-kilometraje").innerHTML = localStorage.getItem("op3kilometraje");
    document.getElementById("op-3-1").innerHTML = localStorage.getItem("op31");
    document.getElementById("op-3-2").innerHTML = localStorage.getItem("op32");
    document.getElementById("op3-tcobertura").innerHTML = localStorage.getItem("op3tcobertura");
    document.getElementById("op-3-3").innerHTML = localStorage.getItem("op33");
    document.getElementById("op-3-4").innerHTML = localStorage.getItem("op34");
    document.getElementById("op3-dgarantia").innerHTML = localStorage.getItem("op3dgarantia");
});
});
