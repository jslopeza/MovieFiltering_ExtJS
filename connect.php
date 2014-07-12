<?php

try
{
	// Connect to DB
	$dbh = new PDO('mysql:host=localhost;dbname=five_tech;charset=utf8','root','binoy14');
}
catch(PDOException $e)
{
	// Display Errors
	echo $e->getMessage();
}

?>