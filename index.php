<!DOCTYPE html>
<html  lang="es-CR"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://www.renting.cr/css/custom.min.css?date=20180927" rel="stylesheet" type="text/css">
<link rel="apple-touch-icon" sizes="76x76" href="https://www.renting.cr/images/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" href="https://www.renting.cr/images/favicon/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="https://www.renting.cr/images/favicon/favicon-16x16.png" sizes="16x16">
<link rel="manifest" href="https://www.renting.cr/images/favicon/manifest.json">
<link rel="mask-icon" href="https://www.renting.cr/images/favicon/safari-pinned-tab.svg" color="#5bbad5">
<link href="css/css_library.min.css" type="text/css" rel="stylesheet">
<link href="css/jquery-gauge.css" type="text/css" rel="stylesheet">
<link href="css/style-calculadora.css" type="text/css" rel="stylesheet">
<link href="css/style-gauge2.css" type="text/css" rel="stylesheet">
<meta name="theme-color" content="#ffffff">
<title>Carros disponibles para leasing en Costa Rica, RENTING.cr</title>
<meta name="description" content="Nuestra flota de vehículos disponibles para renting. Llámenos al Tel: +506 2436-2053. Renting forma parte de la familia Budget Car Rental Costa Rica.">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery-gauge.min.js"></script>
<script type="text/javascript" src="js/calculadora.js"></script>
<script type="text/javascript" src="js/precios.js"></script>
<script type="text/javascript" src="js/tabs.js"></script>
</head>

