<?php
class Conmysql {
	public $servername;
	public $username;
	public $password;
	public $dbname;
	public $con;

	public function __construct($servername, $username, $password, $dbname){
		$this->servername = $servername;
		$this->username = $username;
		$this->password = $password;
		$this->dbname = $dbname;
	}

	public function getConnection(){
		try{
			$dsn = "mysql:host=$this->servername;dbname=$this->dbname";
			$this->con = new PDO($dsn, $this->username, $this->password);
		}catch(PDOException $e){
			echo $e->getMessage();
		}
	}

	public function updateData($sql){
		if(empty($this->con)){
			$this->getConnection();
		}
		header('Content-Type:application/json;charset=utf8');
		$res = $this->con->exec($sql);
		$this->closeCon();
		echo json_encode(array('result'=>$res));
	}

	public function closeCon(){
		$this->con = null;
	}
}

class realCon extends Conmysql {
	public function __construct($servername, $username, $password, $dbname){
		parent::__construct($servername, $username, $password, $dbname);
	}

	public function updateRealData(){
		$sql = 'UPDATE praise SET num=num+1 WHERE id=1';
		$this->updateData($sql);
	}
}

$praiseCon = new realCon('localhost','root','root','db_test');
$praiseCon->updateRealData();

?>