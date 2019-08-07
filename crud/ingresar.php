<html>
<head>
	<title> Ingresar Vehículo</title>
</head>
<header>
Ingresar Vehículo
</header>
<form action='controlador_autos.php' method='post'>
	<table>
		<tr>
			<td>Vehículo:</td>
			<td> <select name='vehiculo'>
				<option value="1">Prado</option>
				<option value="2">Fortuner</option>
				<option value="3">Hi-lux Doble Cabina 4X4</option>
				<option value="4">Hi-lux Cabina Sencilla 4X2</option>
				<option value="5">Rav4</option>
				<option value="6">Rush</option>
				<option value="7">Corolla</option>
				<option value="8">Yaris</option>
				<option value="9">Figo</option>
			</select></td>
		</tr>
		<tr>
			<td>Tipo Vehículo:</td>
			<td>
				<select name='tipov'>
					<option value="Nuevo">Nuevo</option>
					<option value="Seminuevo">Seminuevo</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>Transmisión:</td>
			<td>
				<select name='transmision'>
					<option value="Manual">Manual</option>
					<option value="Automática">Automática</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>Plazos:</td>
			<td>
				<select name='plazos'>
					<option value="36 Meses">36 Meses</option>
					<option value="24 Meses">24 Meses</option>
					<option value="12 Meses">12 Meses</option>
				</select>
			</td>
		</tr>

		<tr>
			<td>Vehículo sustituto:</td>
			<td>
				<select name='vsustituto'>
					<option value="Si">Si</option>
					<option value="No">No</option>
				</select>
			</td>
		</tr>

		<tr>
			<td>Tipo de Cobertura:</td>
			<td>
				<select name='cobertura'>
					<option value="Total">Total</option>
					<option value="Con deducible">Con deducible</option>
				</select>
			</td>
		</tr>


		<tr>
			<td>Taller móvil:</td>
			<td>
				<select name='tallermov'>
					<option value="Si">Si</option>
					<option value="No">No</option>
				</select>
			</td>
		</tr>
		<tr>
			 <td>Depósito de Garantía:</td>
			 <td>
				 <select name='deposito'>
					 <option value="2 depósitos">2 depósitos</option>
					 <option value="3 depósitos">3 depósitos</option>
					 <option value="4 depósitos o más">4 depósitos o más</option>
				 </select>
			 </td>
		 </tr>
		 <tr>
 			 <td>Precio:</td>
 			 <td>
 					<input type="text" name="precio" > 
 			 </td>
 		 </tr>


		<input type='hidden' name='insertar' value='insertar'>
	</table>
	<input type='submit' value='Guardar'>
	<a href="index.php">Volver</a>
</form>

</html>
