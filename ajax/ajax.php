<?php

session_start();

switch($_POST['action']) {
	case 'get_money':
		require_once('../classes/DataBaseHandler.php');
        $dbh = new DataBaseHandler();
        $dbh->ConnectToDataBase();
        
        $userId = $_SESSION['userId'];
        $sql = 'SELECT dinero FROM Usuario WHERE userId='.$userId;
        
        $dinero = $dbh->GetUniqueValue($sql, 'dinero');
		echo $dinero;
		break;
}
