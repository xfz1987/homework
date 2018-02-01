<?php
class OCDB {
	private $conn;
	private $addr;
	private $name;
	private $pwd;
	private $DBname;

	function __construct($address, $username, $password, $dbname ){
		$this->addr = $address;
		$this->name = $username;
		$this->pwd = $password;
		$this->DBname = $dbname;
		return $this;
	}

	public function connect(){
		$conn = mysqli_connect($this->addr,$this->name,$this->pwd,$this->DBname);
		if(!$conn){
			die("Connection failed: " . mysqli_connect_error());
		}
		mysqli_query($conn,"set names utf8");
		return $conn;
	}

	public function add($conn,$sql){
		if(mysqli_query($conn, $sql)) {
    		return true;
		} else {
    		return "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
	}

	public function delete($conn,$sql){
		if(mysqli_query($conn, $sql)) {
    		return true;
		} else {
    		return "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
	}

	public function update($conn,$sql){
		if(mysqli_query($conn, $sql)) {
    		return true;
		} else {
    		return false;
		}
	}

	public function query($conn,$sql){
		$result = mysqli_query($conn, $sql);
		$arr = array();
		if(mysqli_num_rows($result) > 0){
			while($row = mysqli_fetch_assoc($result)){
				// array_push($arr, $row);
				$arr[] = $row;
    		}
    		return $arr;
		}else{
			return null;
		}
	}

	public function close($conn){
		mysqli_close($conn);
	}

}
?>