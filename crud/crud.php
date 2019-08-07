<?php

/********************************
  Author Carlos Servín
  Site: www.servin.mx
  email: carlos@servin.mx
  https://github.com/cservinmx
  Basic CRUD
*********************************/

// incluye la clase Db
require_once('class_bd.php');

	class Crud{
		// constructor de la clase
		public function __construct(){}

		// método para insertar, recibe como parámetro un objeto
		public function insertar($data){
      //print_r($data);
			$db=Db::conectar();
			$insert=$db->prepare('INSERT INTO precios values(NULL,:vehiculo,:tvehiculo,:transmision,:plazos,:vsustituto,:cobertura,:tallermovil,:deposito,:precio,:status)');
			$insert->bindValue('vehiculo',$data->getVehiculo());
			$insert->bindValue('tvehiculo',$data->getTipov());
			$insert->bindValue('transmision',$data->getTransmision());
      $insert->bindValue('plazos',$data->getPlazos());
      $insert->bindValue('vsustituto',$data->getVsustituto());
			$insert->bindValue('cobertura',$data->getCobertura());
      $insert->bindValue('tallermovil',$data->getTallermov());
      $insert->bindValue('deposito',$data->getDeposito());
			$insert->bindValue('precio',$data->getPrecio());
			$insert->bindValue('status',1);
			$insert->execute();

		}

		// método para mostrar todos
		public function mostrar(){
			$db=Db::conectar();
			$lista=[];
			$select=$db->query('SELECT * FROM precios WHERE status=1');

			foreach($select->fetchAll() as $rec){
				$myns= new Autos();
				$myns->setId($rec['idprecios']);
				$myns->setVehiculo($rec['vehiculo']);
				$myns->setTipov($rec['tvehiculo']);
				$myns->setTransmision($rec['transmision']);
        $myns->setPlazos($rec['plazos']);
        $myns->setVsustituto($rec['vsustituto']);
				$myns->setCobertura($rec['cobertura']);
				$myns->setTallermov($rec['tallermovil']);
				$myns->setDeposito($rec['deposito']);
        $myns->setPrecio($rec['precio']);
				$lista[]=$myns;
			}
			return $lista;
		}

		// método para eliminar un registoro, recibe como parámetro el id
		public function eliminar($id){
			$db=Db::conectar();
			//$eliminar=$db->prepare('DELETE FROM newsfeed WHERE ID=:id');
			$eliminar=$db->prepare('UPDATE precios SET status=:status WHERE idprecios=:idprecios');
			$eliminar->bindValue('idprecios',$id);
			$eliminar->bindValue('status',0);
			$eliminar->execute();
		}

		// método para buscar un registro, recibe como parámetro el id
		public function obtener($id){
			$db=Db::conectar();
			$select=$db->prepare('SELECT * FROM precios WHERE idprecios=:idprecios AND status=:status');
			$select->bindValue('idprecios',$id);
			$select->bindValue('status',1);
			$select->execute();
			$feed=$select->fetch();
			$nwf= new Autos();
			$nwf->setId($feed['idprecios']);
			$nwf->setVehiculo($feed['vehiculo']);
			$nwf->setTipov($feed['tvehiculo']);
			$nwf->setTransmision($feed['transmision']);
			$nwf->setPlazos($feed['plazos']);
			$nwf->setVsustituto($feed['vsustituto']);
			$nwf->setCobertura($feed['cobertura']);
			$nwf->setTallermov($feed['tallermovil']);
			$nwf->setDeposito($feed['deposito']);
			$nwf->setPrecio($feed['precio']);
			return $nwf;
		}

		// método para actualizar un registro, recibe como parámetro el id
		public function actualizar($libro){
			$db=Db::conectar();
			$actualizar=$db->prepare('UPDATE precios SET vehiculo=:vehiculo, tvehiculo=:tvehiculo,transmision=:transmision,plazos=:plazos,vsustituto=:vsustituto,cobertura=:cobertura,tallermovil=:tallermovil,deposito=:deposito,precio=:precio  WHERE idprecios=:idprecios');
			$actualizar->bindValue('idprecios',$libro->getId());
			$actualizar->bindValue('vehiculo',$libro->getVehiculo());
			$actualizar->bindValue('tvehiculo',$libro->getTipov());
			$actualizar->bindValue('transmision',$libro->getTransmision());
			$actualizar->bindValue('plazos',$libro->getPlazos());
			$actualizar->bindValue('vsustituto',$libro->getVsustituto());
			$actualizar->bindValue('cobertura',$libro->getCobertura());
			$actualizar->bindValue('tallermovil',$libro->getTallermov());
			$actualizar->bindValue('deposito',$libro->getDeposito());
			$actualizar->bindValue('precio',$libro->getPrecio());
			$actualizar->execute();
		}
	}
?>
