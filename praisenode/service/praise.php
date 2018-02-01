<?php
class Praise {
	public $total;
	function getTotal($db,$conn){
		$query_sql = 'select total from praisetb where type = "article"';
		$result = $db->query($conn, $query_sql);
		if(empty($result)){
			return null;
		}else{
			return $result[0];
		}
	}
	function setTotal($db,$conn,$num){
		$update_sql = 'update praisetb set total = '.$num.' where type = "article"';
		$result = $db->update($conn, $update_sql);
		if($result){
			return true;
		}else{
			return false;
		}
	}
}

?>