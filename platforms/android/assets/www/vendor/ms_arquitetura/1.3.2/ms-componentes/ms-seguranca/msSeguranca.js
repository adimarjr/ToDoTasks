define([
        'angularNgCookies',
        ], 
		function() {
			'use strict';
			try {
                            
                            var msSeguranca =  angular.module('msSeguranca', ['ngCookies']);
                            
                            msSeguranca.run(['$rootScope', 'msSegurancaService', '$state', 'msAutenticacaoService',
                                function($rootScope, msSegurancaService, $state, msAutenticacaoService) {
                                    
                                    /*
                                     * Limpando a sessao do usuario quando o tempo expirar
                                     */
                                    $rootScope.$on('timer-stopped', function (event, data){
                                        if(msSegurancaService.isUsuarioAutenticado()) {
                                            msAutenticacaoService.sair().then(function(result) {
                                                $state.go('login');
                                                $rootScope.$msAlert.error('<h4>Seu tempo de sessão expirou</h4>');
                                            });
                                        }
                                    });
                                    
                                    /*
                                     * Atualizando informações nas mudanças de rota
                                     */
                                    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
                                        //Limpando os alertas visiveis:
                                        $rootScope.alerts = [];
                                        
                                        $rootScope.isUsuarioAutenticado = msSegurancaService.isUsuarioAutenticado();
                                        
                                        var defaultState = (appConfig.defaultRoute) ? appConfig.defaultRoute : 'tasks';
                                       
                                        if(msSegurancaService.isUsuarioAutenticado()) {
                                            
                                            $rootScope.limite = msSegurancaService.contador();
                                            $rootScope.$on('UsuarioAutenticado', function(event, data) {
                                                $rootScope.usuarioAutenticado = data;
                                            });
                                            
                                            if(toState.name == 'login') {
                                                event.preventDefault();
                                                $state.go(appConfig.login.sucesso);
                                                $rootScope.$msNotify.close();
                                            }
                                            else {
                                                msSegurancaService.possuiAcesso(toState.roles).then(function(result) {

                                                }, function(reason) {
                                                    event.preventDefault();
                                                    $rootScope.$msAlert.info(reason);
                                                    $state.go(defaultState);
                                                    $rootScope.$msNotify.close();
                                                });
                                            }
                                        }
                                        else {
                                            if(toState.roles) {
                                                $rootScope.$msAlert.info('É necessário estar logado para acessar essa funcionalidade.');
                                                event.preventDefault();
                                                $state.go('login');
                                                $rootScope.$msNotify.close();
                                            }
                                        }
                                    
                                    });
                                    
                                    $rootScope.$on('$stateChangeError', function (ev, to, toParams, from, fromParams, error) {
                                    	console.log(error);
                                    	
                                    	if(error.status === 401
                                    			&& msSegurancaService.isUsuarioAutenticado()
                                    			&& msSegurancaService.getToken()){
                                    		msSegurancaService.setUsuarioAutenticado(false);
                                    		$state.go('login');
                                    	}
                                     });
                            }]);
                        
                        
                            return msSeguranca;
                                
			}
			catch(e) {
				$log.error(e);
			}
		
});
   