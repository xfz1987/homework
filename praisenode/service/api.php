<?php
require_once('./OCDB.php');
require_once('./praise.php');

header("Content-Type:application/json;charset=UTF-8");
$action = $_REQUEST["action"];
$total = @$_REQUEST["total"];

$db = new OCDB('localhost','root','root','db_test');
$conn = $db->connect();

$praise = new Praise();

switch ($action) {
	case 'queryPraise':
		$res = $praise->getTotal($db,$conn);
		if(empty($res)){
			echo json_encode(array('status'=>false));
		}else{
			echo json_encode(array('status'=>true, 'total'=>$res['total']));
		}
		break;
	case 'updatePraise':
		$res = $praise->setTotal($db,$conn,$total);
		echo json_encode(array('status'=>$res));
		break;
	default:
		$db->close($conn);
}

?>