<?php require('connect.php');

$start = $_GET['start'];
$limit = $_GET['limit'];

$countQuery = $dbh->query('SELECT COUNT(*) AS count FROM englishMovies');
$countQuery->setFetchMode(PDO::FETCH_NUM);
$count = $countQuery->fetch();

$sth = $dbh->query("SELECT * FROM englishMovies LIMIT $start,$limit");

// Set Fetch Mode
$sth->setFetchMode(PDO::FETCH_OBJ);
$rows = array();
//$count = $sth->fetch(PDO::FETCH_OBJ);
while($row = $sth->fetch()){
	$rows[] = $row;	
	
}
$data = array('movies' => $rows, 'totalCount' => $count['0']);
echo json_encode($data);
//print json_encode();
?>