<?php 
	require 'mysqli.php';

	$sql = "SELECT id, login, password, name FROM users";

	$users = [];
	$i = 0;
	if ($result = mysqli_query($mysqli, $sql)) {
		while ($row = mysqli_fetch_assoc($result)) {
			$users[$i]['id'] = $row['id'];
			$users[$i]['login'] = $row['login'];
			$users[$i]['password'] = $row['password'];
			$users[$i]['name'] = $row['name'];
			$i++;
		}

		echo json_encode($users);
	} else {
		http_response_code(404);
	}
?>