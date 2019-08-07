<?php

/********************************
  Author Carlos Servín
  Site: www.servin.mx
  email: carlos@servin.mx
  https://github.com/cservinmx
  Basic CRUD
*********************************/

//incluye la clase Newfeed y CrudNewsfeed
require_once('crud.php');
require_once('class_autos.php');

$crud= new Crud();
$nf= new Autos();

	// si el elemento insertar no viene nulo llama al crud e inserta
	if (isset($_POST['insertar'])) {
		$nf->setVehiculo($_POST['vehiculo']);
		$nf->setTipov($_POST['tipov']);
		$nf->setTransmision($_POST['transmision']);
    $nf->setPlazos($_POST['plazos']);
    $nf->setVsustituto($_POST['vsustituto']);
		$nf->setCobertura($_POST['cobertura']);
		$nf->setTallermov($_POST['tallermov']);
		$nf->setDeposito($_POST['deposito']);
		$nf->setPrecio($_POST['precio']);
		//llama a la función insertar definida en el crud
		$crud->insertar($nf);
		header('Location: index.php');
	// si el elemento de la vista con nombre actualizar no viene nulo, llama al crud y actualiza
	}elseif(isset($_POST['actualizar'])){
		$nf->setId($_POST['id']);
		$nf->setVehiculo($_POST['vehiculo']);
		$nf->setTipov($_POST['tipov']);
		$nf->setTransmision($_POST['transmision']);
    $nf->setPlazos($_POST['plazos']);
    $nf->setVsustituto($_POST['vsustituto']);
		$nf->setCobertura($_POST['cobertura']);
		$nf->setTallermov($_POST['tallermov']);
		$nf->setDeposito($_POST['deposito']);
		$nf->setPrecio($_POST['precio']);
		$crud->actualizar($nf);
		header('Location: index.php');
	// si la variable accion enviada por GET es == 'e' llama al crud y elimina
	}elseif ($_GET['accion']=='e') {
		$crud->eliminar($_GET['id']);
		header('Location: index.php');
	// si la variable accion enviada por GET es == 'a', envía a la página actualizar.php
	}elseif($_GET['accion']=='a'){
		header('Location: actualizar.php');
	}
?>
