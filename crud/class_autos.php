<?php
/********************************
  Author Carlos Servín
  Site: www.servin.mx
  email: carlos@servin.mx
  https://github.com/cservinmx
  Basic CRUD
*********************************/

	class Autos{
		private $id;
		private $vehiculo;
		private $tipov;
		private $transmision;
    private $plazos;
    private $vsustituto;
    private $cobertura;
    private $tallermov;
    private $deposito;

		function __construct(){}

    public function getId(){
     	return $this->id;
		}

		public function setId($id){
  		$this->id = $id;
  	}
		public function getVehiculo(){
		return $this->vehiculo;
		}

		public function setVehiculo($vehiculo){
			$this->vehiculo = $vehiculo;
		}

		public function getTipov(){
			return $this->tipov;
		}

		public function setTipov($tipov){
			$this->tipov = $tipov;
		}

    public function getTransmision(){
      return $this->transmision;
    }

    public function setTransmision($transmision){
      $this->transmision = $transmision;
    }

		public function getPlazos(){
		  return $this->plazos;
		}

		public function setPlazos($plazos){
			$this->plazos = $plazos;
		}

    public function getVsustituto(){
      return $this->vsustituto;
    }

    public function setVsustituto($vsustituto){
      $this->vsustituto = $vsustituto;
    }

    public function getCobertura(){
      return $this->cobertura;
    }

    public function setCobertura($cobertura){
      $this->cobertura = $cobertura;
    }

    public function getTallermov(){
      return $this->tallermov;
    }

    public function setTallermov($tallermov){
      $this->tallermov = $tallermov;
    }

    public function getDeposito(){
      return $this->deposito;
    }

    public function setDeposito($deposito){
      $this->deposito = $deposito;
    }

    public function getPrecio(){
      return $this->precio;
    }

    public function setPrecio($precio){
      $this->precio = $precio;
    }
	}
?>
