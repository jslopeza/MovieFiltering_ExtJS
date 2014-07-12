Ext.define('Movies.model.English',{
	extend : 'Ext.data.Model',
	alias : 'englishmoviesmodel',
	fields : [
		{name : 'Title', type : 'string'},
		{name : 'Year', type : 'number'},
		{name : 'Rated', type : 'string'},
		{name : 'Released', type : 'string'},
		{name : 'Runtime', type : 'number'},
		{name : 'Genre', type : 'string'},
		{name : 'Director', type : 'string'},
		{name : 'Actors', type : 'string'},
		{name : 'Poster', type : 'string'}
	],
	proxy : {
		type : 'ajax',
		url : 'serverside/movies_complete_english.json',
		reader : {
			type : 'json',
			root : 'englishMovies'
		}
	}
});