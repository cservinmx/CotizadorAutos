/*
  Author: Carlos Servín Romero
  email: carlos@servin.mx, cservinmx@gmail.com
*/

var speed = {
  'trigger': '#speed-compare',
  'target': '.modal_content .speedometer'
};

var numdiv=0;

$(function () {

  $("#modelo").change(function(event){
    switch (this.value) {
      case '2':
        $("#divimg").attr("src","img/hiluxsencilla.png");
        break;
      case '3':
        $("#divimg").attr("src","img/prado.png");
        break;
      case '4':
        $("#divimg").attr("src","img/fortuner.png");
        break;
      case '5':
        $("#divimg").attr("src","img/rav4-1.png");
        break;
      case '6':
        $("#divimg").attr("src","img/rush1.png");
        break;
      case '7':
        $("#divimg").attr("src","img/corolla.png");
        break;
      case '8':
        $("#divimg").attr("src","img/yaris.png");
        break;
      case '9':
          $("#divimg").attr("src","img/figo.png");
        break;
      default:
      $("#divimg").attr("src","img/hilux.png");
    }
  });

  $(speed.trigger).on('click', function () {
    setTimeout(function () {
      $(speed.target).each(function () {
        $(this).addClass('play');
      });
    }, 1000);
  });

  $('.btn-addBody').click(function( event ) {
      numdiv++;
      if(numdiv<3){
        $('.main').append('<div class="divBody">Nuevo div</div>');
      }else{
        alert("Comparar hasta 3");
      }

  });

  $("#breiniciar").click(function( event ) {
      alert("Reiniciar");
      location.reload();
  });

});
