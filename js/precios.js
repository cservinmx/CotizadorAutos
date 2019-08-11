/*
  Author: Carlos Servín Romero
  email: carlos@servin.mx, cservinmx@gmail.com
*/

/* Tranforma el precio a porecentaje tacómetro*/
function thepercent(precio){
  var min=351; //351 Valor real se agrega un margen para que no salga del tacometro
  var max=2150; // 2022 Valor real se agrega un margen para que no salga del tacometro
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
    case 1:
      var clas="percent-1";
      break;
    case 2:
      var clas="percent-2";
      break;
    case 3:
      var clas="percent-3";
      break;
    case 4:
      var clas="percent-4";
      break;
    case 5:
      var clas="percent-5";
      break;
    case 6:
      var clas="percent-6";
      break;
    case 7:
      var clas="percent-7";
      break;
    case 8:
      var clas="percent-8";
      break;
    case 9:
      var clas="percent-9";
      break;
    case 10:
      var clas="percent-10";
      break;
    case 11:
      var clas="percent-11";
      break;
    case 12:
      var clas="percent-12";
      break;
    case 13:
      var clas="percent-13";
      break;
    case 14:
      var clas="percent-14";
      break;
    case 15:
      var clas="percent-15";
      break;
    case 16:
      var clas="percent-16";
      break;
    case 17:
      var clas="percent-17";
      break;
    case 18:
      var clas="percent-18";
      break;
    case 19:
      var clas="percent-19";
      break;
    case 20:
      var clas="percent-20";
      break;
    case 21:
      var clas="percent-21";
      break;
    case 22:
      var clas="percent-22";
      break;
    case 23:
      var clas="percent-23";
      break;
    case 24:
      var clas="percent-24";
      break;
    case 25:
      var clas="percent-25";
      break;
    case 26:
      var clas="percent-26";
      break;
    case 27:
      var clas="percent-27";
      break;
    case 28:
      var clas="percent-28";
      break;
    case 29:
      var clas="percent-29";
      break;
    case 30:
      var clas="percent-30";
      break;
    case 31:
      var clas="percent-31";
      break;
    case 32:
      var clas="percent-32";
      break;
    case 33:
      var clas="percent-33";
      break;
    case 34:
      var clas="percent-34";
      break;
    case 35:
      var clas="percent-35";
      break;
    case 36:
      var clas="percent-36";
      break;
    case 37:
      var clas="percent-37";
      break;
    case 38:
      var clas="percent-38";
      break;
    case 39:
      var clas="percent-39";
      break;
    case 40:
      var clas="percent-40";
      break;
    case 41:
      var clas="percent-41";
      break;
    case 42:
      var clas="percent-42";
      break;
    case 43:
      var clas="percent-43";
      break;
    case 44:
      var clas="percent-44";
      break;
    case 45:
      var clas="percent-45";
      break;
    case 46:
      var clas="percent-46";
      break;
    case 47:
      var clas="percent-47";
      break;
    case 48:
      var clas="percent-48";
      break;
    case 49:
      var clas="percent-49";
      break;
    case 50:
      var clas="percent-50";
      break;
    case 51:
      var clas="percent-51";
      break;
    case 52:
      var clas="percent-52";
      break;
    case 52:
      var clas="percent-52";
      break;
    case 53:
      var clas="percent-53";
      break;
    case 54:
      var clas="percent-54";
      break;
    case 55:
      var clas="percent-55";
      break;
    case 56:
      var clas="percent-56";
      break;
    case 57:
      var clas="percent-57";
      break;
    case 58:
      var clas="percent-58";
      break;
    case 59:
      var clas="percent-59";
      break;
    case 60:
      var clas="percent-60";
      break;
    case 61:
      var clas="percent-61";
      break;
    case 62:
      var clas="percent-62";
      break;
    case 63:
      var clas="percent-63";
      break;
    case 64:
      var clas="percent-64";
      break;
    case 65:
      var clas="percent-65";
      break;
    case 66:
          var clas="percent-66";
          break;
        case 67:
          var clas="percent-67";
          break;
        case 68:
          var clas="percent-68";
          break;
        case 69:
          var clas="percent-69";
          break;
        case 70:
          var clas="percent-70";
          break;
        case 71:
          var clas="percent-71";
          break;
        case 72:
          var clas="percent-72";
          break;
        case 73:
          var clas="percent-73";
          break;
        case 74:
          var clas="percent-74";
          break;
        case 75:
          var clas="percent-75";
          break;
        case 76:
          var clas="percent-76";
          break;
        case 77:
          var clas="percent-77";
          break;
        case 78:
          var clas="percent-78";
          break;
        case 79:
          var clas="percent-79";
          break;
        case 80:
          var clas="percent-80";
          break;
        case 81:
          var clas="percent-81";
          break;
        case 82:
          var clas="percent-82";
          break;
        case 83:
          var clas="percent-83";
          break;
        case 84:
          var clas="percent-84";
          break;
        case 85:
          var clas="percent-85";
          break;
        case 86:
          var clas="percent-86";
          break;
        case 87:
          var clas="percent-87";
          break;
        case 88:
          var clas="percent-88";
          break;
        case 89:
          var clas="percent-89";
          break;
        case 90:
          var clas="percent-90";
          break;
        case 91:
          var clas="percent-91";
          break;
        case 92:
          var clas="percent-92";
          break;
        case 93:
          var clas="percent-93";
          break;
        case 94:
            var clas="percent-94";
            break;
    case 95:
      var clas="percent-95";
      break;
    case 96:
      var clas="percent-96";
      break;
    case 97:
      var clas="percent-97";
      break;
    case 98:
            var clas="percent-98";
            break;
    case 99:
      var clas="percent-99";
      break;

    case 100:
      var clas="percent-100";
      break;
  }

  return clas;
}
/* Fin Tranforma el precio a porecentaje*/

