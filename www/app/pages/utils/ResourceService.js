define([ 'msAppJs' ], function(app) {

	app.factory("ResourcesService", [
			'Restangular', '$rootScope',
			function(Restangular, $rootScope) {

				// config módulo Restangular meta.href
				Restangular.setRestangularFields({
					selfLink : 'meta.href'
				});
				Restangular.setResponseInterceptor(function(data,
						operation, what, url, response, deferred) {
					
					var novoResponse = {};
					
					if (data && operation === "getList") {
				        // Here we're returning an Array which has one special property metadata with our extra information
					 	novoResponse = new Array(); 
					 	novoResponse.mensagens = (data.mensagens) ? data.mensagens : null;
					 	novoResponse.resultado = (data.resultado) ? data.resultado : new Array();
					 } else {
						 novoResponse = data;
					 }
					 
					return novoResponse;
				
				});
				
				var configuracaoQuestionarioResource = Restangular.all(appConfig.baseUrl + "/api/configurarQuestionario");
				
				var ouvidoriasResource = Restangular.all(appConfig.baseUrl + "/api/ouvidorias");
				
				var comumResource = Restangular.all(appConfig.baseUrl + "/api/comum");
				
				var loginResource = Restangular.all(appConfig.baseUrl + "/api/login");
				
				var fichaResource = Restangular.all(appConfig.baseUrl + "/api/ficha");
				
				var pessoaResource = Restangular.all(appConfig.baseUrl + "/api/pessoa");

				return {
					ouvidorias : ouvidoriasResource,
					comuns : comumResource,
					configuracaoQuestionario: configuracaoQuestionarioResource,
					login : loginResource,
					ficha : fichaResource,
					pessoa : pessoaResource
				};
			} ]);

	return app;

});