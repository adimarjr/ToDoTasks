define([ 'msAppJs' ], function(app) {
	
	app.service('cargoService', [ 'ResourcesService', function(ResourcesService) {
		
		this.findCargoByName = function(cargo){
			return ResourcesService.comuns.one(cargo, 'cargos').getList();
		};
		
	}]);
	
	return app;
});