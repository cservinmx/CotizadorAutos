/*
  Author: Carlos Servín Romero
  email: carlos@servin.mx, cservinmx@gmail.com
*/
var link="toyota-hilux";
var speed = {
  'trigger': '#speed-compare',
  'target': '.modal_content .speedometer'
};

var numdiv=0;

$(document).ready(function(){

  /* Carga los JSON de la matriz Google*/
    var m36=JSON.parse($("#36m").val());
    var m24=JSON.parse($("#24m").val());
    var m12=JSON.parse($("#12m").val());
    var m24_s=JSON.parse($("#24m_s").val());
    var m12_s=JSON.parse($("#12m_s").val());
    //console.log(m36);
  /* Fin carga JSON*/

  //$('select[name="transmision"] option[value="1"]').remove();//Remueve automatica

  /* Cambiar el modelo de auto */
  $("#modelo").change(function(event){
    var precio="";
    switch (this.value) {
      case '1':
      //console.log(m36[0].p1);
        $("#divimg").attr("src","img/hiluxsencilla.png");
        link="toyota-hilux-single";
        $('select[name="transmision"] option[value="1"]').remove();//Remueve automatica
      /*  var prec=m36[3].p16;
        var prec1=prec.replace(",", "");
        precio=prec1.replace("$ ", "");
        precio=precio.toString();*/
        //precios(tvehiculo, modelo, transmision, meses)
        //console.log("Entra al case1");
        precio=precios(0, 1, 0, 0, m36, m24, m12, m24_s, m12_s);

        break;
      case '2':
        $("#divimg").attr("src","img/Prado.png");
        link="toyota-prado";
        $('select[name="transmision"] option[value="0"]').remove();
        //si el precio es p1 si no se va variando
        var prec=m36[0].p16;
        var prec1=prec.replace(",", "");
        precio=prec1.replace("$ ", "");
        precio=precio.toString();
        break;
      case '3':
        $("#divimg").attr("src","img/Fortuner.png");
        $('select[name="transmision"] option[value="0"]').remove();
        link="toyota-fortuner";
        var prec=m36[1].p16;
        var prec1=prec.replace(",", "");
        precio=prec1.replace("$ ", "");
        precio=precio.toString();
        break;
      case '4':
        $("#divimg").attr("src","img/Rav4.png");
        link="toyota-rav4";
        var prec=m36[4].p16;
        var prec1=prec.replace(",", "");
        precio=prec1.replace("$ ", "");
        precio=precio.toString();
        break;
      case '5':
        $("#divimg").attr("src","img/Rush.png");
        link="toyota-hilux-single";
        var prec=m36[6].p16;
        var prec1=prec.replace(",", "");
        precio=prec1.replace("$ ", "");
        precio=precio.toString();
        break;
      case '6':
        $("#divimg").attr("src","img/Corolla.png");
        $('select[name="transmision"] option[value="0"]').remove(); //Remueve manual
        link="toyota-corolla";
        var prec=m36[7].p16;
        var prec1=prec.replace(",", "");
        precio=prec1.replace("$ ", "");
        precio=precio.toString();
        break;
      case '7':
        $("#divimg").attr("src","img/Yaris.png");
        link="toyota-yaris";
        var prec=m36[8].p16;
        var prec1=prec.replace(",", "");
        precio=prec1.replace("$ ", "");
        precio=precio.toString();
        break;
      case '8':
        $("#divimg").attr("src","img/Figo.png");
        link="ford-figo";
        var prec=m36[0].p16;
        var prec1=prec.replace(",", "");
        precio=prec1.replace("$ ", "");
        precio=precio.toString();
        break;
      default:
      $("#divimg").attr("src","img/hilux.png");
      $('select[name="transmision"] option[value="0"]').remove();
      link="toyota-hilux";
      var prec=m36[4].p16;
      var prec1=prec.replace(",", "");
      precio=prec1.replace("$ ", "");
      precio=precio.toString();
    }
    var dir="https://www.renting.cr/planes-renting.php?vehicle=";
    var href=dir+link;
    //percent(precio);
    $("#lightbox-btn").attr("href", href);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
  });
  /* Fin cambiar modelo del auto*/


  $(speed.trigger).on('click', function () {
    setTimeout(function () {
      $(speed.target).each(function () {
        $(this).addClass('play');
      });
    }, 1000);
  });


  /*  Cambiar mensualidades*/
  $('#pcontrato').change(function( event ) {
    var modelo=$("#modelo").val();
    var tvehiculo=$("#tvehiculo").val();
    var transmision=$("#transmision").val();
    var pcontrato=$("#pcontrato").val();
    //tvehiculo, modelo, transmision, meses,
    precio=precios(tvehiculo, modelo, transmision, pcontrato, m36, m24, m12, m24_s, m12_s);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
  });
  /* Fin para agregar nuevo auto */

  /*  Agregar un nuevo auto para comparar*/
  $('#comparar').click(function( event ) {
      numdiv++;
      if(numdiv<3){
        $('.main').append('<div class="cearboth"></div><div class="divBody">Nuevo div</div>');
      }else{
        alert("Comparar hasta 3");
      }
  });
  /* Fin para agregar nuevo auto */


  /* Muestra los nuevos y oculta los seminuevos viceversa*/
  $('#tvehiculo').change(function(event) {
    //option[value=title]
    if(this.value=="Seminuevo"){
        $("#divimg").attr("src","img/prado.png");
        $('select[name="modelo"] option[value="0"]').remove();
        $('select[name="modelo"] option[value="1"]').remove();
        $('select[name="modelo"] option[value="3"]').remove();
        $('select[name="modelo"] option[value="5"]').remove();
        $('select[name="modelo"] option[value="8"]').remove();
        $('#modelo').append('<option value="9">Bego</option>');
    }else if(this.value=="Nuevo"){
      $("#divimg").attr("src","img/hilux.png");
      $('select[name="modelo"] option[value="2"]').remove();
      $('select[name="modelo"] option[value="4"]').remove();
      $('select[name="modelo"] option[value="6"]').remove();
      $('select[name="modelo"] option[value="7"]').remove();
      $('select[name="modelo"] option[value="9"]').remove();
      $('#modelo').append('<option value="0">Hi-lux Doble Cabina 4X4</option>');
      $('#modelo').append('<option value="1">Hi-lux Cabina Sencilla 4X2</option>');
      $('#modelo').append('<option value="2">Prado</option>');
      $('#modelo').append('<option value="3">Fortuner</option>');
      $('#modelo').append('<option value="4">Rav4</option>');
      $('#modelo').append('<option value="5">Rush</option>');
      $('#modelo').append('<option value="6">Corola</option>');
      $('#modelo').append('<option value="7">Yaris</option>');
      $('#modelo').append('<option value="8">Figo</option>');
    }
  });

  /* Fin Muestra los nuevos y oculta los seminuevos viceversa*/


   $("#breiniciar").click(function( event ) {
      alert("Reiniciar");
      location.reload();
    });

}); //Fin Document ready

