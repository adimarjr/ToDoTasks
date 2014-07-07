define(['msAppJs'], function(app) {
	'use strict';

	app.filter('telefone', function(){
		return function(input){
			var numero = input.telefone;

			var formatedTel = "("+input.ddd+") ";
			var separador = numero.length - 4;
			
			var prefixo = numero.substring(0, separador);
			var sufixo = numero.substring(separador, numero.length);

			formatedTel += prefixo + "-" + sufixo;

			return formatedTel;
		};
	});
});