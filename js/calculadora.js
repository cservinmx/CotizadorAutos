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
    var modelo=$("#modelo").val();
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
        //$('select[name="transmision"] option[value="1"]').remove();//Remueve automatica
        tvehiculo=$("#tvehiculo").val();
        transmision=$("#transmision").val();
        pcontrato=$("#pcontrato").val();
        kilometraje=$("#kilometraje").val();
        vsustituto=$("input[name*='vsustituto']").val();
        tcobertura=$("#tcobertura").val();
        tmovil=$("input[name*='tmovil']").val();
        dgarantia=$("#dgarantia").val();
        precio=precios(tvehiculo, 1, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
        break;
      case '2':
        $("#divimg").attr("src","img/Prado.png");
        link="toyota-prado";
      //  $('select[name="transmision"] option[value="0"]').remove();
        //precios(tvehiculo, modelo, transmision, meses)
        tvehiculo=$("#tvehiculo").val();
        transmision=$("#transmision").val();
        pcontrato=$("#pcontrato").val();
        kilometraje=$("#kilometraje").val();
        vsustituto=$("input[name*='vsustituto']").val();
        tcobertura=$("#tcobertura").val();
        tmovil=$("input[name*='tmovil']").val();
        dgarantia=$("#dgarantia").val();
        precio=precios(tvehiculo, 2, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
        break;
      case '3':
        $("#divimg").attr("src","img/Fortuner.png");
        //$('select[name="transmision"] option[value="0"]').remove();
        link="toyota-fortuner";
        tvehiculo=$("#tvehiculo").val();
        transmision=$("#transmision").val();
        pcontrato=$("#pcontrato").val();
        kilometraje=$("#kilometraje").val();
        vsustituto=$("input[name*='vsustituto']").val();
        tcobertura=$("#tcobertura").val();
        tmovil=$("input[name*='tmovil']").val();
        dgarantia=$("#dgarantia").val();
        precio=precios(tvehiculo, 3, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
        break;
      case '4':
        $("#divimg").attr("src","img/Rav4.png");
        link="toyota-rav4";
        tvehiculo=$("#tvehiculo").val();
        transmision=$("#transmision").val();
        pcontrato=$("#pcontrato").val();
        kilometraje=$("#kilometraje").val();
        vsustituto=$("input[name*='vsustituto']").val();
        tcobertura=$("#tcobertura").val();
        tmovil=$("input[name*='tmovil']").val();
        dgarantia=$("#dgarantia").val();
        precio=precios(tvehiculo, 4, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
        break;
      case '5':
        $("#divimg").attr("src","img/Rush.png");
        link="toyota-hilux-single";
        tvehiculo=$("#tvehiculo").val();
        transmision=$("#transmision").val();
        pcontrato=$("#pcontrato").val();
        kilometraje=$("#kilometraje").val();
        vsustituto=$("input[name*='vsustituto']").val();
        tcobertura=$("#tcobertura").val();
        tmovil=$("input[name*='tmovil']").val();
        dgarantia=$("#dgarantia").val();
        precio=precios(tvehiculo, 5, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
        break;
      case '6':
        $("#divimg").attr("src","img/Corolla.png");
        //$('select[name="transmision"] option[value="0"]').remove(); //Remueve manual
        link="toyota-corolla";
        tvehiculo=$("#tvehiculo").val();
        transmision=$("#transmision").val();
        pcontrato=$("#pcontrato").val();
        kilometraje=$("#kilometraje").val();
        vsustituto=$("input[name*='vsustituto']").val();
        tcobertura=$("#tcobertura").val();
        tmovil=$("input[name*='tmovil']").val();
        dgarantia=$("#dgarantia").val();
        precio=precios(tvehiculo, 6, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
        break;
      case '7':
        $("#divimg").attr("src","img/Yaris.png");
        link="toyota-yaris";
        tvehiculo=$("#tvehiculo").val();
        transmision=$("#transmision").val();
        pcontrato=$("#pcontrato").val();
        kilometraje=$("#kilometraje").val();
        vsustituto=$("input[name*='vsustituto']").val();
        tcobertura=$("#tcobertura").val();
        tmovil=$("input[name*='tmovil']").val();
        dgarantia=$("#dgarantia").val();
        precio=precios(tvehiculo, 7, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
        break;
      case '8':
        $("#divimg").attr("src","img/Figo.png");
        link="ford-figo";
        tvehiculo=$("#tvehiculo").val();
        transmision=$("#transmision").val();
        pcontrato=$("#pcontrato").val();
        kilometraje=$("#kilometraje").val();
        vsustituto=$("input[name*='vsustituto']").val();
        tcobertura=$("#tcobertura").val();
        tmovil=$("input[name*='tmovil']").val();
        dgarantia=$("#dgarantia").val();
        precio=precios(tvehiculo, 8, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
        break;
      default:
      $("#divimg").attr("src","img/hilux.png");
      //$('select[name="transmision"] option[value="0"]').remove();
      link="toyota-hilux";
      tvehiculo=$("#tvehiculo").val();
      transmision=$("#transmision").val();
      pcontrato=$("#pcontrato").val();
      kilometraje=$("#kilometraje").val();
      vsustituto=$("input[name*='vsustituto']").val();
      tcobertura=$("#tcobertura").val();
      tmovil=$("input[name*='tmovil']").val();
      dgarantia=$("#dgarantia").val();
      precio=precios(tvehiculo, 0, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
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
    modelo=$("#modelo").val();
    tvehiculo=$("#tvehiculo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    vsustituto=$("input[name*='vsustituto']").val();
    tcobertura=$("#tcobertura").val();
    tmovil=$("input[name*='tmovil']").val();
    dgarantia=$("#dgarantia").val();
    console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+pcontrato+" kilometraje "+kilometraje+" vsustituto "+ vsustituto+" tcobertura"+tcobertura+" tmovil "+tmovil+" dgarantia "+dgarantia );
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
  });
  /* Fin para agregar nuevo auto */

  /* Cambio de kilometraje */
  $('#kilometraje').change(function( event ) {
    modelo=$("#modelo").val();
    tvehiculo=$("#tvehiculo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    vsustituto=$("input[name*='vsustituto']").val();
    tcobertura=$("#tcobertura").val();
    tmovil=$("input[name*='tmovil']").val();
    dgarantia=$("#dgarantia").val();
    console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+pcontrato+" kilometraje "+kilometraje+" vsustituto "+ vsustituto+" tcobertura"+tcobertura+" tmovil "+tmovil+" dgarantia "+dgarantia );
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
  });
  /*fin Cambio de transmisión*/

  /* Cambio de cobertura */
  $('#tcobertura').change(function( event ) {
    modelo=$("#modelo").val();
    tvehiculo=$("#tvehiculo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    vsustituto=$("input[name*='vsustituto']").val();
    tcobertura=$("#tcobertura").val();
    tmovil=$("input[name*='tmovil']").val();
    dgarantia=$("#dgarantia").val();
    console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+pcontrato+" kilometraje "+kilometraje+" vsustituto "+ vsustituto+" tcobertura"+tcobertura+" tmovil "+tmovil+" dgarantia "+dgarantia );
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
  });
  /*fin Cambio de cobertura*/

  /* Cambio de deposito garantia */
  $('#dgarantia').change(function( event ) {
    modelo=$("#modelo").val();
    tvehiculo=$("#tvehiculo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    vsustituto=$("input[name*='vsustituto']").val();
    tcobertura=$("#tcobertura").val();
    tmovil=$("input[name*='tmovil']").val();
    dgarantia=$("#dgarantia").val();
    console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+pcontrato+" kilometraje "+kilometraje+" vsustituto "+ vsustituto+" tcobertura"+tcobertura+" tmovil "+tmovil+" dgarantia "+dgarantia );
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
  });
  /*fin Cambio de cobertura*/

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
  $("#tvehiculo").change(function(event) {
    alert("Entra "+this.value);
    //option[value=title]
    if(this.value==1){//Seminuevo
        $("#divimg").attr("src","img/Prado.png");
        $('select[name="modelo"] option[value="0"]').remove();
        $('select[name="modelo"] option[value="1"]').remove();
        $('select[name="modelo"] option[value="3"]').remove();
        $('select[name="modelo"] option[value="5"]').remove();
        $('select[name="modelo"] option[value="8"]').remove();
        $('#modelo').append('<option value="9">Bego</option>');
        precio=precios(1, 2, 0, 0, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
        $("#clas-per").attr("class",thepercent(precio));
        $("#precio").html(precio);
    }else if(this.value==0){//Nuevo
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
      precio=precios(0, 0, 0, 0, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
      $("#clas-per").attr("class",thepercent(precio));
      $("#precio").html(precio);
    }
  });

  /* Fin Muestra los nuevos y oculta los seminuevos viceversa*/

  /* Cambio de transmisión */
  $('#transmision').change(function( event ) {
    modelo=$("#modelo").val();
    tvehiculo=$("#tvehiculo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    vsustituto=$("input[name*='vsustituto']").val();
    tcobertura=$("#tcobertura").val();
    tmovil=$("input[name*='tmovil']").val();
    dgarantia=$("#dgarantia").val();
    console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+pcontrato+" kilometraje "+kilometraje+" vsustituto "+ vsustituto+" tcobertura"+tcobertura+" tmovil "+tmovil+" dgarantia "+dgarantia );
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
  });
  /*fin Cambio de transmisión*/

  $("#breiniciar").click(function( event ) {
    //alert("Reiniciar");
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

function precios(tvehiculo, modelo, transmision, meses, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s){
console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+meses+" kilometraje "+kilometraje+" vsustituto "+ vsustituto+" tcobertura"+tcobertura+" tmovil "+tmovil+" dgarantia "+dgarantia );
  if(tvehiculo==0) { // Nuevo
    switch(modelo){
      case 1: //Hilux Sencilla
      //console.log("Entra al case1 precios");
          //Solo Transmisión manual
          if(meses==0){ //36meses
              /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m36[3].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m36[3].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m36[3].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m36[3].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m36[3].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m36[3].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m36[3].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m36[3].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m36[3].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m36[3].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m36[3].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m36[3].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m36[3].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m36[3].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m36[3].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m36[3].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

          }else if(meses==1){ //24meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[3].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[3].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[3].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[3].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[3].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[3].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[3].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[3].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[3].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[3].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[3].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[3].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[3].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[3].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[3].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[3].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
              /*var prec=m24[3].p16;
              precio=limparprecio(prec);
              return precio;*/
          }else{ //12meses

            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[3].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[3].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[3].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[3].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[3].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[3].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[3].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[3].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[3].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[3].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[3].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[3].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[3].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[3].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[3].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[3].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
            /*  var prec=m12[3].p16;
              precio=limparprecio(prec);
              return precio;*/
          }
      break;
      case 2://Prado
          //Solo Transmisión Automatica
          if(meses==0){ //36meses
            var prec=m36[0].p16;
            precio=limparprecio(prec);
            //console.log(precio);
            return precio;
          }else if(meses==1){ //24meses

          }else{ //12meses

          }
      break;
      case 3: //Fortuner
          //Solo Transmisión Automatica
          if(meses==0){ //36meses
            var prec=m36[1].p16;
            precio=limparprecio(prec);
            //console.log(precio);
            return precio;
          }else if(meses==1){ //24meses

          }else{ //12meses

          }
      break;
      case 4://Rav4
        if(transmision==0){//Man
          if(meses==0){ //36meses
            var prec=m36[5].p16;
            precio=limparprecio(prec);
            //console.log(precio);
            return precio;
          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }else{//Aut
          if(meses==0){ //36meses
            var prec=m36[4].p16;
            precio=limparprecio(prec);
            //console.log(precio);
            return precio;
          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }
      break;
      case 5:
        if(transmision==0){//Man
          if(meses==0){ //36meses
            var prec=m36[7].p16;
            precio=limparprecio(prec);
            //console.log(precio);
            return precio;
          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }else{//Aut
          if(meses==0){ //36meses
            var prec=m36[6].p16;
            precio=limparprecio(prec);
            //console.log(precio);
            return precio;
          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }
      break;
      case 6: //Corolla
          //Solo automatica
          if(meses==0){ //36meses
            var prec=m36[8].p16;
            precio=limparprecio(prec);
            //console.log(precio);
            return precio;
          }else if(meses==1){ //24meses

          }else{ //12meses

          }
      break;
      case 7://yaris
        if(transmision==0){//Man
          if(meses==0){ //36meses
            var prec=m36[10].p16;
            precio=limparprecio(prec);
            //console.log(precio);
            return precio;
          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }else{//Aut
          if(meses==0){ //36meses
            var prec=m36[9].p16;
            precio=limparprecio(prec);
            //console.log(precio);
            return precio;
          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }
      break;
      case 8://Figo
        if(transmision==0){//Man
          if(meses==0){ //36meses
            var prec=m36[12].p16;
            precio=limparprecio(prec);
            //console.log(precio);
            return precio;
          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }else{//Aut
          if(meses==0){ //36meses
            var prec=m36[11].p16;
            precio=limparprecio(prec);
            return precio;
          }else if(meses==1){ //24meses

          }else{ //12meses

          }
        }
      break;

      default:
        //Manual
        if(meses==0){ //36meses
          var prec=m36[2].p16;
          precio=limparprecio(prec);
          return precio;
        }else if(meses==1){ //24meses

        }else{ //12meses

        }
      break;
    }
  }else if(tvehiculo==0){ //Seminuevo

    switch(modelo){
      case 2: //Prado
        //Automatica
        if(meses==1){ //24meses
          console.log(m24_s);
          var prec=m24_s[0].p16;
          precio=limparprecio(prec);
          return precio;
        }else{ //12meses
          var prec=m12_s[0].p16;
          precio=limparprecio(prec);
          return precio;
        }
      break;
      case 4: //Rav4
        if(transmision==0){//Man
          if(meses==1){ //24meses
            var prec=m24_s[2].p16;
            precio=limparprecio(prec);
            return precio;
          }else{ //12meses
            var prec=m12_s[2].p16;
            precio=limparprecio(prec);
            return precio;
          }
        }else{//Aut
          if(meses==1){ //24meses
            var prec=m24_s[1].p16;
            return precio;
          }else{ //12meses
            var prec=m12_s[2].p16;
            precio=limparprecio(prec);
            return precio;
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

//Quita la Coma y el símbolo de $ que viene en google xls
function limparprecio(precio){
  var prec1=precio.replace(",", "");
  precio=prec1.replace("$ ", "");
  precio=precio.toString();
  return precio;
}
