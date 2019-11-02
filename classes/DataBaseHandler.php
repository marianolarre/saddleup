<?php

class DataBaseHandler {

	private $conn = null;
  private $servername = "saddleup.000webhostapp.com;
  private $database = "id11346292_saddleup";
  private $username = "id11346292_saddleup";
  private $password = "saddleup19";

	public function ConnectToDataBase() {
		if ($this->conn == null) {
			$this->conn = mysqli_connect($servername, $username, $password, $database);
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
}
