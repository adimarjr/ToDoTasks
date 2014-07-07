define([ 'msAppJs' ], function(app) {
	
	app.service("enderecoService", [ 'ResourcesService', function(ResourcesService) {
		this.findEnderecoByCep = function(cep){
			return ResourcesService.comuns.one(cep, "cep").get();
		};
	}]);
	
	return app;
});