function precios(tvehiculo, modelo, transmision, meses, kilometraje, vsustituto, tcobertura, tmovil, dgarantia, m36, m24, m12, m24_s, m12_s){
console.log("Entra precios tvehiculo "+tvehiculo+" modelo "+modelo+" transmision "+transmision+" meses "+meses+" kilometraje "+kilometraje+" vsustituto "+ vsustituto+" tcobertura"+tcobertura+" tmovil "+tmovil+" dgarantia "+dgarantia );
  if(tvehiculo==0) { // Nuevo
    switch(modelo){
      case '1': //Hilux Sencilla
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
          }
      break;
      case '2'://Prado
        console.log("Prado Solo Transmisión Automatica");
          //Solo Transmisión Automatica
          if(meses==0){ //36meses
            /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[0].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[0].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[0].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[0].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[0].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[0].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[0].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[0].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[0].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[0].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[0].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[0].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[0].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[0].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[0].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[0].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
/*
            var prec=m36[0].p16;
            precio=limparprecio(prec);
            //console.log(precio);
            return precio;*/
          }else if(meses==1){ //24meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[0].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[0].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[0].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[0].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[0].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[0].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[0].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[0].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[0].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[0].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[0].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[0].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[0].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[0].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[0].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[0].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }else{ //12meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[0].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[0].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[0].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[0].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[0].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[0].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[0].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[0].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[0].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[0].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[0].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[0].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[0].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[0].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[0].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[0].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }
      break;
      case '3': //Fortuner
          //Solo Transmisión Automatica
          if(meses==0){ //36meses
            /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[1].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[1].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[1].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[1].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[1].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[1].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[1].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[1].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[1].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[1].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[1].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[1].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[1].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[1].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[1].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[1].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
/*
            var prec=m36[0].p16;
            precio=limparprecio(prec);
            //console.log(precio);
            return precio;*/
          }else if(meses==1){ //24meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[0].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[0].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[0].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[0].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[1].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[1].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[1].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[1].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[1].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[1].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[1].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[1].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[1].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[1].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[1].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[1].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }else{ //12meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[1].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[1].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[1].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[1].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[1].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[1].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[1].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[1].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[1].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[1].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[1].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[1].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[1].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[1].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[1].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[1].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }
      break;
      case '4'://Rav4
        if(transmision==0){//Man
          if(meses==0){ //36meses m36[5].p16;
            /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[5].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[5].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[5].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[5].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[5].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[5].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[5].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[5].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[5].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[5].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[5].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[5].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[5].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[5].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[5].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[5].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }

          }else if(meses==1){ //24meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[5].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[5].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[5].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[5].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[5].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[5].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[5].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[5].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[5].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[5].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[5].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[5].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[5].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[5].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[5].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[5].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }else{ //12meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[5].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[5].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[5].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[5].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[5].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[5].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[5].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[5].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[5].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[5].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[5].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[5].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[5].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[5].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[5].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[5].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }
        }else{//Aut
          if(meses==0){ //36meses m36[4].p16;  /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[4].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[4].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[4].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[4].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[4].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[4].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[4].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[4].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[4].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[4].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[4].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[4].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[4].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[4].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[4].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[4].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }

          }else if(meses==1){ //24meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[4].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[4].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[4].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[4].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[4].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[4].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[4].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[4].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[4].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[4].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[4].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[4].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[4].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[4].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[4].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[4].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }else{ //12meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[4].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[4].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[4].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[4].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[4].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[4].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[4].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[4].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[4].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[4].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[4].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[4].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[4].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[4].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[4].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[4].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }
        }
      break;
      case '5':  // Rush
      if(transmision==0){//Man
        if(meses==0){ //36meses m36[7].p16;
          /*con cobertura con deducible*/
          if(tcobertura==1 && tmovil==0 && vsustituto==0){
            if(kilometraje==1){
              var prec=m36[7].p16;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[7].p15;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==1 && tmovil==0 && vsustituto==1){
            if(kilometraje==1){
              var prec=m36[7].p14;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[7].p13;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==1 && tmovil==1 && vsustituto==0){
            if(kilometraje==1){
              var prec=m36[7].p12;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[7].p11;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==1 && tmovil==1 && vsustituto==1){
            if(kilometraje==1){
              var prec=m36[7].p10;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[7].p9;
              precio=limparprecio(prec);
              return precio;
            }
          }

            /* Con cobertura total*/
          if(tcobertura==0 && tmovil==0 && vsustituto==0){
            if(kilometraje==1){
              var prec=m36[7].p8;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[7].p7;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==0 && tmovil==0 && vsustituto==1){
            if(kilometraje==1){
              var prec=m36[7].p6;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[7].p5;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==0 && tmovil==1 && vsustituto==0){
            if(kilometraje==1){
              var prec=m36[7].p4;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[7].p3;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==0 && tmovil==1 && vsustituto==1){
            if(kilometraje==1){
              var prec=m36[7].p2;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[7].p1;
              precio=limparprecio(prec);
              return precio;
            }
          }

        }else if(meses==1){ //24meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24[7].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[7].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24[7].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[7].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24[7].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[7].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24[7].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[7].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24[7].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[7].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24[7].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[7].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24[7].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[7].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24[7].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[7].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }else{ //12meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12[7].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[7].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12[7].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[7].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12[7].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[7].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12[7].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[7].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12[7].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[7].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12[7].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[7].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12[7].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[7].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12[7].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[7].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }
      }else{//Aut
        if(meses==0){ //36meses m36[6].p16;
          /*con cobertura con deducible*/
          if(tcobertura==1 && tmovil==0 && vsustituto==0){
            if(kilometraje==1){
              var prec=m36[6].p16;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[6].p15;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==1 && tmovil==0 && vsustituto==1){
            if(kilometraje==1){
              var prec=m36[6].p14;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[6].p13;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==1 && tmovil==1 && vsustituto==0){
            if(kilometraje==1){
              var prec=m36[6].p12;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[6].p11;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==1 && tmovil==1 && vsustituto==1){
            if(kilometraje==1){
              var prec=m36[6].p10;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[6].p9;
              precio=limparprecio(prec);
              return precio;
            }
          }

            /* Con cobertura total*/
          if(tcobertura==0 && tmovil==0 && vsustituto==0){
            if(kilometraje==1){
              var prec=m36[6].p8;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[6].p7;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==0 && tmovil==0 && vsustituto==1){
            if(kilometraje==1){
              var prec=m36[6].p6;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[6].p5;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==0 && tmovil==1 && vsustituto==0){
            if(kilometraje==1){
              var prec=m36[6].p4;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[6].p3;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==0 && tmovil==1 && vsustituto==1){
            if(kilometraje==1){
              var prec=m36[6].p2;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[4].p1;
              precio=limparprecio(prec);
              return precio;
            }
          }

        }else if(meses==1){ //24meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24[6].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[6].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24[6].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[6].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24[6].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[6].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24[6].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[6].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24[6].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[6].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24[6].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[6].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24[6].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[6].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24[6].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[6].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }else{ //12meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12[6].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[6].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12[6].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[6].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12[6].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[6].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12[6].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[6].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12[6].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[6].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12[6].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[6].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12[6].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[6].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12[6].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[6].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }
      }
      break;
      case '6': //Corolla
          //Solo automatica  m36[8].p16;
          if(meses==0){ //36meses
            /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[8].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[8].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[8].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[8].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[8].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[8].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[8].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[8].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[8].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[8].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[8].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[8].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[8].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[8].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[8].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[8].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
          }else if(meses==1){ //24meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[8].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[8].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[8].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[8].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[8].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[8].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[8].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[8].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[8].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[8].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[8].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[8].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[8].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[8].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[8].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[8].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }else{ //12meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[8].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[8].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[8].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[8].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[8].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[8].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[8].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[8].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[8].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[8].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[8].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[8].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[8].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[8].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[8].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[8].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }
      break;
      case '7'://yaris
        if(transmision==0){//Man m36[10].p16;
          if(meses==0){ //36meses
            /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[10].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[10].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[10].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[10].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[10].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[10].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[10].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[10].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[10].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[10].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[10].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[10].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[10].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[10].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[10].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[10].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }

          }else if(meses==1){ //24meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[10].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[10].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[10].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[10].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[10].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[10].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[10].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[10].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[10].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[10].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[10].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[10].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[10].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[10].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[10].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[10].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }else{ //12meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[10].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[10].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[10].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[10].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[10].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[10].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[10].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[10].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[10].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[10].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[10].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[7].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[10].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[10].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[10].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[10].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }
        }else{ //Aut m36[9].p16;
          if(meses==0){ //36meses
            /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[9].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[9].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[9].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[9].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[9].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[9].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[9].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[9].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[9].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[9].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[9].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[9].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[9].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[9].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[9].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[9].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }

          }else if(meses==1){ //24meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[9].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[9].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[9].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[9].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[9].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[9].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[9].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[9].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[9].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[9].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[9].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[9].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[9].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[9].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[9].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[9].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }else{ //12meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[9].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[9].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[9].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[9].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[9].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[9].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[9].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[9].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[9].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[9].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[9].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[9].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[9].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[9].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[9].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[9].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }
        }
      break;
      case '8'://Figo  12 y 11
        if(transmision==0){//Man
          if(meses==0){ //36meses
            /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[12].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[12].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[12].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[12].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[12].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[12].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[12].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[12].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[12].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[12].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[12].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[12].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[12].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[12].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[12].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[12].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }

          }else if(meses==1){ //24meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[12].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[12].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[12].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[12].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[12].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[12].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[12].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[12].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[12].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[12].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[12].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[12].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[12].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[12].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[12].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[12].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }else{ //12meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[12].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[12].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[12].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[12].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[12].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[12].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[12].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[12].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[12].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[12].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[12].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[12].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[12].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[12].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[12].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[12].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }
        }else{ //Aut m36[11].p16;
          if(meses==0){ //36meses
            /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[11].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[11].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[11].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[11].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[11].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[11].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[11].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[11].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[11].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[11].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[11].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[11].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m36[11].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[11].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m36[11].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m36[11].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }

          }else if(meses==1){ //24meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[11].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[11].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[11].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[11].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[11].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[11].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[11].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[11].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[11].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[11].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[11].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[11].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m24[11].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[11].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m24[11].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m24[11].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }else{ //12meses
            /*con cobertura con deducible*/
              if(tcobertura==1 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[11].p16;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[11].p15;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[11].p14;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[11].p13;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[11].p12;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[11].p11;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==1 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[11].p10;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[11].p9;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

                /* Con cobertura total*/
              if(tcobertura==0 && tmovil==0 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[11].p8;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[11].p7;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==0 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[11].p6;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[11].p5;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==0){
                if(kilometraje==1){
                  var prec=m12[11].p4;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[11].p3;
                  precio=limparprecio(prec);
                  return precio;
                }
              }

              if(tcobertura==0 && tmovil==1 && vsustituto==1){
                if(kilometraje==1){
                  var prec=m12[11].p2;
                  precio=limparprecio(prec);
                  return precio;
                }else{
                  var prec=m12[11].p1;
                  precio=limparprecio(prec);
                  return precio;
                }
              }
          }
        }
      break;
      default:
        //Manual
        if(meses==0){ //36meses
          /*con cobertura con deducible*/
          if(tcobertura==1 && tmovil==0 && vsustituto==0){
            if(kilometraje==1){
              var prec=m36[2].p16;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[2].p15;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==1 && tmovil==0 && vsustituto==1){
            if(kilometraje==1){
              var prec=m36[2].p14;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[2].p13;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==1 && tmovil==1 && vsustituto==0){
            if(kilometraje==1){
              var prec=m36[2].p12;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[2].p11;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==1 && tmovil==1 && vsustituto==1){
            if(kilometraje==1){
              var prec=m36[2].p10;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[2].p9;
              precio=limparprecio(prec);
              return precio;
            }
          }

            /* Con cobertura total*/
          if(tcobertura==0 && tmovil==0 && vsustituto==0){
            if(kilometraje==1){
              var prec=m36[2].p8;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[2].p7;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==0 && tmovil==0 && vsustituto==1){
            if(kilometraje==1){
              var prec=m36[8].p6;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[8].p5;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==0 && tmovil==1 && vsustituto==0){
            if(kilometraje==1){
              var prec=m36[2].p4;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[2].p3;
              precio=limparprecio(prec);
              return precio;
            }
          }

          if(tcobertura==0 && tmovil==1 && vsustituto==1){
            if(kilometraje==1){
              var prec=m36[8].p2;
              precio=limparprecio(prec);
              return precio;
            }else{
              var prec=m36[8].p1;
              precio=limparprecio(prec);
              return precio;
            }
          }
        }else if(meses==1){ //24meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24[2].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[2].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24[2].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[2].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24[2].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[2].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24[2].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[2].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24[2].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[2].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24[2].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[2].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24[2].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[2].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24[2].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24[2].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }else{ //12meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12[2].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[2].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12[2].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[2].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12[2].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[2].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12[2].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[2].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12[2].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[2].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12[2].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[2].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12[2].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[2].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12[2].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12[2].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }
      break;
    }
  }else if(tvehiculo==1){ //Seminuevo
    switch(modelo){
      case '2': //Prado  
        if(meses==1){ //24meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[0].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[0].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[0].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[0].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[0].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[0].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[0].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[0].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }else{ //12meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[0].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[0].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[0].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[0].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[0].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[0].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[0].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[0].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }

      break;
      case '4': //Rav4 m24_s[2]
      if(transmision==0){//Man
        if(meses==1){ //24meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[1].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[1].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[1].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[1].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[1].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[1].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[1].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[1].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }else{ //12meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[1].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[1].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[1].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[1].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[1].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[1].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[1].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[1].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }
      }else{//Aut
        if(meses==1){ //24meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[1].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[1].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[1].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[1].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[1].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[1].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[1].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[1].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[1].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }else{ //12meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[1].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[1].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[1].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[1].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[1].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[1].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[1].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[1].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[1].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }
      }
      break;
      case '6': //Corolla
      if(transmision==0){//Man
        if(meses==1){ //24meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[5].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[5].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[5].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[5].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[5].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[5].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[5].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[5].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[5].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[5].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[5].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[5].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[5].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[5].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[5].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[5].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }else{ //12meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[5].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[5].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[5].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[5].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[5].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[5].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[5].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[5].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[5].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[5].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[5].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[5].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[5].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[5].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[5].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[5].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }
      }
      break;
      case '7'://Yaris
      if(transmision==0){//Man
        if(meses==1){ //24meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[6].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[6].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[6].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[6].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[6].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[6].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[6].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[6].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }else{ //12meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[6].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[6].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[6].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[6].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[6].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[6].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[6].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[6].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }
      }else{//Aut
        if(meses==1){ //24meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[6].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[6].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[6].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[6].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[6].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[6].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[6].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[6].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[6].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }else{ //12meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[6].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[6].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[6].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[6].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[6].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[6].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[6].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[6].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[6].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }
      }
      break;
      case '9': //Bego
      if(transmision==0){//Man
        if(meses==1){ //24meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[3].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[3].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[3].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[3].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[3].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[3].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[3].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[3].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }else{ //12meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[4].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[4].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[4].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[4].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[4].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[4].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[4].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[4].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[4].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[4].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[4].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[4].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[4].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[4].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[4].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[4].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }
      }else{//Aut
        if(meses==1){ //24meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[3].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[3].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[3].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[3].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[3].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[3].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[3].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[3].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[3].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }else{ //12meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[3].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[3].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[3].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[3].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[3].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[3].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[3].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[3].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[3].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[3].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[3].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[3].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[3].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[3].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[3].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[3].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }
      }
      break;
      default:
      if(transmision==0){//Man
        if(meses==1){ //24meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[0].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[0].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[0].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[0].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[0].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[0].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m24_s[0].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m24_s[0].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m24_s[0].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }else{ //12meses
          /*con cobertura con deducible*/
            if(tcobertura==1 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[0].p16;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p15;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[0].p14;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p13;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[0].p12;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p11;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==1 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[0].p10;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p9;
                precio=limparprecio(prec);
                return precio;
              }
            }

              /* Con cobertura total*/
            if(tcobertura==0 && tmovil==0 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[0].p8;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p7;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==0 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[0].p6;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p5;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==0){
              if(kilometraje==1){
                var prec=m12_s[0].p4;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p3;
                precio=limparprecio(prec);
                return precio;
              }
            }

            if(tcobertura==0 && tmovil==1 && vsustituto==1){
              if(kilometraje==1){
                var prec=m12_s[0].p2;
                precio=limparprecio(prec);
                return precio;
              }else{
                var prec=m12_s[0].p1;
                precio=limparprecio(prec);
                return precio;
              }
            }
        }
      }
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
