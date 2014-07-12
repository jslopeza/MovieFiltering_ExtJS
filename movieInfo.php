<?php require('connect.php');
$url = $_POST['url'];
$data=file_get_contents("http://www.omdbapi.com/?t=".$url);
$data = json_decode($data, true);
$keys = array_keys($data);
foreach ($keys as $key) {
    $title = $data['Title'];
	$Year = $data['Year'];
	$Rated = $data['Rated'];
	$Runtime = $data['Runtime'];
	$Genre = $data['Genre'];
	$Director = $data['Director'];
	$Actors = $data['Actors'];
	$Poster = $data['Poster'];
	$imdbID = $data['imdbID'];
}
echo $title;
//echo $Year;
//echo $Rated;
//echo $Runtime;
//echo $Genre;
//echo $Director;
//echo $Actors;
//echo $Poster;
//echo $imdbID;
//$data = json_encode($data);

$sth = $dbh->prepare("INSERT INTO englishMovies(title,year,runtime,genre,director,actors,poster,imdbID,rated)
					  VALUES(:title,:year,:runtime,:genre,:director,:actors,:poster,:imdbID,:rated)");

$sth->bindParam(':title',$title);
$sth->bindParam(':year',$Year);
$sth->bindParam(':runtime',$Runtime);
$sth->bindParam(':genre',$Genre);
$sth->bindParam(':director',$Director);
$sth->bindParam(':actors',$Actors);
$sth->bindParam(':poster',$Poster);
$sth->bindParam(':imdbID',$imdbID);
$sth->bindParam(':rated',$Rated);

$sth->execute();
?>