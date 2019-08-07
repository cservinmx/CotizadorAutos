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
	$crud= new Crud();
	$nf=new Autos();
	//busca el registro utilizando el id, que es enviado por GET desde la vista mostrar.php
	$nf=$crud->obtener($_GET['id']);
?>
<html>
<head>
	<title>Actualizar newsfeed</title>
</head>
<body>
	<form action='controlador_autos.php' method='post'>
	<table>
		<tr>
			<input type='hidden' name='id' value='<?php echo $nf->getId()?>'>
			<td>Vehículo:</td>
			<td> <select name='vehiculo'>
				<option value="1" <?php if($nf->getVehiculo()==1){ echo "selected";}?>>Prado</option>
				<option value="2" <?php if($nf->getVehiculo()==2){ echo "selected";}?>>Fortuner</option>
				<option value="3" <?php if($nf->getVehiculo()==3){ echo "selected";}?>>Hi-lux Doble Cabina 4X4</option>
				<option value="4" <?php if($nf->getVehiculo()==4){ echo "selected";}?>>Hi-lux Cabina Sencilla 4X2</option>
				<option value="5" <?php if($nf->getVehiculo()==5){ echo "selected";}?>>Rav4</option>
				<option value="6" <?php if($nf->getVehiculo()==6){ echo "selected";}?>>Rush</option>
				<option value="7"<?php if($nf->getVehiculo()==7){ echo "selected";}?>>Corolla</option>
				<option value="8" <?php if($nf->getVehiculo()==8){ echo "selected";}?>>Yaris</option>
				<option value="9" <?php if($nf->getVehiculo()==9){ echo "selected";}?>>Figo</option>
			</select></td>
		</tr>
		<tr>
			<td>Tipo Vehículo:</td>
			<td>
				<select name='tipov'>
					<option value="Nuevo" <?php if($nf->getTipov()=="Nuevo"){ echo "selected";}?>>Nuevo</option>
					<option value="Seminuevo" <?php if($nf->getTipov()=="Seminuevo"){ echo "selected";}?>>Seminuevo</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>Transmisión:</td>
			<td>
				<select name='transmision'>
					<option value="Manual" <?php if($nf->getTransmision()=="Manual"){ echo "selected";}?>>Manual</option>
					<option value="Automática" <?php if($nf->getTransmision()=="Automática"){ echo "selected";}?>>Automática</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>Plazos:</td>
			<td>
				<select name='plazos'>
					<option value="36 Meses" <?php if($nf->getPlazos()=="36 Meses"){ echo "selected";}?>>36 Meses</option>
					<option value="24 Meses" <?php if($nf->getPlazos()=="24 Meses"){ echo "selected";}?>>24 Meses</option>
					<option value="12 Meses" <?php if($nf->getPlazos()=="12 Meses"){ echo "selected";}?>>12 Meses</option>
				</select>
			</td>
		</tr>

		<tr>
			<td>Vehículo sustituto:</td>
			<td>
				<select name='vsustituto'>
					<option value="Si" <?php if($nf->getVsustituto()=="Si"){ echo "selected";}?>>Si</option>
					<option value="No" <?php if($nf->getVsustituto()=="No"){ echo "selected";}?>>No</option>
				</select>
			</td>
		</tr>

		<tr>
			<td>Tipo de Cobertura:</td>
			<td>
				<select name='cobertura'>
					<option value="Total" <?php if($nf->getCobertura()=="Total"){ echo "selected";}?>>Total</option>
					<option value="Con deducible" <?php if($nf->getCobertura()=="Con deducible"){ echo "selected";}?>>Con deducible</option>
				</select>
			</td>
		</tr>


		<tr>
			<td>Taller móvil:</td>
			<td>
				<select name='tallermov'>
					<option value="Si" <?php if($nf->getTallermov()=="Si"){ echo "selected";}?>>Si</option>
					<option value="No" <?php if($nf->getTallermov()=="No"){ echo "selected";}?>>No</option>
				</select>
			</td>
		</tr>
		<tr>
			 <td>Depósito de Garantía:</td>
			 <td>
				 <select name='deposito'>
					 <option value="2 depósitos" <?php if($nf->getDeposito()=="2 depósitos"){ echo "selected";}?>>2 depósitos</option>
					 <option value="3 depósitos" <?php if($nf->getDeposito()=="3 depósitos"){ echo "selected";}?>>3 depósitos</option>
					 <option value="4 depósitos o más" <?php if($nf->getDeposito()=="4 depósitos o más"){ echo "selected";}?>>4 depósitos o más</option>
				 </select>
			 </td>
		 </tr>
		 <tr>
 			 <td>Precio:</td>
 			 <td>
 					<input type="text" name="precio"  value='<?= $nf->getPrecio(); ?>'>
 			 </td>
 		 </tr>

		<input type='hidden' name='actualizar' value'actualizar'>
	</table>
	<input type='submit' value='Guardar'>
	<a href="index.php">Volver</a>
</form>
</body>
</html>
