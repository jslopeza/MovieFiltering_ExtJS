Ext.Loader.setConfig({
	enabled : true
});
Ext.application({
	name : 'Movies',
	models : ['English'],
	stores : [],
	requires : ['Movies.view.English'],
	launch : function(){
		Ext.create('Movies.view.English',{
			renderTo : Ext.getBody()
		});
	}
});