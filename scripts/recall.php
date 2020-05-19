<?php 

	$name = $_POST['name'];
	$telefon = $_POST['telefon'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
	$pdo = new PDO('mysql:host=localhost;dbname=lab_1', 'root', 'pass');
	$pdo->query("INSERT INTO recalls(`time`, `name`, `telefon`, `email`, `message`) VALUES(NOW(), '" . $name . "', '" . $telefon . "', '" . $email . "', '" . $message . "');");

	echo 'TEXT';

?>