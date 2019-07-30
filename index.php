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
<script type="text/javascript" src="js/jquery-gauge.js"></script>
</head>

<?php

//Esto puede ser un arreglo JSON
$arreglo=array( 'Modelo'=>'Hi-Lux Doble Cabina 4x4',
                'Tvehiculo'=>'Nuevo',
                'Transmision'=>'Manual',
                'Plazo'=>'36 Meses',
                'Kilometraje'=>'3000',
                'Necesitavehiculo'=>'Si',
                'Cobertura'=>'Total',
                'Tmovil'=>'Si',
                'Deposito'=>'1 Depósito'
              );

?>


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
   <div class="section">
  <div class="main">
    <!--Div left-->
    <div class="title" id="title"><h1>Cotice su vehiculo</h1></div>
    <br>
    <div class="floats fiz">
      <div class="dimg">
      <img src="img/yaris.png">
    </div>
      <div style="text-align: center;">
        <strong>Precio</strong>
        <!--<div class="gauge2 divgauge"></div>-->
        <div style="height: 60px;" >
          <div class="wrapper">
            <div class="percent-0">
              <div class="speedometer play">
                <div class="dial">
                  <div class="bar">
                    <div class="half-circle half-circle-bg"></div>
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
        <strong>$1024</strong>
        <p>* Precio no incluye I.V.A.</p>

      </div>


    </div>
    <!--End Div left-->
    <!--Div center-->
    <div class="floats fcen"></div>
    <!--End Div left-->
    <!--Div right-->
    <div class="floats fder">
      <div style="white-space:nowrap">

        <label for="modelo">Modelo:</label>
        <select id="modelo" name="modelo" class="selects">
          <option val="<?= $arreglo['Modelo']; ?>"><?= $arreglo['Modelo']; ?></option>
          <option val="1">1</option>
          <option val="2">2</option>
        </select>
      </div>
      <div class="cearboth"></div>
    </br>
      <div style="white-space:nowrap">
        <label for="tvehiculo">Tipo de Vehículo:</label>
        <select id="tvehiculo" name="tvehiculo" class="selects">
          <option val="<?= $arreglo['Tvehiculo']; ?>"><?= $arreglo['Tvehiculo']; ?></option>
          <option val="1">1</option>
          <option val="2">2</option>
        </select>
     </div>
     <div class="cearboth"></div>
     </br>
     <div style="white-space:nowrap">
       <label for="transmision">Transmisión:</label>
       <select id="transmision" name="transmision" class="selects">
         <option val="<?= $arreglo['Transmision']; ?>"><?= $arreglo['Transmision']; ?></option>
         <option val="1">1</option>
         <option val="2">2</option>
       </select>
    </div>
    <div class="cearboth"></div>
    </br>
    <div style="white-space:nowrap">
      <label for="pcontrato">Plazo del contrato:</label>
      <select id="pcontrato" name="pcontrato" class="selects">
        <option val="<?= $arreglo['Plazo']; ?>"><?= $arreglo['Plazo']; ?></option>
        <option val="1">1</option>
        <option val="2">2</option>
      </select>
   </div>
   <div class="cearboth"></div>
</br>
   <div style="white-space:nowrap">
     <label for="kilometraje">Kilometraje:</label>
     <select id="kilometraje" name="kilometraje" class="selects">
       <option val="<?= $arreglo['Kilometraje']; ?>"><?= $arreglo['Kilometraje']; ?></option>
       <option val="1">1</option>
       <option val="2">2</option>
     </select>
   </div>
   <div class="cearboth"></div>
  </br>
      ¿Necesita Vehículo Sustituto?
      <div class="space10"></div>
      <div class="inlines">
        <div id="check1" class="chk">
            Si <input type="checkbox" id="op-1-1" name="vsustituto[]" value="Si" >
            <label for="op-1-1"><span></span></label>
            No <input type="checkbox" id="op-1-2" name="vsustituto[]" value="No" >
            <label for="op-1-2"><span></span></label>
        </div>
        <div class="space10"></div>
    </div>

      <div style="white-space:nowrap">
        <label for="tcobertura">Tipo de cobertura:</label>
        <select id="tcobertura" name="tcobertura" class="selects">
          <option val="<?= $arreglo['Cobertura']; ?>"><?= $arreglo['Cobertura']; ?></option>
          <option val="1">1</option>
          <option val="2">2</option>
        </select>
      </div>
      <div class="cearboth"></div>
    </br>
        ¿Necesita Taller móvil para mantenimiento?
        <div class="space10"></div>
        <div class="inlines">
          <div id="check2" class="chk">
              Si <input type="checkbox" id="op-2-1" name="tmovil[]" value="Si" >
              <label for="op-2-1"><span></span></label>
              No <input type="checkbox" id="op-2-2" name="tmovil[]" value="No" >
              <label for="op-2-2"><span></span></label>
          </div>
          <div class="space10"></div>
      </div>

      </br>

      <div style="white-space:nowrap">
        <label for="dgarantia">Depósito de garantía:</label>
        <select id="dgarantia" name="dgarantia" class="selects">
          <option val="<?= $arreglo['Deposito']; ?>"><?= $arreglo['Deposito']; ?></option>
          <option val="1">1</option>
          <option val="2">2</option>
        </select>
      </div>
      </br>
    </div>
    <!--Div right-->
<div class="cearboth"></div>
<div class="botones_end" >
  <a href="#" target="_blank">Ver más información</a>
  <button id="lightbox-btn" class="bt-more-vehicles open-lightbox" type="button">Contáctenos </button>
  <button type="button" class="btn btn-style6 btn-addBody">Comparar<i class="fa fa-angle-right" aria-hidden="true"></i></button>
  <!--<a href="/planes-renting.php?vehicle=toyota-hilux" class="btn btn-style6" title="Cotice Su Hilux 4x4">Comparar<i class="fa fa-angle-right" aria-hidden="true"></i></a>-->
  <br>
  <a href="/planes-renting.php?vehicle=toyota-hilux" class="btn btn-style6" title="Cotice Su Hilux 4x4">Reiniciar<i class="fa fa-angle-right" aria-hidden="true"></i></a>
</div>


  </div>



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
<script>

var speed = {
  'trigger': '#speed-compare',
  'target': '.modal_content .speedometer' };

$(function () {
  $(speed.trigger).on('click', function () {
    setTimeout(function () {
      $(speed.target).each(function () {
        $(this).addClass('play');
      });
    }, 1000);
  });
});
$('.btn-addBody').click(function( event ) {
$('.main').append('<div class="divBody">¡Felicidades! Has insertado un nuevo DIV en el BODY</div>')
});
        var gauge = new Gauge($('.gauge2'));
        $('.gauge2').gauge({
            values: {
                0 : '450',
              /*  20: '2',
                40: '4',
                60: '6',
                80: '8',*/
                100: '2022'
            },
            colors: {
                0 : '#f00',
                30: '#ffa500',
                70: '#378618'
            },
            angles: [
                180,
                360
            ],
            lineWidth: 20,
            /*arrowWidth: 20,*/
            arrowColor: '#ccc',
            inset:false,

            value: 30
        });
    </script>
<script type="text/javascript" src="https://www.renting.cr/js/jquery.min.js"></script>
<script type="text/javascript" src="https://www.renting.cr/js/jquery-ui.min.js?date=20180927"></script>
<script type="text/javascript" src="https://www.renting.cr/js/custom.min.js?date=20180927"></script>
</html>
