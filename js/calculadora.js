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
//$(document).on('ready', function () {
$(document).ready(function(){
$("#opcion3").hide();
$("#comparar").click();

  /* Carga los JSON de la matriz Google*/
    var m36=JSON.parse($("#36m").val());
    var m24=JSON.parse($("#24m").val());
    var m12=JSON.parse($("#12m").val());
    var m24_s=JSON.parse($("#24m_s").val());
    var m12_s=JSON.parse($("#12m_s").val());
  /* Fin carga JSON*/

  /* Cambiar el modelo de auto */
  $("#modelo").change(function(event){
    var precio="";
    switch (this.value) {
      case '1':
        $("#divimg").attr("src","img/hiluxsencilla.png");
        link="toyota-hilux-single";
        //$('select[name="transmision"] option[value="1"]').remove();//Remueve automatica
        break;
      case '2':
        $("#divimg").attr("src","img/Prado.png");
        link="toyota-prado";
      //  $('select[name="transmision"] option[value="0"]').remove();
        //precios(tvehiculo, modelo, transmision, meses)
        break;
      case '3':
        $("#divimg").attr("src","img/Fortuner.png");
        //$('select[name="transmision"] option[value="0"]').remove();
        link="toyota-fortuner";
        break;
      case '4':
        $("#divimg").attr("src","img/Rav4.png");
        link="toyota-rav4";
        break;
      case '5':
        $("#divimg").attr("src","img/Rush.png");
        link="toyota-hilux-single";
        break;
      case '6':
        $("#divimg").attr("src","img/Corolla.png");
        //$('select[name="transmision"] option[value="0"]').remove(); //Remueve manual
        link="toyota-corolla";
        break;
      case '7':
        $("#divimg").attr("src","img/Yaris.png");
        link="toyota-yaris";
        break;
      case '8':
        $("#divimg").attr("src","img/Figo.png");
        link="ford-figo";
        break;
      case '9':
        $("#divimg").attr("src","img/bego.png");
        link="ford-bego";
        break;
      default:
      $("#divimg").attr("src","img/hilux.png");
      //$('select[name="transmision"] option[value="0"]').remove();
      link="toyota-hilux";
    }
    tvehiculo=$("#tvehiculo").val();
    modelo=$("#modelo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    vsustituto=$("input[name*='vsustituto']").val();
    tcobertura=$("#tcobertura").val();
    tmovil=$("input[name*='tmovil']").val();
    dgarantia=$("#dgarantia").val();
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    var dir="https://www.renting.cr/planes-renting.php?vehicle=";
    var href=dir+link;
    console.log(precio);
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
    console.log("Cambio en mensualidades");
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    console.log(precio);
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
    console.log("cambio kilometraje");
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    console.log(precio);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
  });
  /*fin Cambio de transmisión*/

  /* Si/no Vehiculo sustituto*/
  $('input[type="checkbox"]').click(function(){
  /*  if($(this).prop("checked") == true){
    alert("Checkbox is checked.");
    }else if($(this).prop("checked") == false){
        alert("Checkbox is unchecked.");
    }*/
    var $box = $(this);
 if ($box.is(":checked")) {
   // the name of the box is retrieved using the .attr() method
   // as it is assumed and expected to be immutable
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

  /* Fin cambios vehiculo sustituto*/

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
    console.log("Con deducible");
    precio=precios(tvehiculo, modelo, transmision, pcontrato, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
    console.log(precio);
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
  });
  /*fin Cambio de cobertura*/

  /*  Agregar un nuevo auto para comparar*/
  $('.tabnew').click(function( event ) {
      numdiv++;
      if(numdiv==2){$(".tabnew").hide()}
      if(numdiv<3){

        $('#newtab').append('<button>Opción 2</button> ');
      }else{
        //lert("Comparar hasta 3");
        $(".tabnew").hide();
      }
  });
  /* Fin para agregar nuevo auto */


  /* Muestra los nuevos y oculta los seminuevos viceversa*/
  $("#tvehiculo").change(function(event) {
    console.log("Cambio tipo vehiculo");
    modelo=$("#modelo").val();
    tvehiculo=$("#tvehiculo").val();
    transmision=$("#transmision").val();
    pcontrato=$("#pcontrato").val();
    kilometraje=$("#kilometraje").val();
    vsustituto=$("input[name*='vsustituto']").val();
    tcobertura=$("#tcobertura").val();
    tmovil=$("input[name*='tmovil']").val();
    dgarantia=$("#dgarantia").val();
    if(this.value==1){//Seminuevo
        $("#divimg").attr("src","img/Prado.png");
        $('select[name="pcontrato"] option[value="0"]').remove();
        $('select[name="modelo"] option[value="0"]').remove();
        $('select[name="modelo"] option[value="1"]').remove();
        $('select[name="modelo"] option[value="3"]').remove();
        $('select[name="modelo"] option[value="5"]').remove();
        $('select[name="modelo"] option[value="8"]').remove();
        $('#modelo').append('<option value="9">Bego</option>');
        precio=precios(1, 2, 0, 0, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s);
        console.log(precio);
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
      console.log(precio);
      $("#clas-per").attr("class",thepercent(precio));
      $("#precio").html(precio);
    }
  });

  /* Fin Muestra los nuevos y oculta los seminuevos viceversa*/

  /* Cambio de transmisión */
  $('#transmision').change(function( event ) {
    console.log("Cambio en la transmision");
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
    console.log(precio);
    $("#clas-per").attr("class",thepercent(precio));
    $("#precio").html(precio);
  });
  /*fin Cambio de transmisión*/

  $("#breiniciar").click(function( event ) {
    //alert("Reiniciar");
    location.reload();
  });

  /*fin Cambio de transmisión*/

  /* Boton comparar*/
  $("#Butcomparar").click(function(event){
      $("#opcion3").show();
      $("#hidecomaparar").hide();
  });
  /* Fin botón comparar*/

}); //Fin Document ready
