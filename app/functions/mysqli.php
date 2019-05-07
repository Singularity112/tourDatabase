<?php 
	$login = 'root';
	$password = '';
	$database = 'tourDatabase';
	$host = 'localhost';

	$mysqli = new mysqli($host, $login, $password, $database);
	
	if (mysqli_connect_errno($mysqli)) {
    	die("Failed to connect:" . mysqli_connect_error());
  	}
?>