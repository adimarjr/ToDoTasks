define([ 'msAppJs' ], function(app) {

	app.factory("EscopoCompartilhadoService", function() {

				var escopoCompartilhado = {};
								
				escopoCompartilhado.setFiltroPesquisa = function(filtro) {
					escopoCompartilhado.filtro = filtro;
				};
				
				escopoCompartilhado.getFiltroPesquisa = function() {
					var filtroRetorno = escopoCompartilhado.filtro;
					delete escopoCompartilhado.filtro;
					
					return filtroRetorno;
				};
				
				escopoCompartilhado.setMsg = function(msg) {
					escopoCompartilhado.mensagem = msg;
				};
				
				escopoCompartilhado.getMsg = function() {
					var msgRetorno = escopoCompartilhado.mensagem;
					delete escopoCompartilhado.mensagem;
					
					return msgRetorno;
				};
				
				escopoCompartilhado.clear = function() {
					escopoCompartilhado = {};
				};
				
				escopoCompartilhado.existeFiltro = function() {
					return escopoCompartilhado.filtro != null && escopoCompartilhado.filtro != undefined;
				};
				
				escopoCompartilhado.existeMsg = function() {
					return escopoCompartilhado.mensagem != null && escopoCompartilhado.mensagem != undefined;
				};
				
				return escopoCompartilhado;
			});

	return app;

});