<?php
/********************************
  Author Carlos Servín
  Site: www.servin.mx
  email: carlos@servin.mx
  https://github.com/cservinmx
  Basic CRUD
*********************************/
require_once('crud.php');
require_once('class_autos.php');
$crud=new Crud();
$libro= new Autos();
//obtiene todos los registros con el método mostrar de la clase crud
$lista=$crud->mostrar();
?>

<html>
<head>
	<title>Mostrar Registros</title>
</head>
<body>
	<table border=1>
		<head>
			<td>Vehiculo</td>
			<td>Tipo Vehículo</td>
			<td>Transmisión</td>
			<td>Plazos</td>
			<td>Vehículo sustituto</td>
			<td>Tipo de Cobertura</td>
			<td>Taller móvil</td>
			<td>Depósito de Garantía</td>
			<td>Precio</td>
			<td>Actualizar</td>
			<td>Eliminar</td>
		</head>
		<body>
			<?php foreach ($lista as $record) {?>
			<tr>
				<td><?= $record->getVehiculo(); ?></td>
				<td><?= $record->getTipov(); ?></td>
				<td><?= $record->getTransmision();?> </td>
				<td><?= $record->getPlazos();?> </td>
				<td><?= $record->getVsustituto();?> </td>
				<td><?= $record->getCobertura();?> </td>
				<td><?= $record->getTallermov();?> </td>
				<td><?= $record->getDeposito();?> </td>
				<td><?= $record->getPrecio();?> </td>
				<td><a href="actualizar.php?id=<?php echo $libro->getId()?>&accion=a">Actualizar</a> </td>
				<td><a href="controlador_autos.php?id=<?php echo $libro->getId()?>&accion=e">Eliminar</a>   </td>
			</tr>
			<?php }?>
		</body>
	</table>
	<a href="index.php">Volver</a>
</body>
</html>
