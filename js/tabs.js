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
});

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
<<<<<<< HEAD
      if(numdiv==1){ $("#op2").show(); $("#op2").click(); }
      if(numdiv==2){ $("#op3").show(); $("#op3").click();}
=======
      if(numdiv==1){ $("#op2").show(); $("#bt-op2").click(); }
      if(numdiv==2){ $("#op3").show(); $("#bt-op3").click();}
>>>>>>> 475fb1b7baa413766f928e49934b0cc1e9b8eaa7

    }else{
      //lert("Comparar hasta 3");
      $(".tabnew").hide();
    }
});

$(".closebutt").click(function(event){
<<<<<<< HEAD

=======
  //console.log("close  tab");
>>>>>>> 475fb1b7baa413766f928e49934b0cc1e9b8eaa7
  if(this.id=="c2"){
      numdiv--;
      $("#tab1").show();
      $("#op2").hide();
      $("#tab2").hide();
<<<<<<< HEAD
      console.log("entra opcion2 ");
      $("#op1").removeClass("noactive");
      $("#op1").addClass("active");
      //$("#op1").click();
      $("#op1").trigger( "click" );

  }else{
    numdiv--;
    numdiv--;
    $("#tab1").show();
    $("#op3").hide();
    $("#tab3").hide();
    $("#op1").trigger( "click" );
    console.log("entra opcion 3");
=======
      $("#op1").removeClass("noactive");
      $("#op1").addClass("active");
      $("#bt-op1").click();
      $("#tab1").show();
  }else{
      numdiv--;
      numdiv--;
      $("#op3").hide();
      $("#tab3").hide();
      $("#op1").removeClass("noactive");
      $("#op1").addClass("active");
      $("#bt-op1").click();
      $("#tab1").show();
>>>>>>> 475fb1b7baa413766f928e49934b0cc1e9b8eaa7
  }
  $(".tabnew").show();
});

$(".innertab").click(function(event){
  //console.log("buton tab");
  if(this.id=="bt-op2"){
    $("#tab1").hide();
    $("#tab2").show();
    $("#op2").removeClass("noactive");
    $("#op2").addClass("active");
    $("#op1").removeClass("active");
    $("#op1").addClass("noactive");
    $("#op3").removeClass("active");
    $("#op3").addClass("noactive");
    $("#tab3").hide();
  }else if(this.id=="bt-op3") {

    $("#tab1").hide();
    $("#tab2").hide();
    $("#tab3").show();
    $("#op3").removeClass("noactive");
    $("#op3").addClass("active");
    $("#op2").removeClass("active");
    $("#op2").addClass("noactive");
    $("#op1").removeClass("active");
    $("#op1").addClass("noactive");
  }else if(this.id=="bt-op1"){
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
