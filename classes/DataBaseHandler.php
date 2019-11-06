<?php

class DataBaseHandler {

  private $conn = null;
  private $servername = "localhost";
  private $database = "id11346292_saddleup";
  private $username = "id11346292_saddleup";
  private $password = "654321";

	public function ConnectToDataBase() {
		if ($this->conn == null) {
			$this->conn = mysqli_connect($this->servername, $this->username, $this->password, $this->database);
		} else {
			return $this->conn;
		}
	}

	public function GetConnection() {
		return $this->conn;
	}

	public function Query($query) {
		return mysqli_query($this->conn, $query);
	}

	public function EscapeString($string) {
		return mysqli_real_escape_string($this->conn, $string);
	}

	public function QueryToArray($query) {
		$array = Array();
		$result = mysqli_query($this->conn, $query);
		while($resultRow = mysqli_fetch_assoc($result)) {
			$arrayRow = Array();
			foreach($resultRow as $column => $value) {
				$arrayRow[$column] = $value;
			}
			array_push($array, $arrayRow);
		}
		return $array;
	}

	public function TableToArray($table, $orderby = null) {
		if ($orderby == null) {
			return $this->QueryToArray("SELECT * FROM ".$table);
		} else {
			return $this->QueryToArray("SELECT * FROM ".$table." ORDER BY ".$orderby);
		}
	}
	
	public function GetUniqueValue($query, $column) {
	    $result = mysqli_query($this->conn, $query);
        $resultCheck = mysqli_num_rows($result);

		if ($resultCheck > 0) {
			$row = mysqli_fetch_assoc($result);
			return $row[$column];
		} else {
		    return null;
		}
	}
}
