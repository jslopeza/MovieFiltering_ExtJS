$(document).ready(function(){
	$('#table').dataTable({
		"ajax" : 'getMovieInfo.php',
		//"datasrc" : 'movies',
		"aoColumns" : [
			{"mDataProp" : "poster", "mRender" : function(obj){
				return '<img width="100px height="100px" src="'+obj+'">';
			}},
			{"mDataProp" : "title", 'sType' : 'string'},
			{"mDataProp" : "year", "sType" : "number"},
			{"mDataProp" : "rated","sType" : "number"},
			{"mDataProp" : "runtime","sType" : "number"},
			{"mDataProp" : "genre"},
			{"mDataProp" : "director", "sWidth" : "150px"},
			{"mDataProp" : "actors"},
		],
		"fnDrawCallback" : function(){
			$('table tbody tr').click(function(){
				alert(' ');
			})
		}
	});
});