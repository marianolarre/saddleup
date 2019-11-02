<?php

session_start();

require_once '../classes/DataBaseHandler.php';
$dbh = new DataBaseHandler();
$dbh->ConnectToDataBase();

if(!isset($_POST['submit'])) {
	header("Location: ../index.php");
} else {
	$username = $_POST['username'];
	$password = $_POST['pwd'];

	if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
		header("Location: ../index.php?login=error");
		exit;
	} else {
		$sql = "SELECT * FROM Usuario WHERE username='$username';";
		$result = $dbh->Query($sql);
		$resultCheck = mysqli_num_rows($result);

		if ($resultCheck == 0) {
			header("Location: ../index.php?login=error");
			exit;
		} else {
			$row = mysqli_fetch_assoc($result);
			$name = $row['username'];
			$hashedPwd = $row['password'];
			$check = password_verify( $password , $hashedPwd );
			if ($check == false) {
				header("Location: ../index.php?login=error");
				exit;
			} elseif ($check == true) {
				$_SESSION['userId'] = $row['userId'];
				$_SESSION['username'] = $row['username'];
				$_SESSION['logged'] = true;
				header("Location: ../main.php");
				exit;
			}
		}
	}
}