<body>
  <div class="section">
     <div class="navbar navbar-default">
       <div id="main-nav">
         <div class="navbar-header">
           <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
             <span class="sr-only">Renting Costa Rica</span>
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
           </button>
             <a class="navbar-brand" href="/" title="Renting Costa Rica By Budget"><span>Renting Costa by Budget</span></a>
         </div>
         <div class="collapse navbar-collapse" id="navbar-ex-collapse">
           <ul class="nav navbar-nav navbar-left">
             <li class="item-2">
               <a href="/flota.php"><span class="hidden-lb">Nuestra</span> Flota</a>
             </li>
             <li class="item-3">
               <a href="/requisitos-renting.php">Requisitos</a>
             </li>
             <li class="item-3">
               <a href="/renting-vs-leasing.php">Planes y Beneficios</a>
             </li>
                         </ul>
           <ul class="nav navbar-nav navbar-right">
             <li class="item-7">
                 <a href="/en/fleet.php">English</a>
             </li>
             <li class="item-5">
               <a href="/contactenos.php">Cont&aacute;ctenos</a>
             </li>
             <li class="item-6">
               <a class="open-lightbox">Cotice <span class="hidden-lb">su Auto</span></a>
             </li>
           </ul>
         </div>
       </div>
     </div>
   </div>
   <?php
   //?modelo=1&tvehiculo=1&transmision=1&pcontrato=1&kilometraje=1&vsustituto=1&tcobertura=1&tmovil=1&dgarantia=1
   $modelo = isset($_GET['modelo']) ? $_GET['modelo'] : 0;
   $tvehiculo = isset($_GET['tvehiculo']) ? $_GET['tvehiculo'] : 0;
   $transmision = isset($_GET['transmision']) ? $_GET['transmision'] : 0;
   $pcontrato = isset($_GET['pcontrato']) ? $_GET['pcontrato'] : 0;
   $kilometraje = isset($_GET['kilometraje']) ? $_GET['kilometraje'] : 0;
   $vsustituto = isset($_GET['vsustituto']) ? $_GET['vsustituto'] : 1;
   $tcobertura= isset($_GET['tcobertura']) ? $_GET['tcobertura'] : 0;
   $tmovil = isset($_GET['tmovil']) ? $_GET['tmovil'] : 1;
   $dgarantia= isset($_GET['dgarantia']) ? $_GET['dgarantia'] : 0;
   $precio= isset($_GET['hprecio']) ? $_GET['hprecio'] : 1035;

   /*
   echo "modelo ".$modelo;
   echo "tvehiculo ".$tvehiculo;
   echo "transmision ".$transmision;
   echo "pcontrato ".$pcontrato;
   echo "kilometraje ".$kilometraje;
   echo "vsustituto ".$vsustituto;
   echo "tcobertura ".$tcobertura;
   echo "tmovil ".$tmovil;
   echo "dgarantia ".$dgarantia;*/

   $min=351; //351 Valor real se agrega un margen para que no salga del tacometro
   $max=2022; // 2022 Valor real se agrega un margen para que no salga del tacometro
   if($precio==$min){
     $percent=0;
   }else if($precio==$max){
     $percent=100;
   }else{
       $percent=round(($precio*100)/$max);
   }

   switch($percent){
     case 0:
       $clas="percent-0";
       break;
     case 1:
       $clas="percent-1";
       break;
     case 2:
       $clas="percent-2";
       break;
     case 3:
       $clas="percent-3";
       break;
     case 4:
       $clas="percent-4";
       break;
     case 5:
       $clas="percent-5";
       break;
     case 6:
       $clas="percent-6";
       break;
     case 7:
       $clas="percent-7";
       break;
     case 8:
       $clas="percent-8";
       break;
     case 9:
       $clas="percent-9";
       break;
     case 10:
       $clas="percent-10";
       break;
     case 11:
       $clas="percent-11";
       break;
     case 12:
       $clas="percent-12";
       break;
     case 13:
       $clas="percent-13";
       break;
     case 14:
       $clas="percent-14";
       break;
     case 15:
       $clas="percent-15";
       break;
     case 16:
       $clas="percent-16";
       break;
     case 17:
       $clas="percent-17";
       break;
     case 18:
       $clas="percent-18";
       break;
     case 19:
       $clas="percent-19";
       break;
     case 20:
       $clas="percent-20";
       break;
     case 21:
       $clas="percent-21";
       break;
     case 22:
       $clas="percent-22";
       break;
     case 23:
       $clas="percent-23";
       break;
     case 24:
       $clas="percent-24";
       break;
     case 25:
       $clas="percent-25";
       break;
     case 26:
       $clas="percent-26";
       break;
     case 27:
       $clas="percent-27";
       break;
     case 28:
       $clas="percent-28";
       break;
     case 29:
       $clas="percent-29";
       break;
     case 30:
       $clas="percent-30";
       break;
     case 31:
       $clas="percent-31";
       break;
     case 32:
       $clas="percent-32";
       break;
     case 33:
       $clas="percent-33";
       break;
     case 34:
       $clas="percent-34";
       break;
     case 35:
       $clas="percent-35";
       break;
     case 36:
       $clas="percent-36";
       break;
     case 37:
       $clas="percent-37";
       break;
     case 38:
       $clas="percent-38";
       break;
     case 39:
       $clas="percent-39";
       break;
     case 40:
       $clas="percent-40";
       break;
     case 41:
       $clas="percent-41";
       break;
     case 42:
       $clas="percent-42";
       break;
     case 43:
       $clas="percent-43";
       break;
     case 44:
       $clas="percent-44";
       break;
     case 45:
       $clas="percent-45";
       break;
     case 46:
       $clas="percent-46";
       break;
     case 47:
       $clas="percent-47";
       break;
     case 48:
       $clas="percent-48";
       break;
     case 49:
       $clas="percent-49";
       break;
     case 50:
       $clas="percent-50";
       break;
     case 51:
       $clas="percent-51";
       break;
     case 52:
       $clas="percent-52";
       break;
     case 52:
       $clas="percent-52";
       break;
     case 53:
       $clas="percent-53";
       break;
     case 54:
       $clas="percent-54";
       break;
     case 55:
       $clas="percent-55";
       break;
     case 56:
       $clas="percent-56";
       break;
     case 57:
       $clas="percent-57";
       break;
     case 58:
       $clas="percent-58";
       break;
     case 59:
       $clas="percent-59";
       break;
     case 60:
       $clas="percent-60";
       break;
     case 61:
       $clas="percent-61";
       break;
     case 62:
       $clas="percent-62";
       break;
     case 63:
       $clas="percent-63";
       break;
     case 64:
       $clas="percent-64";
       break;
     case 65:
       $clas="percent-65";
       break;
     case 66:
       $clas="percent-66";
       break;
     case 67:
       $clas="percent-67";
       break;
     case 68:
       $clas="percent-68";
       break;
     case 69:
       $clas="percent-69";
       break;
     case 70:
       $clas="percent-70";
       break;
     case 71:
       $clas="percent-71";
       break;
     case 72:
       $clas="percent-72";
       break;
     case 73:
       $clas="percent-73";
       break;
     case 74:
       $clas="percent-74";
       break;
     case 75:
       $clas="percent-75";
       break;
     case 76:
       $clas="percent-76";
       break;
     case 77:
       $clas="percent-77";
       break;
     case 78:
       $clas="percent-78";
       break;
     case 79:
       $clas="percent-79";
       break;
     case 80:
       $clas="percent-80";
           break;
     case 81:
       $clas="percent-81";
       break;
     case 82:
       $clas="percent-82";
       break;
     case 83:
       $clas="percent-83";
       break;
     case 84:
       $clas="percent-84";
       break;
     case 85:
       $clas="percent-85";
       break;
     case 86:
       $clas="percent-86";
       break;
     case 87:
       $clas="percent-87";
       break;
     case 88:
       $clas="percent-88";
       break;
     case 89:
       $clas="percent-89";
       break;
     case 90:
       $clas="percent-90";
       break;
     case 91:
       $clas="percent-91";
       break;
     case 92:
       $clas="percent-92";
       break;
     case 93:
       $clas="percent-93";
       break;
     case 94:
       $clas="percent-94";
       break;
     case 95:
       $clas="percent-95";
       break;
     case 96:
       $clas="percent-96";
       break;
     case 97:
       $clas="percent-97";
       break;
     case 98:
       $clas="percent-98";
       break;
     case 99:
       $clas="percent-99";
       break;

     case 100:
       $clas="percent-100";
       break;
   }

   switch($modelo){
     case 1:
     $img="img/hiluxsencilla.png";
     $link="toyota-hilux-single";
     break;
     case 2:
     $img="img/Prado.png";
     $link="toyota-prado";
     break;
     case 3:
     $img="img/Fortuner.png";
     $link="toyota-fortuner";
     break;
     case 4:
     $img="img/Rav4.png";
     $link="toyota-rav4";
     break;
     case 5:
     $img="img/Rush.png";
     $link="toyota-hilux-single";
     break;
     case 6:
     $img="img/Corolla.png";
     $link="toyota-corolla";
     break;
     case 7:
     $img="img/Yaris.png";
     $link="toyota-yaris";
     break;
     case 8:
     $img="img/Figo.png";
     $link="ford-figo";
     break;
     case 9:
     $img="img/bego.png";
     $link="ford-bego";
     break;
     default:
     $img="img/hilux.png";
     $link="toyota-hilux";
     break;
   }


   ?>

   <div id="tabs" class="tab">
     <div id="op1" class="active">
       <!--<div class="closebutt"></div>-->
       <div class="btitle">Opción 1</div>
     </div>

     <div id="op2" class="noactive">
       <div id="c2" class="closebutt"></div>
       <div class="btitle">Opción 2</div>
     </div>

     <div id="op3" class="noactive">
       <div  id="c3" class="closebutt"></div>
       <div class="btitle">Opción 3</div>
     </div>

     <button class="tabnew"></button>
   </div>

