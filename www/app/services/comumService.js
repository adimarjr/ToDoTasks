define([ 'msAppJs' ], function(app) {
	
	app.service("comumService", [ 'ResourcesService', function(ResourcesService) {
		this.listarEscolaridades = function(){
			return ResourcesService.comuns.all('escolaridade').getList();
		};
		
		this.listarVinculosEmpregaticios = function(){
			return ResourcesService.comuns.all("vinculosEmpregatico").getList();
		};
		
		this.listarCargos = function() {
			//return ResourcesService.comuns.one(estado.id, "municipios").getList();
		};
		
		this.listarEstados = function(){
			return ResourcesService.comuns.all("ufs").getList();
		};
		
		this.listarMunicipios = function(estado) {
			return ResourcesService.comuns.one(estado.id, "municipios").getList();
		};
	}]);
	
	return app;
});