/*
  Author: Carlos Servín Romero
  email: carlos@servin.mx, cservinmx@gmail.com
*/

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
