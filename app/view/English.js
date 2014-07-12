Ext.define('Moveis.view.English',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.englishmovies',
	
	initComponent : function(){
		this.items = {
			xtype : 'grid',
			id : 'moviegrid',
			columns : [
				{text : 'Title', dataIndex : 'Title'},
				{text : 'Year', dataIndex : 'Year'},
				{text : 'Rated', dataIndex : 'Rated'},
				{text : 'Runtime', dataIndex : 'Runtime'},
				{text : 'Genre', dataIndex : 'Genre'},
				{text : 'Director', dataIndex : 'Director'},
				{text : 'Actors', dataIndex : 'Actors'},
				{text : 'Poster', dataIndex : 'Poster'}
			],
			store : 'Movies.store.English',
		};
		
		this.callParent(arguments);
	}
	
});	