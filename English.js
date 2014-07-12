Ext.define('englishModel',{
	extend : 'Ext.data.Model',
	fields : [
		{name : 'title', type : 'string'},
		{name : 'Year', type : 'string'},
		{name : 'Rated', type : 'string'},
		{name : 'Released', type : 'string'},
		{name : 'Runtime', type : 'string'},
		{name : 'Genre', type : 'string'},
		{name : 'Director', type : 'string'},
		{name : 'Actors', type : 'string'},
		{name : 'Poster', type : 'string'}
	],
});


Ext.onReady(function(){
	
	window.englishStore = Ext.create('Ext.data.Store',{
		model : 'englishModel',
		autoSync : true,
		pageSize : 25,
		proxy : {
			type : 'ajax',
			url : 'getMovieInfo.php',
			reader : {
				type : 'json',
				root : 'movies',
				totalProperty : 'totalCount',
			}
		},
	});

	window.englishGrid = Ext.create('Ext.grid.Panel',{
		title : 'English Movies',
		width : window.innerWidth,
		height : window.innerHeight,
		loadMask : true,
		scroll : true,
		autoHeight : false,
		store : englishStore,
		renderTo : Ext.getBody(),
		id : 'moviegrid',
		columns : [
			{text : 'Poster', flex : 1, dataIndex : 'poster', renderer : function(val){
				return '<img width="80%" src="'+val+'"/>';
			}},
			{text : 'Title', flex : 0.8, dataIndex : 'title'},
			{text : 'Year', flex : 0.2,dataIndex : 'year'},
			{text : 'Rated', flex : 0.2, dataIndex : 'rated'},
			{text : 'Runtime', flex : 0.2,dataIndex : 'runtime'},
			{text : 'Genre', dataIndex : 'genre'},
			{text : 'Director', flex : 0.5, dataIndex : 'director'},
			{text : 'Actors', flex : 1, dataIndex : 'actors'},

		],
		bbar : Ext.create('Ext.PagingToolbar',{
			store : englishStore,
			pageSize : 25,
			displayInfo : true,
			displayMsg : 'Displaying {0} - {1} of {2}',
			emptyMsg : 'No data to display'
		}),
		listeners : {
			/*rowclick : function(record, tr, rowIndex, e, eOpts){
				window.record = record;
				window.tr = tr;
				window.rowIndex = rowIndex;
				window.e = e;
				window.eOpts = eOpts;
				window.selected = this;
				Ext.Ajax.request({
					url : 'movieInfo.php',
					disableCaching : false,
					method : 'POST',
					params : {
						url : escape(tr.data.Title)
					},
					success : function(response){
						var text = response.responseText;
						console.log(text);
						
						record.getStore().reload();
					}
				});
			}*/
		}
		
	});	
	
	englishStore.load({
		params : {
			start : 0,
			limit : 25
		}
	});
});