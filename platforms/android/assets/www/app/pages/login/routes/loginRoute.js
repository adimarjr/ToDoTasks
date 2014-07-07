define([], function() {
	   
	var routes = [                 		
       		{
       			module: 'login',
                  text: 'Selecionar Perfil',
                  view: 'selecionarPerfil', 
                  state : {
                  	name : 'login.selecionar-perfil',
                  },
                  roles: ['*'],
       		}];
	    
	   return routes;
	});