<div class="cearboth"></div>
<div id="tab1">
  <div class="section">
    <form action="comparar.php" method="get">

      <div class="main">

   <div class="title" id="title"><h1>Cotice su vehículo</h1></div>
     <div>
           <div id="divmodelo" style="white-space:nowrap;">

             <label for="modelo">Modelo</label>
             <select id="modelo" name="modelo" class="selects">
               <option value="0" <?php if($modelo==0){echo "selected";} ?>>Hi-lux Doble Cabina 4X4</option>
               <option value="1" <?php if($modelo==1){echo "selected";} ?>>Hi-lux Cabina Sencilla 4X2</option>
               <option value="2" <?php if($modelo==2){echo "selected";} ?>>Prado</option>
               <option value="3" <?php if($modelo==3){echo "selected";} ?>>Fortuner</option>
               <option value="4" <?php if($modelo==4){echo "selected";} ?>>Rav4</option>
               <option value="5" <?php if($modelo==5){echo "selected";} ?>>Rush</option>
               <option value="6" <?php if($modelo==6){echo "selected";} ?>>Corolla</option>
               <option value="7" <?php if($modelo==7){echo "selected";} ?>>Yaris</option>
               <option value="8" <?php if($modelo==8){echo "selected";} ?>>Figo</option>
               <option value="9" <?php if($modelo==9){echo "selected";} ?>>Bego</option>
             </select>
           </div>
           <div class="cearboth"></div>
     </div>

   <div class="float-left fiz">
     <div class="dimg">
       <img id="divimg" src="<?= $img; ?>">
     </div>
     <div style="text-align: center;">
       <div class="space20"></div>
       <div class="price_title">Precio</div>
       <div class="space20"></div>
       <div style="height: 60px;" >
         <div class="wrapper">
           <div id="clas-per" class="<?= $clas; ?>">
             <div class="speedometer play">
               <div class="dial">
                 <div class="bar">
                   <!--<div class="half-circle half-circle-bg"></div>-->
                   <!--<div class="half-circle half-circle-speed animated"></div>-->
                   <div class="half-circle half-circle-cover"></div>
                 </div>
                 <div class="needle animated">
                   <div class="inner">
                     <div class="top"></div>
                     <div class="bottom"></div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div class="space20"></div>
       <div class="price">$<span id="precio"><?= $precio; ?></span><input type="hidden" id="hprecio" name="hprecio" value="<?= $precio; ?>"></div>
       <div class="space30"></div>
       <div class="price_iva">* Precio no incluye I.V.A.</div>
       <div class="cearboth"></div>
     </div>

       <div class="space20"></div>
       <div class="space20"></div>
         <div id="prebut"  class="prebut">
             <a href="https://www.renting.cr/flota.php" target="_blank" class="vermas">Ver más información</a>
             <div class="space10"></div>
             <a id="lightbox-btn" href="https://www.renting.cr/planes-renting.php?vehicle=toyota-hilux" target="_blank" class="btt orange" style="text-decoration: none; color: #FFF; font-weight: bold;">CONTÁCTENOS</a>
             <div class="space10"></div>
             <button type="submit"  class="btt blue" style="text-decoration: none; color: #FFF; font-weight: bold; border:none;">Comparar</button>
             <div class="space10"></div>
             <a onclick="moreinicia();" href="#" style="text-decoration: none; color: #FFF; font-weight: bold;" class="btt blue">Reiniciar</a>
         </div>

   </div>
   <div class="float-left fcen"></div>
   <div  id="rightbutt" class="float-left fder">
     <div class="space30"></div>
       <div class="inner-right-floats">
         <div style="white-space:nowrap">
           <label for="tvehiculo">Tipo de vehículo</label>
           <select id="tvehiculo" name="tvehiculo" class="selects">
             <option value="0" <?php if($tvehiculo==0){echo "selected";} ?>>Nuevo</option>
             <option value="1" <?php if($tvehiculo==1){echo "selected";} ?>>Seminuevo</option>
           </select>
        </div>
        <div class="cearboth"></div>
        <div class="space30"></div>
        <div style="white-space:nowrap">
          <label for="transmision">Transmisión</label>
          <select id="transmision" name="transmision" class="selects">
            <option value="0" <?php if($transmision==0){echo "selected";} ?>>Manual</option>
            <option value="1" <?php if($transmision==1){echo "selected";} ?>>Automática</option>
          </select>
       </div>
       <div class="cearboth"></div>
       <div class="space30"></div>
       <div style="white-space:nowrap">
         <label for="pcontrato">Plazo del contrato</label>
         <select id="pcontrato" name="pcontrato" class="selects">
           <option value="0" <?php if($pcontrato==0){echo "selected";} ?>>36 Meses</option>
           <option value="1" <?php if($pcontrato==1){echo "selected";} ?>>24 Meses</option>
           <option value="2" <?php if($pcontrato==2){echo "selected";} ?>>12 Meses</option>
         </select>
      </div>
      <div class="cearboth"></div>
       <div class="space30"></div>
      <div style="white-space:nowrap">
        <label for="kilometraje">Kilometraje</label>
        <select id="kilometraje" name="kilometraje" class="selects">
          <option value="0" <?php if($kilometraje==0){echo "selected";} ?>>3000</option>
          <option value="1" <?php if($kilometraje==1){echo "selected";} ?>>2500</option>
        </select>
      </div>
      <div class="cearboth"></div>
      <div class="space30"></div>
    <p>¿Necesita vehículo sustituto?</p>
    <div class="space30"></div>
    <div class="space10"></div>
      <div class="float-left chk" style="margin-left: 26.5px;">
          Sí <input type="checkbox" id="op-1-1" name="vsustituto" value="1" <?php if($vsustituto==1){echo "checked='checked'";} ?> >
          <label for="op-1-1"><span></span></label>
     </div>
     <div class="float-left chk" style="width: 78px;"></div>
     <div class="float-left chk">
          No <input type="checkbox" id="op-1-2" name="vsustituto" value="0" <?php if($vsustituto==0){echo "checked='checked'";} ?> >
        <label for="op-1-2"><span></span></label>
     </div>
     <div class="cearboth"></div>
     <div class="space30"></div>
    <div style="white-space:nowrap">
      <label for="tcobertura">Tipo de cobertura</label>
      <select id="tcobertura" name="tcobertura" class="selects">
        <option value="0" <?php if($tcobertura==0){echo "selected";} ?>>Total</option>
        <option value="1" <?php if($tcobertura==1){echo "selected";} ?>>Con deducible</option>
      </select>
    </div>
    <div class="cearboth"></div>
    <div class="space30"></div>
      <p>¿Necesita taller móvil para mantenimiento?</p>
       <div class="space30"></div>
      <div class="inlines">
          <div class="float-left chk" style="margin-left: 26.5px;">
              Sí <input type="checkbox" id="op-1-3" name="tmovil" value="1" <?php if($tmovil==1){echo "checked='checked'";} ?>>
              <label for="op-1-3"><span></span></label>
          </div>
          <div class="float-left chk" style="width: 78px;"></div>
          <div class="float-left chk">
              No <input type="checkbox" id="op-1-4" name="tmovil" value="0" <?php if($tmovil==0){echo "checked='checked'";} ?>>
              <label for="op-1-4"><span></span></label>
          </div>
          <div class="cearboth"></div>
          <div class="space30"></div>
      </div>
      <div id="depsgar">
        <div style="white-space:nowrap">
          <label for="dgarantia">Depósito de garantía</label>
          <select id="dgarantia" name="dgarantia" class="selects">
            <option value="0" <?php if($dgarantia==0){echo "selected";} ?>>1 Depósito</option>
            <option value="1" <?php if($dgarantia==1){echo "selected";} ?>>2 Depósitos</option>
            <option value="2" <?php if($dgarantia==2){echo "selected";} ?>>3 Depósitos</option>
            <option value="3" <?php if($dgarantia==3){echo "selected";} ?>>4 Depósitos o más</option>
          </select>
        </div>
      </div>
      </form>
    </div>
   </div>

     <div style="text-align: center; margin: 0 auto;">
         <div id="prebut2" class="prebut">
             <a href="https://www.renting.cr/flota.php" target="_blank" class="vermas">Ver más información</a>
             <div class="space10"></div>
             <a id="lightbox-btn" href="https://www.renting.cr/planes-renting.php?vehicle=toyota-hilux" target="_blank" class="btt orange" style="text-decoration: none; color: #FFF; font-weight: bold;">CONTÁCTENOS</a>
             <div class="space10"></div>
             <button id="compararmov" type="button" class="btt blue comparar" style="text-decoration: none; color: #FFF; font-weight: bold; border:none;">Comparar</button>
             <div class="space10"></div>
             <a id="breiniciar" href="#" style="text-decoration: none; color: #FFF; font-size: 14px; font-weight: bold;" class="btt blue">Reiniciar</a>
         </div>
       </div>
  </div>

 <div class="cearboth" style="height: 20px;"></div>

 </div>

