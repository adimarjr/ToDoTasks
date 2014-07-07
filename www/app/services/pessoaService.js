define([ 'msAppJs' ], function(app) {
	
	app.service("pessoaService", [ 'ResourcesService', function(ResourcesService) {
		this.findPessoaByCpf = function(cpf){
			return ResourcesService.pessoa.one('cpf', cpf).get();
		};
	}]);
	
	return app;
});