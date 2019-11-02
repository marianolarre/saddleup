<?php

session_start();

require_once '../classes/DataBaseHandler.php';

$dbh = new DataBaseHandler();
$dbh->ConnectToDataBase();

$username = $dbh->EscapeString($_POST['username']);
$pwd = $dbh->EscapeString($_POST['pwd']);
$repeatedpwd = $dbh->EscapeString($_POST['repeatedpwd']);

if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
	header("Location: ../signup.php?signup=invaliduser");
	exit;
} else {
	if (!preg_match("/^[a-zA-Z0-9]*$/", $pwd)) {
		header("Location: ../signup.php?signup=invalidpassword");
		exit;
	} else {
		$sql = "SELECT * FROM Usuario WHERE username='$username';";
		$result = $dbh->Query($sql);
		$resultCheck = mysqli_num_rows($result);
		if ($resultCheck > 0) {
			header("Location: ../signup.php?signup=usertaken");
			exit;
		} else {
			if ($pwd != $repeatedpwd) {
				header("Location: ../signup.php?signup=mismatch");
				exit;
			} else {
				$hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
				$sql = "INSERT INTO Usuario (userId, username, password) VALUES (NULL, '$username', '$hashedPwd');";
				$dbh->Query($sql);

				header("Location: ../index.php?signup=success");
				exit;
			}
		}
	}
}