</div><!-- Fin tab 1-->
<!-- Tab 2-->
<div id="tab2">
  <div class="main">
    <div class="title" id="title"><h1>Opción 2</h1></div>
      <div>
        <div id="divmodelo" style="white-space:nowrap;">

              <label for="op2-modelo">Modelo</label>
              <select id="op2-modelo" name="modelo2" class="selects">
                <option value="0" selected>Hi-lux Doble Cabina 4X4</option>
                <option value="1">Hi-lux Cabina Sencilla 4X2</option>
                <option value="2">Prado</option>
                <option value="3">Fortuner</option>
                <option value="4">Rav4</option>
                <option value="5">Rush</option>
                <option value="6">Corolla</option>
                <option value="7">Yaris</option>
                <option value="8">Figo</option>
              </select>
            </div>
        <div class="cearboth"></div>
      </div>

    <div class="float-left fiz">
      <div class="dimg">
        <img id="op2-divimg" src="img/hilux.png">
      </div>
      <div style="text-align: center;">
        <div class="space20"></div>
        <div class="price_title">Precio</div>
        <div class="space20"></div>
        <div style="height: 60px;" >
          <div class="wrapper">
            <div id="clas-per2" class="percent-80">
              <div class="speedometer play">
                <div class="dial">
                  <div class="bar">
                    <!--<div class="half-circle half-circle-bg"></div>-->
                    <!--<div class="half-circle half-circle-speed animated"></div>-->
                    <div class="half-circle half-circle-cover"></div>
                  </div>
                  <div class="needle animated">
                    <div class="inner">
                      <div class="top"></div>
                      <div class="bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space20"></div>
        <div class="price">$<span id="op2-precio">910</span></div>
        <div class="space30"></div>
        <div class="price_iva">* Precio no incluye I.V.A.</div>
        <div class="cearboth"></div>
      </div>

        <div class="space20"></div>
        <div class="space20"></div>
    </div>
    <div class="float-left fcen"></div>
    <div  id="rightbutt" class="float-left fder">
      <div class="space30"></div>
        <div class="inner-right-floats">
          <div style="white-space:nowrap">
            <label for="op2-tvehiculo">Tipo de vehículo</label>
            <select id="op2-tvehiculo" name="tvehiculo" class="selects">
              <option value="0">Nuevo</option>
              <option value="1">Seminuevo</option>
            </select>
         </div>
         <div class="cearboth"></div>
         <div class="space30"></div>
         <div style="white-space:nowrap">
           <label for="op2-transmision">Transmisión</label>
           <select id="op2-transmision" name="transmision" class="selects">
             <option value="0">Manual</option>
             <option value="1">Automática</option>
           </select>
        </div>
        <div class="cearboth"></div>
        <div class="space30"></div>
        <div style="white-space:nowrap">
          <label for="op2-pcontrato">Plazo del contrato</label>
          <select id="op2-pcontrato" name="pcontrato" class="selects">
            <option value="0">36 Meses</option>
            <option value="1">24 Meses</option>
            <option value="2">12 Meses</option>
          </select>
       </div>
       <div class="cearboth"></div>
        <div class="space30"></div>
       <div style="white-space:nowrap">
         <label for="op2-kilometraje">Kilometraje</label>
         <select id="op2-kilometraje" name="kilometraje" class="selects">
           <option value="0">3000</option>
           <option value="1">2500</option>
         </select>
       </div>
       <div class="cearboth"></div>
       <div class="space30"></div>
     <p>¿Necesita vehículo sustituto?</p>
     <div class="space30"></div>
     <div class="space10"></div>
       <div class="float-left chk" style="margin-left: 26.5px;">
           Sí <input type="checkbox" id="op-2-1" name="vsustituto2" value="1" checked="checked">
           <label for="op-2-1"><span></span></label>
      </div>
      <div class="float-left chk" style="width: 78px;"></div>
      <div class="float-left chk">
           No <input type="checkbox" id="op-2-2" name="vsustituto2" value="0">
         <label for="op-2-2"><span></span></label>
      </div>
      <div class="cearboth"></div>
      <div class="space30"></div>
     <div style="white-space:nowrap">
       <label for="op2-tcobertura">Tipo de cobertura</label>
       <select id="op2-tcobertura" name="tcobertura" class="selects">
         <option value="0">Total</option>
         <option value="1">Con deducible</option>
       </select>
     </div>
     <div class="cearboth"></div>
     <div class="space30"></div>
       <p>¿Necesita taller móvil para mantenimiento?</p>
        <div class="space30"></div>
       <div class="inlines">
           <div class="float-left chk" style="margin-left: 26.5px;">
               Sí <input type="checkbox" id="op-2-3" name="tmovil2" value="1" checked="checked">
               <label for="op-2-3"><span></span></label>
           </div>
           <div class="float-left chk" style="width: 78px;"></div>
           <div class="float-left chk">
               No <input type="checkbox" id="op-2-4" name="tmovil2" value="0">
               <label for="op-2-4"><span></span></label>
           </div>
           <div class="cearboth"></div>
           <div class="space30"></div>
       </div>
       <div id="depsgar">
         <div style="white-space:nowrap">
           <label for="op2-dgarantia">Depósito de garantía</label>
           <select id="op2-dgarantia" name="dgarantia" class="selects">
             <option value="0">1 Depósito</option>
             <option value="1">2 Depósitos</option>
             <option value="2">3 Depósitos</option>
             <option value="3">4 Depósitos o más</option>
           </select>
         </div>
       </div>
     </div>
     <div style="text-align: center; margin: 0 auto;">
         <div id="op2-prebut2" class="prebut">
             <a href="https://www.renting.cr/flota.php" target="_blank" class="vermas">Ver más información</a>
             <div class="space10"></div>
             <a id="lightbox-btn" href="https://www.renting.cr/planes-renting.php?vehicle=toyota-hilux" target="_blank" class="btt orange" style="text-decoration: none; color: #FFF; font-weight: bold;">CONTÁCTENOS</a>
             <div class="space10"></div>
             <button id="compararmov" type="button" class="btt blue comparar" style="text-decoration: none; color: #FFF; font-weight: bold; border:none;">Comparar</button>
             <div class="space10"></div>
             <a onclick="moreinicia();" href="#" style="text-decoration: none; color: #FFF; font-size: 14px; font-weight: bold;" class="btt blue">Reiniciar</a>
         </div>
       </div>
    </div>
