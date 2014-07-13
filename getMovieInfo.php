<?php require('connect.php');

$sth = $dbh->query("SELECT * FROM englishMovies");

// Set Fetch Mode
$sth->setFetchMode(PDO::FETCH_OBJ);
$rows = array();

while($row = $sth->fetch()){
	$rows[] = $row;
}

$data = array('data' => $rows);
echo json_encode($data);

?>