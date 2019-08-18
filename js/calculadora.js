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
  $( window ).on( "load", function() {
    ocultaropciones('0');//Seteo hilux doble para ocultar opciones
    $("#modelo option[value='9']").hide();
    //console.log( "Seteo valores default" );
  });


  /* Carga los JSON de la matriz Google*/
    var m36=JSON.parse($("#36m").val());
    var m24=JSON.parse($("#24m").val());
    var m12=JSON.parse($("#12m").val());
    var m24_s=JSON.parse($("#24m_s").val());
    var m12_s=JSON.parse($("#12m_s").val());
  /* Fin carga JSON*/

  $(speed.trigger).on('click', function () {
    setTimeout(function () {
      $(speed.target).each(function () {
        $(this).addClass('play');
      });
    }, 1000);
  });


  /* Cambiar el modelo de auto */
  $("#modelo").change(function(event){
    var precio="";
    switch (this.value) {
      case '0':
        $("#divimg").attr("src","img/hilux.png");
        link="?vehicle=toyota-hilux";
        break;
      case '1':
        $("#divimg").attr("src","img/hiluxsencilla.png");
        link="?vehicle=toyota-hilux-single";
        break;
      case '2':
        $("#divimg").attr("src","img/Prado.png");
        link="?vehicle=toyota-prado";
        break;
      case '3':
        $("#divimg").attr("src","img/Fortuner.png");
        link="?vehicle=toyota-fortuner";
        break;
      case '4':
        $("#divimg").attr("src","img/Rav4.png");
        link="?vehicle=toyota-rav4";
        break;
      case '5':
        $("#divimg").attr("src","img/Rush.png");
        link=""; //No hay enlace para rush
        break;
      case '6':
        $("#divimg").attr("src","img/Corolla.png");
        link="?vehicle=toyota-corolla";
        break;
      case '7':
        $("#divimg").attr("src","img/Yaris.png");
        link="?vehicle=toyota-yaris";
        break;
      case '8':
        $("#divimg").attr("src","img/Figo.png");
        link="?vehicle=ford-figo";
        break;
      case '9':
        $("#divimg").attr("src","img/bego.png");
        link=""; //No hay enlace para bego
        break;

    }
    tvehiculo=$("#tvehiculo").val();
    modelo=$("#modelo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    //vsustituto=$("input[name*='vsustituto']").val();
    if($("#op-1-1:checked").val()==1){
      vsustituto=1;
    }else{
      vsustituto=0;
    }
    tcobertura=$("#tcobertura").val();
    //tmovil=$("input[name*='tmovil']").val();
    if($("#op-1-3:checked").val()==1){
      tmovil=1;
    }else{
      tmovil=0;
    }
    dgarantia=$("#dgarantia").val();
    ocultaropciones(modelo);
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    var dir="https://www.renting.cr/planes-renting.php";
    var href=dir+link;
    //console.log(precio);
    $("#lightbox-btn").attr("href", href);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
    $("#hprecio").val(precio);
  });
  /* Fin cambiar modelo del auto*/

  /* Muestra los nuevos y oculta los seminuevos viceversa*/
  $("#tvehiculo").change(function(event) {
    //console.log("Cambio tipo vehiculo");
    modelo=$("#modelo").val();
    tvehiculo=$("#tvehiculo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    //vsustituto=$("input[name*='vsustituto']").val();
    if($("#op-1-1:checked").val()==1){
      vsustituto=1;
    }else{
      vsustituto=0;
    }
    tcobertura=$("#tcobertura").val();
    //tmovil=$("input[name*='tmovil']").val();
    if($("#op-1-3:checked").val()==1){
      tmovil=1;
    }else{
      tmovil=0;
    }

    dgarantia=$("#dgarantia").val();
    if(this.value==1){//Seminuevo
        $('#modelo').val(modelo).change();
        ocultaropciones(modelo);
        $("#pcontrato option[value='0']").hide();//Ocultar contrato a 36m
        $("#modelo option[value='0']").hide();
        $("#modelo option[value='1']").hide();
        $("#modelo option[value='3']").hide();
        $("#modelo option[value='5']").hide();
        $("#modelo option[value='8']").hide();
        $("#modelo option[value='9']").show();
        $("#pcontrato option[value='1']").attr("selected",true);
        $("#pcontrato option[value='0']").hide(); //Oculta 36m
        $("#pcontrato").click('1');
        precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
        //console.log(precio);
        $("#clas-per").attr("class",thepercent(precio));
        $("#precio").html(precio);
    }else if(this.value==0){//Nuevo
      $("#divimg").attr("src","img/hilux.png");
      $("#modelo option[value='2']").hide();
      $("#modelo option[value='4']").hide();
      $("#modelo option[value='6']").hide();
      $("#modelo option[value='7']").hide();
      $("#modelo option[value='9']").hide();
      $("#modelo option[value='0']").show();
      $("#modelo option[value='1']").show();
      $("#modelo option[value='2']").show();
      $("#modelo option[value='3']").show();
      $("#modelo option[value='4']").show();
      $("#modelo option[value='5']").show();
      $("#modelo option[value='6']").show();
      $("#modelo option[value='7']").show();
      $("#modelo option[value='8']").show();
      $("#modelo option[value='9']").hide();
      $("#pcontrato option[value='0']").show();//mostrar contrato a 36m
      $("#tvehiculo option[value='0']").show();
      precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
      //console.log(precio);
      $("#modelo").val(modelo).change();
      ocultaropciones(modelo);
      $("#clas-per").attr("class",thepercent(precio));
      $("#precio").html(precio);
      $("#hprecio").val(precio);
    }
  });
  /* Fin Muestra los nuevos y oculta los seminuevos viceversa*/

  /* Cambio de transmisión */
  $('#transmision').change(function( event ) {
    //console.log("Cambio en la transmision");
    modelo=$("#modelo").val();
    tvehiculo=$("#tvehiculo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    if($("#op-1-1:checked").val()==1){
      vsustituto=1;
    }else{
      vsustituto=0;
    }
    tcobertura=$("#tcobertura").val();
    if($("#op-1-3:checked").val()==1){
      tmovil=1;
    }else{
      tmovil=0;
    }
    dgarantia=$("#dgarantia").val();
    //console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+pcontrato+" kilometraje "+kilometraje+" vsustituto "+ vsustituto+" tcobertura"+tcobertura+" tmovil "+tmovil+" dgarantia "+dgarantia );
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    //console.log(precio);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
    $("#hprecio").val(precio);
  });
  /*fin Cambio de transmisión*/

  /*  Cambiar mensualidades*/
  $('#pcontrato').change(function( event ) {
    modelo=$("#modelo").val();
    tvehiculo=$("#tvehiculo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    if($("#op-1-1:checked").val()==1){
      vsustituto=1;
    }else{
      vsustituto=0;
    }
    tcobertura=$("#tcobertura").val();
    if($("#op-1-3:checked").val()==1){
      tmovil=1;
    }else{
      tmovil=0;
    }
    dgarantia=$("#dgarantia").val();
    ///console.log("Cambio en mensualidades");
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    //console.log(precio);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
    $("#hprecio").val(precio);
  });
  /* Fin para agregar nuevo auto */

  /* Cambio de kilometraje */
  $('#kilometraje').change(function( event ) {
    modelo=$("#modelo").val();
    tvehiculo=$("#tvehiculo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    if($("#op-1-1:checked").val()==1){
      vsustituto=1;
    }else{
      vsustituto=0;
    }
    tcobertura=$("#tcobertura").val();
    if($("#op-1-3:checked").val()==1){
      tmovil=1;
    }else{
      tmovil=0;
    }
    dgarantia=$("#dgarantia").val();
    //console.log("cambio kilometraje");
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    //console.log(precio);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
    $("#hprecio").val(precio);
  });
  /*fin Cambio de transmisión*/

  /* Si/no Vehiculo sustituto*/
  $('input[type="checkbox"]').click(function(){
    var $box = $(this);
    if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
     } else {
       $box.prop("checked", false);
     }
  });
  /* Fin si/no vehiculo sustituto */

  /* CAmbios vehiculo sustituto*/
    $("input[name*='vsustituto']").click(function(){
      modelo=$("#modelo").val();
      tvehiculo=$("#tvehiculo").val();
      transmision=$("#transmision").val();
      pcontrato=$("#pcontrato").val();
      kilometraje=$("#kilometraje").val();
      if($("#op-1-1:checked").val()==1){
        vsustituto=1;
      }else{
        vsustituto=0;
      }
      tcobertura=$("#tcobertura").val();
      if($("#op-1-3:checked").val()==1){
        tmovil=1;
      }else{
        tmovil=0;
      }
      dgarantia=$("#dgarantia").val();
      //console.log("Cambio en vehiculosustituto");
      precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
      //console.log(precio);
      $("#clas-per").attr("class",thepercent(precio));
      $("#precio").html(precio);
      $("#hprecio").val(precio);
    });
  /* Fin cambios vehiculo sustituto*/

  /* Cambio de cobertura */
  $('#tcobertura').change(function( event ) {
    modelo=$("#modelo").val();
    tvehiculo=$("#tvehiculo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    if($("#op-1-1:checked").val()==1){
      vsustituto=1;
    }else{
      vsustituto=0;
    }
    tcobertura=$("#tcobertura").val();
    if($("#op-1-3:checked").val()==1){
      tmovil=1;
    }else{
      tmovil=0;
    }
    dgarantia=$("#dgarantia").val();
    //console.log("Con deducible");
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    //console.log(precio);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
    $("#hprecio").val(precio);
  });
  /*fin Cambio de cobertura*/

  /* CAmbios tallermovil*/
    $("input[name*='tmovil']").click(function(){
      modelo=$("#modelo").val();
      tvehiculo=$("#tvehiculo").val();
      transmision=$("#transmision").val();
      pcontrato=$("#pcontrato").val();
      kilometraje=$("#kilometraje").val();
      //vsustituto=$("input[name*='vsustituto']:checked").val();
      if($("#op-1-1:checked").val()==1){
        vsustituto=1;
      }else{
        vsustituto=0;
      }
      tcobertura=$("#tcobertura").val();
      //tmovil=$("input[name*='tmovil']:checked").val();
      if($("#op-1-3:checked").val()==1){
        tmovil=1;
      }else{
        tmovil=0;
      }
      dgarantia=$("#dgarantia").val();
      console.log("Cambio en taller movil");
      precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
      console.log(precio);
      $("#clas-per").attr("class",thepercent(precio));
      $("#precio").html(precio);
      $("#hprecio").val(precio);
    });
  /* Fin cambios taller*/

  /* Cambio de deposito garantia */
  $('#dgarantia').change(function( event ) {
    modelo=$("#modelo").val();
    tvehiculo=$("#tvehiculo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    //vsustituto=$("input[name*='vsustituto']").val();
    if($("#op-1-1:checked").val()==1){
      vsustituto=1;
    }else{
      vsustituto=0;
    }
    tcobertura=$("#tcobertura").val();
    //tmovil=$("input[name*='tmovil']").val();
    if($("#op-1-3:checked").val()==1){
      tmovil=1;
    }else{
      tmovil=0;
    }
    dgarantia=$("#dgarantia").val();
    //console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+pcontrato+" kilometraje "+kilometraje+" vsustituto "+ vsustituto+" tcobertura"+tcobertura+" tmovil "+tmovil+" dgarantia "+dgarantia );
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);

    if(dgarantia==1){
      //2 depositos 4.5DEs
      precio=Math.round(precio-(precio*.045));
    }else if(dgarantia==2){
      // 3 depositos 6% descuento
      precio=Math.round(precio-(precio*.06));
    }else if(dgarantia==3){
      // 4 depositos 10% descuento
      precio=Math.round(precio-(precio*.1));
    }

    console.log(precio);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
    $("#hprecio").val(precio);
  });
  /*fin Cambio de cobertura*/



$("#breiniciar").click(function( event ) {
  //location.reload();
  window.location.assign("../index.php")
});



/***********Opción 2*******************/
/* Cambiar el modelo de auto */
$("#op2-modelo").change(function(event){
  var precio="";
  switch (this.value) {
    case '0':
      $("#op2-divimg").attr("src","img/hilux.png");
      link="?vehicle=toyota-hilux";
      break;
    case '1':
      $("#op2-divimg").attr("src","img/hiluxsencilla.png");
      link="?vehicle=toyota-hilux-single";
      break;
    case '2':
      $("#op2-divimg").attr("src","img/Prado.png");
      link="?vehicle=toyota-prado";
      break;
    case '3':
      $("#op2-divimg").attr("src","img/Fortuner.png");
      link="?vehicle=toyota-fortuner";
      break;
    case '4':
      $("#op2-divimg").attr("src","img/Rav4.png");
      link="?vehicle=toyota-rav4";
      break;
    case '5':
      $("#op2-divimg").attr("src","img/Rush.png");
      link=""; //No hay enlace para rush
      break;
    case '6':
      $("#op2-divimg").attr("src","img/Corolla.png");
      link="?vehicle=toyota-corolla";
      break;
    case '7':
      $("#op2-divimg").attr("src","img/Yaris.png");
      link="?vehicle=toyota-yaris";
      break;
    case '8':
      $("#op2-divimg").attr("src","img/Figo.png");
      link="?vehicle=ford-figo";
      break;
    case '9':
      $("#op2-divimg").attr("src","img/bego.png");
      link=""; //No hay enlace para bego
      break;

  }
  tvehiculo=$("#op2-tvehiculo").val();
  modelo=$("#op2-modelo").val();
  transmision=$("#op2-transmision").val();
  pcontrato=$("#op2-pcontrato").val();
  kilometraje=$("#op2-kilometraje").val();
  if($("#op-2-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#op2-tcobertura").val();
  //tmovil=$("input[name*='tmovil']").val();
  if($("#op-2-2:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }
  dgarantia=$("#op2-dgarantia").val();
  ocultaropciones(modelo);
  precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
  var dir="https://www.renting.cr/planes-renting.php";
  var href=dir+link;
  console.log(precio);
  $("#op2-lightbox-btn").attr("href", href);
  $("#clas-per2").attr("class",thepercent(precio));
  $("#op2-precio").html(precio);
  $("#op2-hprecio").val(precio);
});
/* Fin cambiar modelo del auto*/

/* Muestra los nuevos y oculta los seminuevos viceversa*/
$("#op2-tvehiculo").change(function(event) {
  console.log("Cambio tipo vehiculo op2");
  modelo=$("#op2-modelo").val();
  tvehiculo=$("#op2-tvehiculo").val();
  transmision=$("#op2-transmision").val();
  pcontrato=$("#op2-pcontrato").val();
  kilometraje=$("#op2-kilometraje").val();
  if($("#op-2-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#op2-tcobertura").val();
  if($("#op-2-3:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }

  dgarantia=$("#op2-dgarantia").val();
  if(this.value==1){//Seminuevo

      ocultaropciones(modelo);
      $("#op2-pcontrato option[value='0']").hide();//Ocultar contrato a 36m
      $("#op2-modelo option[value='0']").hide();
      $("#op2-modelo option[value='1']").hide();
      $("#op2-modelo option[value='3']").hide();
      $("#op2-modelo option[value='5']").hide();
      $("#op2-modelo option[value='8']").hide();
      $("#op2-modelo option[value='9']").show();
      $("#op2-pcontrato option[value='1']").attr("selected",true);
      $("#op2-pcontrato option[value='0']").hide(); //Oculta 36m
      $("#op2-pcontrato").click('1');
      $('#op2-modelo').val(modelo).change();
      precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
      console.log(precio);
      $("#clas-per2").attr("class",thepercent(precio));
      $("#op2-precio").html(precio);
  }else if(this.value==0){//Nuevo
    $("#op2-divimg").attr("src","img/hilux.png");
    $("#op2-modelo option[value='2']").hide();
    $("#op2-modelo option[value='4']").hide();
    $("#op2-modelo option[value='6']").hide();
    $("#op2-modelo option[value='7']").hide();
    $("#op2-modelo option[value='9']").hide();
    $("#op2-modelo option[value='0']").show();
    $("#op2-modelo option[value='2']").show();
    $("#op2-modelo option[value='1']").show();
    $("#op2-modelo option[value='3']").show();
    $("#op2-modelo option[value='4']").show();
    $("#op2-modelo option[value='5']").show();
    $("#op2-modelo option[value='6']").show();
    $("#op2-modelo option[value='7']").show();
    $("#op2-modelo option[value='8']").show();
    $("#op2-modelo option[value='9']").hide();
    $("#op2-pcontrato option[value='0']").show();//mostrar contrato a 36m
    $("#op2-tvehiculo option[value='0']").show();
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    console.log(precio);
    $("#op2-modelo").val(modelo).change();
    ocultaropciones(modelo);
    $("#clas-per2").attr("class",thepercent(precio));
    $("#op2-precio").html(precio);
    $("#op2-hprecio").val(precio);
  }
});
/* Fin Muestra los nuevos y oculta los seminuevos viceversa*/

/* Cambio de transmisión */
$('#op2-transmision').change(function( event ) {
  console.log("Cambio en la transmision");
  modelo=$("#op2-modelo").val();
  tvehiculo=$("#op2-tvehiculo").val();
  transmision=$("#op2-transmision").val();
  pcontrato=$("#op2-pcontrato").val();
  kilometraje=$("#op2-kilometraje").val();
  //vsustituto=$("input[name*='vsustituto']").val();
  if($("#op-2-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#op2-tcobertura").val();
  //tmovil=$("input[name*='tmovil']").val();
  if($("#op-2-3:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }
  dgarantia=$("#op2-dgarantia").val();
  console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+pcontrato+" kilometraje "+kilometraje+" vsustituto "+ vsustituto+" tcobertura"+tcobertura+" tmovil "+tmovil+" dgarantia "+dgarantia );
  precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
  console.log(precio);
  $("#clas-per2").attr("class",thepercent(precio));
  $("#op2-precio").html(precio);
  $("#op2-hprecio").val(precio);
});
/*fin Cambio de transmisión*/

/*  Cambiar mensualidades*/
$('#op2-pcontrato').change(function( event ) {
  modelo=$("#op2-modelo").val();
  tvehiculo=$("#op2-tvehiculo").val();
  transmision=$("#op2-transmision").val();
  pcontrato=$("#op2-pcontrato").val();
  kilometraje=$("#op2-kilometraje").val();
  //vsustituto=$("input[name*='vsustituto']").val();
  if($("#op-2-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#op2-tcobertura").val();
  //tmovil=$("input[name*='tmovil']").val();
  if($("#op-2-3:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }
  dgarantia=$("#op2-dgarantia").val();
  console.log("Cambio en mensualidades");
  precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
  console.log(precio);
  $("#clas-per2").attr("class",thepercent(precio));
  $("#op2-precio").html(precio);
  $("#op2-hprecio").val(precio);
});
/* Fin para agregar nuevo auto */

/* Cambio de kilometraje */
$('#op2-kilometraje').change(function( event ) {
  modelo=$("#op2-modelo").val();
  tvehiculo=$("#op2-tvehiculo").val();
  transmision=$("#op2-transmision").val();
  pcontrato=$("#op2-pcontrato").val();
  kilometraje=$("#op2-kilometraje").val();
  //vsustituto=$("input[name*='vsustituto']").val();
  if($("#op-2-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#tcobertura").val();
  //tmovil=$("input[name*='tmovil']").val();
  if($("#op-2-3:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }
  dgarantia=$("#op2-dgarantia").val();
  console.log("cambio kilometraje");
  precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
  console.log(precio);
  $("#clas-per2").attr("class",thepercent(precio));
  $("#op2-precio").html(precio);
  $("#op2-hprecio").val(precio);
});
/*fin Cambio de transmisión*/

/* Si/no Vehiculo sustituto*/
$('input[type="checkbox"]').click(function(){
  var $box = $(this);
  if ($box.is(":checked")) {
  var group = "input:checkbox[name='" + $box.attr("name") + "']";
  // the checked state of the group/box on the other hand will change
  // and the current value is retrieved using .prop() method
  $(group).prop("checked", false);
  $box.prop("checked", true);
   } else {
     $box.prop("checked", false);
   }
});
/* Fin si/no vehiculo sustituto */

/* CAmbios vehiculo sustituto*/
  $("input[name*='vsustituto2']").click(function(){
    modelo=$("#op2-modelo").val();
    tvehiculo=$("#op2-tvehiculo").val();
    transmision=$("#op2-transmision").val();
    pcontrato=$("#op2-pcontrato").val();
    kilometraje=$("#op2-kilometraje").val();
    //vsustituto=$("input[name*='vsustituto']:checked").val();
    if($("#op-2-1:checked").val()==1){
      vsustituto=1;
    }else{
      vsustituto=0;
    }
    tcobertura=$("#op2-tcobertura").val();
    //tmovil=$("input[name*='tmovil']:checked").val();
    if($("#op-2-3:checked").val()==1){
      tmovil=1;
    }else{
      tmovil=0;
    }
    dgarantia=$("#op2-dgarantia").val();
    console.log("Cambio en vehiculosustituto");
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    console.log(precio);
    $("#clas-per2").attr("class",thepercent(precio));
    $("#op2-precio").html(precio);
    $("#op2-hprecio").val(precio);
  });
/* Fin cambios vehiculo sustituto*/

/* Cambio de cobertura */
$('#op2-tcobertura').change(function( event ) {
  modelo=$("#op2-modelo").val();
  tvehiculo=$("#op2-tvehiculo").val();
  transmision=$("#op2-transmision").val();
  pcontrato=$("#op2-pcontrato").val();
  kilometraje=$("#op2-kilometraje").val();
  //vsustituto=$("input[name*='vsustituto']").val();
  if($("#op-2-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#op2-tcobertura").val();
  //tmovil=$("input[name*='tmovil']").val();
  if($("#op-2-3:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }
  dgarantia=$("#op2-dgarantia").val();
  console.log("Con deducible");
  precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
  console.log(precio);
  $("#clas-per2").attr("class",thepercent(precio));
  $("#op2-precio").html(precio);
  $("#op2-hprecio").val(precio);
});
/*fin Cambio de cobertura*/

/* CAmbios tallermovil*/
  $("input[name*='tmovil2']").click(function(){
    modelo=$("#op2-modelo").val();
    tvehiculo=$("#op2-tvehiculo").val();
    transmision=$("#op2-transmision").val();
    pcontrato=$("#op2-pcontrato").val();
    kilometraje=$("#op2-kilometraje").val();
    //vsustituto=$("input[name*='vsustituto']:checked").val();
    if($("#op-2-1:checked").val()==1){
      vsustituto=1;
    }else{
      vsustituto=0;
    }
    tcobertura=$("#op2-tcobertura").val();
    //tmovil=$("input[name*='tmovil']:checked").val();
    if($("#op-2-3:checked").val()==1){
      tmovil=1;
    }else{
      tmovil=0;
    }
    dgarantia=$("#op2-dgarantia").val();
    console.log("Cambio en taller movil");
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    console.log(precio);
    $("#clas-per2").attr("class",thepercent(precio));
    $("#op2-precio").html(precio);
    $("#op2-hprecio").val(precio);
  });
/* Fin cambios taller*/

/* Cambio de deposito garantia */
$('#op2-dgarantia').change(function( event ) {
  modelo=$("#op2-modelo").val();
  tvehiculo=$("#op2-tvehiculo").val();
  transmision=$("#op2-transmision").val();
  pcontrato=$("#op2-pcontrato").val();
  kilometraje=$("#op2-kilometraje").val();
  //vsustituto=$("input[name*='vsustituto']").val();
  if($("#op-2-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#op2-tcobertura").val();
  //tmovil=$("input[name*='tmovil']").val();
  if($("#op-2-3:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }
  dgarantia=$("#op2-dgarantia").val();
  console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+pcontrato+" kilometraje "+kilometraje+" vsustituto "+ vsustituto+" tcobertura"+tcobertura+" tmovil "+tmovil+" dgarantia "+dgarantia );
  precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);

  if(dgarantia==1){
    //2 depositos 4.5DEs
    precio=Math.round(precio-(precio*.045));
  }else if(dgarantia==2){
    // 3 depositos 6% descuento
    precio=Math.round(precio-(precio*.06));
  }else if(dgarantia==3){
    // 4 depositos 10% descuento
    precio=Math.round(precio-(precio*.1));
  }

  console.log(precio);
  $("#clas-per2").attr("class",thepercent(precio));
  $("#op2-precio").html(precio);
  $("#op2-hprecio").val(precio);
});
/*fin Cambio de cobertura*/

/***********fin Opción 2*******************/


/***********Opción 3*******************/
/* Cambiar el modelo de auto */
$("#op3-modelo").change(function(event){
  var precio="";
  switch (this.value) {
    case '0':
      $("#op3-divimg").attr("src","img/hilux.png");
      link="?vehicle=toyota-hilux";
      break;
    case '1':
      $("#op3-divimg").attr("src","img/hiluxsencilla.png");
      link="?vehicle=toyota-hilux-single";
      break;
    case '2':
      $("#op3-divimg").attr("src","img/Prado.png");
      link="?vehicle=toyota-prado";
      break;
    case '3':
      $("#op3-divimg").attr("src","img/Fortuner.png");
      link="?vehicle=toyota-fortuner";
      break;
    case '4':
      $("#op3-divimg").attr("src","img/Rav4.png");
      link="?vehicle=toyota-rav4";
      break;
    case '5':
      $("#op3-divimg").attr("src","img/Rush.png");
      link=""; //No hay enlace para rush
      break;
    case '6':
      $("#op3-divimg").attr("src","img/Corolla.png");
      link="?vehicle=toyota-corolla";
      break;
    case '7':
      $("#op3-divimg").attr("src","img/Yaris.png");
      link="?vehicle=toyota-yaris";
      break;
    case '8':
      $("#op3-divimg").attr("src","img/Figo.png");
      link="?vehicle=ford-figo";
      break;
    case '9':
      $("#op3-divimg").attr("src","img/bego.png");
      link=""; //No hay enlace para bego
      break;

  }
  tvehiculo=$("#op3-tvehiculo").val();
  modelo=$("#op3-modelo").val();
  transmision=$("#op3-transmision").val();
  pcontrato=$("#op3-pcontrato").val();
  kilometraje=$("#op3-kilometraje").val();
  if($("#op-3-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#op3-tcobertura").val();
  //tmovil=$("input[name*='tmovil']").val();
  if($("#op-3-2:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }
  dgarantia=$("#op3-dgarantia").val();
  ocultaropciones(modelo);
  precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
  var dir="https://www.renting.cr/planes-renting.php";
  var href=dir+link;
  console.log(precio);
  $("#op3-lightbox-btn").attr("href", href);
  $("#clas-per3").attr("class",thepercent(precio));
  $("#op3-precio").html(precio);
  $("#op3-hprecio").val(precio);
});
/* Fin cambiar modelo del auto*/

/* Muestra los nuevos y oculta los seminuevos viceversa*/
$("#op3-tvehiculo").change(function(event) {
  console.log("Cambio tipo vehiculo");
  modelo=$("#op3-modelo").val();
  tvehiculo=$("#op3-tvehiculo").val();
  transmision=$("#op3-transmision").val();
  pcontrato=$("#op3-pcontrato").val();
  kilometraje=$("#op3-kilometraje").val();
  //vsustituto=$("input[name*='vsustituto']").val();
  if($("#op-3-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#op3-tcobertura").val();
  //tmovil=$("input[name*='tmovil']").val();
  if($("#op-3-3:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }

  dgarantia=$("#op3-dgarantia").val();
  if(this.value==1){//Seminuevo

      ocultaropciones(modelo);
      $("#op3-pcontrato option[value='0']").hide();//Ocultar contrato a 36m
      $("#op3-modelo option[value='0']").hide();
      $("#op3-modelo option[value='1']").hide();
      $("#op3-modelo option[value='3']").hide();
      $("#op3-modelo option[value='5']").hide();
      $("#op3-modelo option[value='8']").hide();
      $("#op3-modelo option[value='9']").show();
      $("#op3-pcontrato option[value='1']").attr("selected",true);
      $("#op3-pcontrato option[value='0']").hide(); //Oculta 36m
      $("#op3-pcontrato").click('1');
      $('#op3-modelo').val(modelo).change();
      precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
      console.log(precio);
      $("#clas-per3").attr("class",thepercent(precio));
      $("#op3-precio").html(precio);
  }else if(this.value==0){//Nuevo
    $("#op3-divimg").attr("src","img/hilux.png");
    $("#op3-modelo option[value='2']").hide();
    $("#op3-modelo option[value='4']").hide();
    $("#op3-modelo option[value='6']").hide();
    $("#op3-modelo option[value='7']").hide();
    $("#op3-modelo option[value='9']").hide();
    $("#op3-modelo option[value='0']").show();
    $("#op3-modelo option[value='2']").show();
    $("#op3-modelo option[value='1']").show();
    $("#op3-modelo option[value='3']").show();
    $("#op3-modelo option[value='4']").show();
    $("#op3-modelo option[value='5']").show();
    $("#op3-modelo option[value='6']").show();
    $("#op3-modelo option[value='7']").show();
    $("#op3-modelo option[value='8']").show();
    $("#op3-modelo option[value='9']").hide();
    $("#op3-pcontrato option[value='0']").show();//mostrar contrato a 36m
    $("#op3-tvehiculo option[value='0']").show();
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    console.log(precio);
    $("#op3-modelo").val(modelo).change();
    ocultaropciones(modelo);
    $("#clas-per3").attr("class",thepercent(precio));
    $("#op3-precio").html(precio);
    $("#op3-hprecio").val(precio);
  }
});
/* Fin Muestra los nuevos y oculta los seminuevos viceversa*/

/* Cambio de transmisión */
$('#op3-transmision').change(function( event ) {
  console.log("Cambio en la transmision");
  modelo=$("#op3-modelo").val();
  tvehiculo=$("#op3-tvehiculo").val();
  transmision=$("#op3-transmision").val();
  pcontrato=$("#op3-pcontrato").val();
  kilometraje=$("#op3-kilometraje").val();
  //vsustituto=$("input[name*='vsustituto']").val();
  if($("#op-3-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#op3-tcobertura").val();
  //tmovil=$("input[name*='tmovil']").val();
  if($("#op-3-3:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }
  dgarantia=$("#op3-dgarantia").val();
  console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+pcontrato+" kilometraje "+kilometraje+" vsustituto "+ vsustituto+" tcobertura"+tcobertura+" tmovil "+tmovil+" dgarantia "+dgarantia );
  precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
  console.log(precio);
  $("#clas-per3").attr("class",thepercent(precio));
  $("#op3-precio").html(precio);
  $("#op3-hprecio").val(precio);
});
/*fin Cambio de transmisión*/

/*  Cambiar mensualidades*/
$('#op3-pcontrato').change(function( event ) {
  modelo=$("#op3-modelo").val();
  tvehiculo=$("#op3-tvehiculo").val();
  transmision=$("#op3-transmision").val();
  pcontrato=$("#op3-pcontrato").val();
  kilometraje=$("#op3-kilometraje").val();
  //vsustituto=$("input[name*='vsustituto']").val();
  if($("#op-3-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#op3-tcobertura").val();
  //tmovil=$("input[name*='tmovil']").val();
  if($("#op-3-3:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }
  dgarantia=$("#op3-dgarantia").val();
  console.log("Cambio en mensualidades");
  precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
  console.log(precio);
  $("#clas-per3").attr("class",thepercent(precio));
  $("#op3-precio").html(precio);
  $("#op3-hprecio").val(precio);
});
/* Fin para agregar nuevo auto */

/* Cambio de kilometraje */
$('#op3-kilometraje').change(function( event ) {
  modelo=$("#op3-modelo").val();
  tvehiculo=$("#op3-tvehiculo").val();
  transmision=$("#op3-transmision").val();
  pcontrato=$("#op3-pcontrato").val();
  kilometraje=$("#op3-kilometraje").val();
  //vsustituto=$("input[name*='vsustituto']").val();
  if($("#op-3-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#op3-tcobertura").val();
  //tmovil=$("input[name*='tmovil']").val();
  if($("#op-3-3:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }
  dgarantia=$("#op3-dgarantia").val();
  console.log("cambio kilometraje");
  precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
  console.log(precio);
  $("#clas-per3").attr("class",thepercent(precio));
  $("#op3-precio").html(precio);
  $("#op3-hprecio").val(precio);
});
/*fin Cambio de transmisión*/

/* Si/no Vehiculo sustituto*/
$('input[type="checkbox"]').click(function(){
  var $box = $(this);
  if ($box.is(":checked")) {
  var group = "input:checkbox[name='" + $box.attr("name") + "']";
  // the checked state of the group/box on the other hand will change
  // and the current value is retrieved using .prop() method
  $(group).prop("checked", false);
  $box.prop("checked", true);
   } else {
     $box.prop("checked", false);
   }
});
/* Fin si/no vehiculo sustituto */

/* CAmbios vehiculo sustituto*/
  $("input[name*='vsustituto3']").click(function(){
    modelo=$("#op3-modelo").val();
    tvehiculo=$("#op3-tvehiculo").val();
    transmision=$("#op3-transmision").val();
    pcontrato=$("#op3-pcontrato").val();
    kilometraje=$("#op3-kilometraje").val();
    //vsustituto=$("input[name*='vsustituto']:checked").val();
    if($("#op-3-1:checked").val()==1){
      vsustituto=1;
    }else{
      vsustituto=0;
    }
    tcobertura=$("#op3-tcobertura").val();
    //tmovil=$("input[name*='tmovil']:checked").val();
    if($("#op-3-3:checked").val()==1){
      tmovil=1;
    }else{
      tmovil=0;
    }
    dgarantia=$("#op3-dgarantia").val();
    console.log("Cambio en vehiculosustituto");
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    console.log(precio);
    $("#clas-per3").attr("class",thepercent(precio));
    $("#op3-precio").html(precio);
    $("#op3-hprecio").val(precio);
  });
/* Fin cambios vehiculo sustituto*/

/* Cambio de cobertura */
$('#op3-tcobertura').change(function( event ) {
  modelo=$("#op3-modelo").val();
  tvehiculo=$("#op3-tvehiculo").val();
  transmision=$("#op3-transmision").val();
  pcontrato=$("#op3-pcontrato").val();
  kilometraje=$("#op3-kilometraje").val();
  //vsustituto=$("input[name*='vsustituto']").val();
  if($("#op-3-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#op3-tcobertura").val();
  //tmovil=$("input[name*='tmovil']").val();
  if($("#op-3-3:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }
  dgarantia=$("#op3-dgarantia").val();
  console.log("Con deducible");
  precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
  console.log(precio);
  $("#clas-per3").attr("class",thepercent(precio));
  $("#op3-precio").html(precio);
  $("#op3-hprecio").val(precio);
});
/*fin Cambio de cobertura*/

/* CAmbios tallermovil*/
  $("input[name*='tmovil2']").click(function(){
    modelo=$("#op3-modelo").val();
    tvehiculo=$("#op3-tvehiculo").val();
    transmision=$("#op3-transmision").val();
    pcontrato=$("#op3-pcontrato").val();
    kilometraje=$("#op3-kilometraje").val();
    //vsustituto=$("input[name*='vsustituto']:checked").val();
    if($("#op-3-1:checked").val()==1){
      vsustituto=1;
    }else{
      vsustituto=0;
    }
    tcobertura=$("#op3-tcobertura").val();
    //tmovil=$("input[name*='tmovil']:checked").val();
    if($("#op-3-3:checked").val()==1){
      tmovil=1;
    }else{
      tmovil=0;
    }
    dgarantia=$("#op3-dgarantia").val();
    console.log("Cambio en taller movil");
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    console.log(precio);
    $("#clas-per3").attr("class",thepercent(precio));
    $("#op3-precio").html(precio);
    $("#op3-hprecio").val(precio);
  });
/* Fin cambios taller*/

/* Cambio de deposito garantia */
$('#op3-dgarantia').change(function( event ) {
  modelo=$("#op3-modelo").val();
  tvehiculo=$("#op3-tvehiculo").val();
  transmision=$("#op3-transmision").val();
  pcontrato=$("#op3-pcontrato").val();
  kilometraje=$("#op3-kilometraje").val();
  //vsustituto=$("input[name*='vsustituto']").val();
  if($("#op-3-1:checked").val()==1){
    vsustituto=1;
  }else{
    vsustituto=0;
  }
  tcobertura=$("#op3-tcobertura").val();
  //tmovil=$("input[name*='tmovil']").val();
  if($("#op-3-3:checked").val()==1){
    tmovil=1;
  }else{
    tmovil=0;
  }
  dgarantia=$("#op3-dgarantia").val();
  console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+pcontrato+" kilometraje "+kilometraje+" vsustituto "+ vsustituto+" tcobertura"+tcobertura+" tmovil "+tmovil+" dgarantia "+dgarantia );
  precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);

  if(dgarantia==1){
    //2 depositos 4.5DEs
    precio=Math.round(precio-(precio*.045));
  }else if(dgarantia==2){
    // 3 depositos 6% descuento
    precio=Math.round(precio-(precio*.06));
  }else if(dgarantia==3){
    // 4 depositos 10% descuento
    precio=Math.round(precio-(precio*.1));
  }

  console.log(precio);
  $("#clas-per3").attr("class",thepercent(precio));
  $("#op3-precio").html(precio);
  $("#op3-hprecio").val(precio);
});
/*fin Cambio de cobertura*/

/******* Fin opcion 3 ******/

}); //Fin Document ready
function moreinicia(){
  window.location.assign("../index.php")
}

function boreinicia(){
  window.location.assign("../index.php")
}

function ocultaropciones(modelo){
    console.log("oculta opciones del modelo: "+modelo);
    switch(modelo){
      case '0': //Hilux doble
        /****
          Hilux Doble; Solo transmisión Manual, Nuevo, 36M, 24M, 12M
        **/
        //$('#transmision').val('0').change();
        /*Tipo de Transmisión Manual ->0  Automática->1 */
        $("#transmision option[value='0']").show();
        $("#transmision option[value='0']").attr("selected",true);
        $("#transmision option[value='1']").hide(); //Oculta automatica
        /* Tipo de vehículo Nuevo ->0 Seminuevo->1  */
        $("#tvehiculo option[value='0']").show(); //Muestra nuevos
        $("#tvehiculo option[value='0']").attr("selected",true);
        $("#tvehiculo option[value='1']").hide(); //oculta seminuevos

        $("#op2-transmision option[value='0']").show();
        $("#op2-transmision option[value='0']").attr("selected",true);
        $("#op2-transmision option[value='1']").hide(); //Oculta automatica
        $("#op2-tvehiculo option[value='0']").show(); //Muestra nuevos
        $("#op2-tvehiculo option[value='0']").attr("selected",true);
        $("#op2-tvehiculo option[value='1']").hide(); //oculta seminuevos

        $("#op2-transmision option[value='0']").show();
        $("#op3-transmision option[value='0']").attr("selected",true);
        $("#op3-transmision option[value='1']").hide(); //Oculta automatica
        $("#op3-tvehiculo option[value='0']").show(); //Muestra nuevos
        $("#op3-tvehiculo option[value='0']").attr("selected",true);
        $("#op3-tvehiculo option[value='1']").hide(); //oculta seminuevos
      break;
      case '1': //Hilux sencilla
        /*
          Hilux sencilla Solo transmisión Manual, Nuevo, 36M, 24M, 12M
        */
        $("#transmision option[value='0']").show();
        $("#transmision option[value='0']").attr("selected",true);
        $("#transmision option[value='1']").hide(); //Oculta automatica
        $("#tvehiculo option[value='0']").show();
        $("#tvehiculo option[value='0']").attr("selected",true);
        $("#tvehiculo option[value='1']").hide(); //oculta seminuevos

        $("#op2-transmision option[value='0']").show();
        $("#op2-transmision option[value='0']").attr("selected",true);
        $("#op2-transmision option[value='1']").hide(); //Oculta automatica
        $("#op2-tvehiculo option[value='0']").show();
        $("#op2-tvehiculo option[value='0']").attr("selected",true);
        $("#op2-tvehiculo option[value='1']").hide(); //oculta seminuevos
        $("#op3-tvehiculo option[value='0']").show();

        $("#op3-transmision option[value='0']").show();
        $("#op3-transmision option[value='0']").attr("selected",true);
        $("#op3-transmision option[value='1']").hide(); //Oculta automatica
        $("#op3-tvehiculo option[value='0']").show();
        $("#op3-tvehiculo option[value='0']").attr("selected",true);
        $("#op3-tvehiculo option[value='1']").hide(); //oculta seminuevos
      break;
      case '2'://Prado
        /*
          Prado: Solo en Automatico; Nueva a 36m, 24m y 12m, seminueva a 24m y 12m,
        */
        $("#transmision option[value='1']").show();// muestra automatica
        $("#transmision option[value='1']").attr("selected",true);
        $("#transmision option[value='0']").hide(); //Oculta Manual
        $("#tvehiculo option[value='0']").show();// muestra nuevos
        $("#tvehiculo option[value='1']").show(); //muestra seminuevos
        $("#tvehiculo option[value='0']").attr("selected",true);

        $("#op2-transmision option[value='1']").show(); // muestra automatica
        $("#op2-transmision option[value='1']").attr("selected",true);
        $("#op2-transmision option[value='0']").hide(); //Oculta Manual
        $("#op2-tvehiculo option[value='1']").show(); //muestra seminuevos
        $("#op2-tvehiculo option[value='1']").attr("selected",true);
        $("#op2-tvehiculo option[value='0']").show();// muestra nuevos


        $("#op3-transmision option[value='1']").show(); // muestra automatica
        $("#op3-transmision option[value='1']").attr("selected",true);
        $("#op3-transmision option[value='0']").hide(); //Oculta Manual
        $("#op3-tvehiculo option[value='0']").attr("selected",true);
        $("#op3-tvehiculo option[value='0']").show();// muestra nuevos
        $("#op3-tvehiculo option[value='1']").show(); //muestra seminuevos

      break;
      case '3': //Fortuner
        /*
          Fortuner Solo Nueva en automático y a 36m, 24m y 12m
        */
        //$('#transmision').val('1').change(); //DEfautl automatica
        $("#transmision option[value='1']").show(); // muestra automatica
        $("#transmision option[value='1']").attr("selected",true);
        $("#transmision option[value='0']").hide(); //Oculta Manual
        $("#tvehiculo option[value='0']").show();
        $("#tvehiculo option[value='1']").hide();

      //$('#op2-transmision').val('1').change(); //DEfautl automatica
        $("#op2-transmision option[value='1']").show(); // muestra automatica
        $("#op2-transmision option[value='1']").attr("selected",true);
        $("#op2-transmision option[value='0']").hide(); //Oculta Manual
        $("#op2-tvehiculo option[value='0']").show();
        $("#op2-tvehiculo option[value='1']").hide();

        $("#op3-transmision option[value='1']").show();
        $("#op3-transmision option[value='0']").hide(); //Oculta Manual
        $("#op3-transmision option[value='1']").attr("selected",true);
        //$('#op3-transmision').val('1').change(); //DEfautl automatica
        $("#op3-tvehiculo option[value='0']").show();
        $("#op3-tvehiculo option[value='1']").hide();
      break;
      case '4': //Rav 4
        /*
          Rav 4 Versiones Nuevo, Manual y automático a 36m, 24m y 12, seminuevo manual y automático a 24m y 12 m
        */
        $("#transmision option[value='0']").show(); //muestra Manual
        $("#transmision option[value='1']").show(); // muestra automatica
        $("#transmision option[value='1']").attr("selected",true);
        $("#tvehiculo option[value='1']").show(); //muestra seminuevos
        $("#tvehiculo option[value='0']").show(); //muestra nuevos
        //$('#transmision').val('1').change();

        $("#op2-transmision option[value='0']").show(); //muestra Manual
        $("#op2-transmision option[value='1']").show(); // muestra automatica
        $("#op2-transmision option[value='1']").attr("selected",true);
        $("#op2-tvehiculo option[value='1']").show(); //muestra seminuevos
        $("#op2-tvehiculo option[value='0']").show(); //muestra nuevos
        //$('#op2-transmision').val('1').change();

        $("#op3-transmision option[value='0']").show(); //muestra Manual
        $("#op3-transmision option[value='1']").show(); // muestra automatica
        $("#op3-transmision option[value='1']").attr("selected",true);
        $("#op3-tvehiculo option[value='1']").show(); //muestra seminuevos
        $("#op3-tvehiculo option[value='0']").show(); //muestra nuevos
      break;
      case '5': //Rush
      /*
        Rush Solo Nueva en automática y manual
      */
        $("#transmision option[value='0']").show(); //muestra Manual
        $("#transmision option[value='1']").show(); // muestra automatica
        $("#transmision option[value='1']").attr("selected",true);
        //$('#transmision').val('1').change(); //DEfautl automatica
        $("#tvehiculo option[value='0']").show();
        $("#tvehiculo option[value='1']").hide(); //oculta seminuevos

        $("#op2-transmision option[value='0']").show(); //muestra Manual
        $("#op2-transmision option[value='1']").show(); // muestra automatica
        $("#op2-transmision option[value='1']").attr("selected",true);
        $("#op2-tvehiculo option[value='0']").show();
        $("#op2-tvehiculo option[value='1']").hide(); //oculta seminuevos

        $("#op3-transmision option[value='0']").show(); //muestra Manual
        $("#op3-transmision option[value='1']").show(); // muestra automatica
        $("#op3-transmision option[value='1']").attr("selected",true);
        $("#op3-tvehiculo option[value='0']").show();
        $("#op3-tvehiculo option[value='1']").hide(); //oculta seminuevos
      break;
      case '6': //Corolla
      /*
        Corolla Solo en Automático Nuevo 36m, 24m, 12m, Seminuevo 24m y 12m
      */
        $("#transmision option[value='0']").hide(); //Oculta Manual
        $("#transmision option[value='1']").show(); // muestra automatica
        $("#transmision option[value='1']").attr("selected",true);
        $("#tvehiculo option[value='1']").show(); //muestra seminuevos
        $("#tvehiculo option[value='0']").show(); //muestra nuevos

        $("#op2-transmision option[value='0']").hide(); //Oculta Manual
        $("#op2-transmision option[value='1']").show(); // muestra automatica
        $("#op2-transmision option[value='1']").attr("selected",true);
        $("#op2-tvehiculo option[value='1']").show(); //muestra seminuevos
        $("#op2-tvehiculo option[value='0']").show(); //muestra nuevos

        $("#op3-transmision option[value='0']").hide(); //Oculta Manual
        $("#op3-transmision option[value='1']").show(); // muestra automatica
        $("#op3-transmision option[value='1']").attr("selected",true);
        $("#op3-tvehiculo option[value='1']").show(); //muestra seminuevos
        $("#op3-tvehiculo option[value='0']").show(); //muestra nuevos
      break;
      case '7': //Yaris
        /*
          Yaris Versiones Nuevo, Manual y automático a 36m, 24m y 12, seminuevo manual y automático a 24m y 12 m
        */
        $("#transmision option[value='0']").show(); //muestra Manual
        $("#transmision option[value='1']").show(); // muestra automatica
        $("#transmision option[value='1']").attr("selected",true);
        $("#tvehiculo option[value='0']").show();
        $("#tvehiculo option[value='1']").show();

        $("#op2-transmision option[value='0']").show(); //muestra Manual
        $("#op2-transmision option[value='1']").show(); // muestra automatica
        $("#op2-transmision option[value='1']").attr("selected",true);
        $("#op2-tvehiculo option[value='0']").show();
        $("#op2-tvehiculo option[value='1']").show();

        $("#op3-transmision option[value='0']").show(); //muestra Manual
        $("#op3-transmision option[value='1']").show(); // muestra automatica
        $("#op3-transmision option[value='1']").attr("selected",true);
        $("#op3-tvehiculo option[value='1']").show();
        $("#op3-tvehiculo option[value='0']").show();
      break;
      case '8': //Figo
        /*
        Figo Solo Nuevo en automatico 36m 24m y 12m manual  a 24m y 12m
        */
        $("#transmision option[value='0']").show(); //muestra Manual
        $("#transmision option[value='1']").show(); // muestra automatica
        //$('#transmision').val('1').change(); //DEfautl automatica
        $("#transmision option[value='1']").attr("selected",true);
        $("#tvehiculo option[value='1']").hide(); //oculta seminuevos
        $("#tvehiculo option[value='0']").show();


        $("#op2-transmision option[value='0']").show(); //muestra Manual
        $("#op2-transmision option[value='1']").show(); // muestra automatica
        $("#op2-transmision option[value='1']").attr("selected",true);
        $("#op2-tvehiculo option[value='0']").show();
        $("#op2-tvehiculo option[value='1']").hide();

        $("#op3-transmision option[value='0']").show(); //muestra Manual
        $("#op3-transmision option[value='1']").show(); // muestra automatica
        $("#op3-transmision option[value='1']").attr("selected",true);
        $("#op3-tvehiculo option[value='0']").show();
        $("#op3-tvehiculo option[value='1']").hide();
      break;
      case '9': //bego
        /*
          Bego; Solo Seminuevo, automático y manual 24m y 12m
        */
        $("#transmision option[value='0']").show(); //muestra Manual
        $("#transmision option[value='1']").show(); // muestra automatica
        $("#transmision option[value='1']").attr("selected",true);
        $("#tvehiculo option[value='0']").hide(); //oculta nuevos

        $("#op2-transmision option[value='0']").show(); //muestra Manual
        $("#op2-transmision option[value='1']").show(); // muestra automatica
        $("#op2-transmision option[value='1']").attr("selected",true);
        $("#op2-tvehiculo option[value='0']").show(); //oculta nuevos

        $("#op3-transmision option[value='0']").show(); //muestra Manual
        $("#op3-transmision option[value='1']").show(); // muestra automatica
        $("#op3-transmision option[value='1']").attr("selected",true);
        $("#op3-tvehiculo option[value='0']").show(); //oculta nuevos
      break;

    }

}