/* Tranforma el precio a porecentaje tacómetro*/
function thepercent(precio){
  var min=450;
  var max=2022;
  if(precio==min){
    percent=0;
  }else if(precio==max){
    percent=100;
  }else{
      percent=Math.round((precio*100)/max);
  }

  switch(percent){
    case 0:
      var clas="percent-0";
      break;
    case 100:
      var clas="percent-100";
      break;
    default:
      if(percent>0 && percent<15){
        var clas="percent-10";
      }else if(percent>=15 && percent<30){
        var clas="percent-20";
      }else if(percent>=30 && percent<45){
        var clas="percent-35";
      }else if(percent>=45 && percent<60){
        var clas="percent-55";
      }else if(percent>=60 && percent<75){
        var clas="percent-70";
      }else if(percent>=75 && percent<90){
        var clas="percent-80";
      }else if(percent>=90 && percent<100){
        var clas="percent-95";
      }
  }

  return clas;
}
/* Fin Tranforma el precio a porecentaje*/

function precios(tvehiculo, modelo, transmision, meses, m36, m24, m12, m24_s, m12_s){
console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+meses  );
  if(tvehiculo==0) { // Nuevo
    switch(modelo){
      case 1:
      //console.log("Entra al case1 precios");
          //Solo Transmisión manual
          if(meses==0){ //36meses
              var prec=m36[3].p16;
              var prec1=prec.replace(",", "");
              precio=prec1.replace("$ ", "");
              precio=precio.toString();
              //console.log(precio);
              return precio;
          }else if(meses==1){ //24meses
              var prec=m24[3].p16;
              var prec1=prec.replace(",", "");
              precio=prec1.replace("$ ", "");
              precio=precio.toString();
              return precio;
          }else{ //12meses
              var prec=m24[3].p16;
              var prec1=prec.replace(",", "");
              precio=prec1.replace("$ ", "");
              precio=precio.toString();
              return precio;
          }
      break;
      case 2:
          //Solo Transmisión Automatica
          if(meses==0){ //36meses

          }else if(meses==1){ //24meses

          }else{ //12meses

          }
      break;
      case 3:
          //Solo Transmisión Automatica
          if(meses==0){ //36meses

          }else if(meses==1){ //24meses

          }else{ //12meses

          }
      break;
      case 4:
        if(transmision==0){//Man
          if(meses==0){ //36meses

          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }else{//Aut
          if(meses==0){ //36meses

          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }
      break;
      case 5:
        if(transmision==0){//Man
          if(meses==0){ //36meses

          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }else{//Aut
          if(meses==0){ //36meses

          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }
      break;
      case 6:
          //Solo automatica
          if(meses==0){ //36meses

          }else if(meses==1){ //24meses

          }else{ //12meses

          }
      break;
      case 7:
        if(transmision==0){//Man
          if(meses==0){ //36meses

          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }else{//Aut
          if(meses==0){ //36meses

          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }
      break;
      case 8:
        if(transmision==0){//Man
          if(meses==0){ //36meses

          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }else{//Aut
          if(meses==0){ //36meses

          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }
      break;

      default:
        //Manual
        if(meses==0){ //36meses

        }else if(meses==1){ //24meses

        }else{ //12meses

        }
      break;
    }
  }else if(tvehiculo==0){ //Seminuevo

    switch(modelo){
      case 2:
        //Automatica
        if(meses==1){ //24meses

        }else{ //12meses

        }
      break;
      case 4:
        if(transmision==0){//Man
          if(meses==1){ //24meses

          }else{ //12meses

          }
        }else{//Aut
          if(meses==1){ //24meses

          }else{ //12meses

          }
        }
      break;
      case 6:
        //Automatica
        if(meses==1){ //24meses

        }else{ //12meses

        }
      break;
      case 7:
        if(transmision==0){//Man
          if(meses==1){ //24meses

          }else{ //12meses

          }
        }else{//Aut
          if(meses==1){ //24meses

          }else{ //12meses

          }
        }
      break;
      case 9:
        if(transmision==0){//Man
          if(meses==1){ //24meses

          }else{ //12meses

          }
        }else{//Aut

        }
      break;
      default:
      break;
    }

  }
}