</div>

</div>

<!-- Fin tab2 -->
<div id="tab3">
  <div class="main">

    <div class="title" id="title"><h1>Opción 3</h1></div>
      <div>
            <div id="divmodelo" style="white-space:nowrap;">

              <label for="op3-modelo">Modelo</label>
              <select id="op3-modelo" name="modelo" class="selects">
                <option value="0" selected>Hi-lux Doble Cabina 4X4</option>
                <option value="1">Hi-lux Cabina Sencilla 4X2</option>
                <option value="2">Prado</option>
                <option value="3">Fortuner</option>
                <option value="4">Rav4</option>
                <option value="5">Rush</option>
                <option value="6">Corolla</option>
                <option value="7">Yaris</option>
                <option value="8">Figo</option>
              </select>
            </div>
            <div class="cearboth"></div>
      </div>

    <div class="float-left fiz">
      <div class="dimg">
        <img id="op3-divimg" src="img/hilux.png">
      </div>
      <div style="text-align: center;">
        <div class="space20"></div>
        <div class="price_title">Precio</div>
        <div class="space20"></div>
        <div style="height: 60px;" >
          <div class="wrapper">
            <div id="clas-per3" class="percent-80">
              <div class="speedometer play">
                <div class="dial">
                  <div class="bar">
                    <!--<div class="half-circle half-circle-bg"></div>-->
                    <!--<div class="half-circle half-circle-speed animated"></div>-->
                    <div class="half-circle half-circle-cover"></div>
                  </div>
                  <div class="needle animated">
                    <div class="inner">
                      <div class="top"></div>
                      <div class="bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space20"></div>
        <div class="price">$<span id="op3-precio">910</span></div>
        <div class="space30"></div>
        <div class="price_iva">* Precio no incluye I.V.A.</div>
        <div class="cearboth"></div>
      </div>

        <div class="space20"></div>
        <div class="space20"></div>


    </div>
    <div class="float-left fcen"></div>
    <div  id="rightbutt" class="float-left fder">
      <div class="space30"></div>
        <div class="inner-right-floats">
          <div style="white-space:nowrap">
            <label for="op3-tvehiculo">Tipo de vehículo</label>
            <select id="op3-tvehiculo" name="tvehiculo" class="selects">
              <option value="0">Nuevo</option>
              <option value="1">Seminuevo</option>
            </select>
         </div>
         <div class="cearboth"></div>
         <div class="space30"></div>
         <div style="white-space:nowrap">
           <label for="op3-transmision">Transmisión</label>
           <select id="op3-transmision" name="transmision" class="selects">
             <option value="0">Manual</option>
             <option value="1">Automática</option>
           </select>
        </div>
        <div class="cearboth"></div>
        <div class="space30"></div>
        <div style="white-space:nowrap">
          <label for="op3-pcontrato">Plazo del contrato</label>
          <select id="op3-pcontrato" name="pcontrato" class="selects">
            <option value="0">36 Meses</option>
            <option value="1">24 Meses</option>
            <option value="2">12 Meses</option>
          </select>
       </div>
       <div class="cearboth"></div>
        <div class="space30"></div>
       <div style="white-space:nowrap">
         <label for="op3-kilometraje">Kilometraje</label>
         <select id="op3-kilometraje" name="kilometraje" class="selects">
           <option value="0">3000</option>
           <option value="1">2500</option>
         </select>
       </div>
       <div class="cearboth"></div>
       <div class="space30"></div>
     <p>¿Necesita vehículo sustituto?</p>
     <div class="space30"></div>
     <div class="space10"></div>
       <div class="float-left chk" style="margin-left: 26.5px;">
           Sí <input type="checkbox" id="op-3-1" name="vsustituto3" value="1" checked="checked">
           <label for="op-3-1"><span></span></label>
      </div>
      <div class="float-left chk" style="width: 78px;"></div>
      <div class="float-left chk">
           No <input type="checkbox" id="op-3-2" name="vsustituto3" value="0">
         <label for="op-3-2"><span></span></label>
      </div>
      <div class="cearboth"></div>
      <div class="space30"></div>
     <div style="white-space:nowrap">
       <label for="op3-tcobertura">Tipo de cobertura</label>
       <select id="op3-tcobertura" name="tcobertura" class="selects">
         <option value="0">Total</option>
         <option value="1">Con deducible</option>
       </select>
     </div>
     <div class="cearboth"></div>
     <div class="space30"></div>
       <p>¿Necesita taller móvil para mantenimiento?</p>
        <div class="space30"></div>
       <div class="inlines">
           <div class="float-left chk" style="margin-left: 26.5px;">
               Sí <input type="checkbox" id="op-3-3" name="tmovil3" value="1" checked="checked">
               <label for="op-3-3"><span></span></label>
           </div>
           <div class="float-left chk" style="width: 78px;"></div>
           <div class="float-left chk">
               No <input type="checkbox" id="op-3-4" name="tmovil3" value="0">
               <label for="op-3-4"><span></span></label>
           </div>
           <div class="cearboth"></div>
           <div class="space30"></div>
       </div>
       <div id="depsgar">
         <div style="white-space:nowrap">
           <label for="dgarantia">Depósito de garantía</label>
           <select id="op3-dgarantia" name="dgarantia" class="selects">
             <option value="0">1 Depósito</option>
             <option value="1">2 Depósitos</option>
             <option value="2">3 Depósitos</option>
             <option value="3">4 Depósitos o más</option>
           </select>
         </div>
       </div>
     </div>
    </div>
    <div style="text-align: center; margin: 0 auto;">
        <div id="op3-prebut2" class="prebut">
            <a href="https://www.renting.cr/flota.php" target="_blank" class="vermas">Ver más información</a>
            <div class="space10"></div>
            <a id="lightbox-btn" href="https://www.renting.cr/planes-renting.php?vehicle=toyota-hilux" target="_blank" class="btt orange" style="text-decoration: none; color: #FFF; font-weight: bold;">CONTÁCTENOS</a>
            <div class="space10"></div>
            <button id="compararmov" type="button" class="btt blue comparar" style="text-decoration: none; color: #FFF; font-weight: bold; border:none;">Comparar</button>
            <div class="space10"></div>
            <a onclick="moreinicia();" href="#" style="text-decoration: none; color: #FFF; font-size: 14px; font-weight: bold;" class="btt blue">Reiniciar</a>
        </div>
      </div>
