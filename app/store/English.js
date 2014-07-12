Ext.define('Movies.store.English',{
	extend : 'Ext.data.Store',
	alias : 'englishmovies',
	require : ['Movies.model.English'],
	autoLoad : true,
	model : 'Movies.model.English',
});