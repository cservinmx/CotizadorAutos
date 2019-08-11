/*
  Author: Carlos Servín Romero
  email: carlos@servin.mx, cservinmx@gmail.com
*/
$(document).ready(function(){

  /* Queda oculto al principio */
  $("#tabs").hide();
  $("#opcion3").hide();
  $("#compareclose").hide();
  $("#comparar").click();
  $("#op2").hide();
  $("#op3").hide();
  $("#tab2").hide();
  $("#tab3").hide();


$("#backbutton").click(function (event){

  $("#backform").submit();
})

/**** Botones comparar *********/
/* Boton comparar*/
$("#compararmov").click(function(event){
    $("#tabs").show();
    $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
});

$("#op2comparar").click(function(event){
    $("#opcion3").show();
    $("#compareclose").show();
    $("#op2comparar").hide();
});
/* Fin botón comparar*/
$("#compareclose").click(function(event){

    $("#opcion3").hide();
    $("#compareclose").hide();
    $("#op2comparar").show();
});
/*** Fin Botones comparar*******/

/*  Agregar un nuevo auto para comparar*/
$('.tabnew').click(function( event ) {
    numdiv++;
    suma=parseInt(numdiv)+parseInt('1');
    tab="tab"+suma;
    if(numdiv==2){$(".tabnew").hide()}
    if(numdiv<3){
      if(numdiv==1){ $("#op2").show(); }
      if(numdiv==2){ $("#op3").show();}
      //$('#newtab').append('<button class="tablinks" onclick="open(event, '+tab+')">Opción '+suma+'</button> ');
    //  $('#newtab').html('<div class="noactive" id="'+tab+'"><div id="close-'+suma+'"class="closebutt"></div><div class="btitle">Opción '+suma+'</div></div>');
    }else{
      //lert("Comparar hasta 3");
      $(".tabnew").hide();
    }
});

$(".closebutt").click(function(event){
  if(this.id=="c2"){
      numdiv--;
      $("#op2").hide();
  }else{
    numdiv--;
    numdiv--;
    $("#op3").hide();
  }

  $(".tabnew").show()
});

$(".noactive, .active").click(function(event){
  if(this.id=="op2"){
    $("#tab1").hide();
    $("#tab2").show();
    $("#op2").removeClass("noactive");
    $("#op2").addClass("active");
    $("#op1").removeClass("active");
    $("#op1").addClass("noactive");
    $("#op3").removeClass("active");
    $("#op3").addClass("noactive");
    $("#tab3").hide();
  }else if(this.id=="op3") {

    $("#tab1").hide();
    $("#tab2").hide();
    $("#tab3").show();
    $("#op3").removeClass("noactive");
    $("#op3").addClass("active");
    $("#op2").removeClass("active");
    $("#op2").addClass("noactive");
    $("#op1").removeClass("active");
    $("#op1").addClass("noactive");
  }else if(this.id=="op1"){
    $("#tab1").show();
    $("#tab2").hide();
    $("#tab3").hide();
    $("#op1").removeClass("noactive");
    $("#op1").addClass("active");
    $("#op2").removeClass("active");
    $("#op2").addClass("noactive");
    $("#op3").removeClass("active");
    $("#op3").addClass("noactive");
  }
});
/* Fin para agregar nuevo auto */
});