</div>
</div>
<div class="cearboth" style="height: 20px;"></div>
<!-- Fin tab 3 -->



   <div class="cearboth"></div>




 <?php include ('json_data.php'); ?>
 <input type="hidden" id="36m" >
 <input type="hidden" id="24m" >
 <input type="hidden" id="12m" >
 <input type="hidden" id="24m_s" >
 <input type="hidden" id="12m_s" >
 <script>
   $("#36m").val('<?php echo json_encode($array_36m); ?>');
   $("#24m").val('<?php echo json_encode($array_24m); ?>');
   $("#12m").val('<?php echo json_encode($array_12m); ?>');
   $("#24m_s").val('<?php echo json_encode($array_24m_s); ?>');
   $("#12m_s").val('<?php echo json_encode($array_12m_s); ?>');
 </script>

  <footer class="section section-primary">
  <div class="footer with-footer-banner" >
  <div class="container">
  <div class="row">
  <div class="fullwidthxs col-xs-8">
  <div class="wrapper-contactus">
    <h3>Cont&aacute;ctenos</h3>
    <p><i class="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:corporativo@renting.cr" title="Cont&aacute;ctenos">corporativo@renting.cr</a></p>
    <p><i class="fa fa-phone" aria-hidden="true"></i><a href="tel:+50624362028"  title="Llamenos">+506 2436-2028</a></p>
    <p><i class="fa fa-phone" aria-hidden="true"></i><a href="tel:+50624362029"  title="Llamenos">+506 2436-2029</a></p>
    <p class="small-facebook"><i class="fa fa-facebook" aria-hidden="true"></i><a href="https://www.facebook.com/#!/pages/Budget-Car-Rental-Costa-Rica/104666326240189"  title="S&iacute;ganos en Facebook">S&iacute;ganos en Facebook</a></p>
  </br>
  </br>
    <html>
  	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  	<body>

  		<div class="w3-container" style="width: 700px; padding:0px;">
  			<button onclick="document.getElementById('id01').style.display='block'" style="display: block;
      background-color: #ff852c;
      padding: 5px;
      width: 200px;
      text-align: center;
      font-size: 15px; border:0px; color:#fff;">Unete a Renting</button>

  			<div id="id01" class="w3-modal" style="z-index: 1000000000000;">
  				<div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">

  					<div class="w3-center"><br>
  						<span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
              <img src="https://www.renting.cr/images/Re.png" alt="Smiley face" height="50%" width="25%">
                          <h2>Trabaja con Nosotros</h2>
  					</div>

  					<div>
                          <center>
                              <iframe style=width:100%;height:300px;border:none; src='https://recruit.zoho.com/recruit/WebFormServeServlet?rid=d710d90c2451652ed28e78d6e6603a3ba27af2538bbb42d4b2e9527249c46da0gid3acfae9d8a69b2b8364c3853a4ec929ef0705f514e1b34bacc2556e8f43ed90a'></iframe>
                          </center>
                      </div>

  					<div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
  						<button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-red">Cancel</button>

  					</div>

  				</div>
  			</div>
  		</div>

  	</body>
  </html>

  </div>
  </div>
  <div class="fullwidthxs col-xs-16">
  <div class="right">
      <a href="/gestion-calidad.php" target="_blank"><img id="white-logo-footer" src="https://www.renting.cr/images/iso-9001-empresa-certificada-2.png" title="Empresa Certificada ISO 9001" /></a>
      <a href="https://www.budget.co.cr/" target="_blank"><img id="white-logo-footer" src="https://www.renting.cr/images/white-logo.png" title="With Support of Budget Costa Rica" /></a>
  </div>
  </div>
  </div>
  </div>
  </div>
  </footer>

</body>

<script type="text/javascript" src="https://www.renting.cr/js/jquery.min.js"></script>
<script type="text/javascript" src="https://www.renting.cr/js/jquery-ui.min.js?date=20180927"></script>
<script type="text/javascript" src="https://www.renting.cr/js/custom.min.js?date=20180927"></script>
</html>
