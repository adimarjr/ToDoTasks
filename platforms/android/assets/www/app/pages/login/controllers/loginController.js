define([ 
        'msAppJs',
        'pages/utils/MenuUtils',
        'pages/login/services/loginService',
        'componentes/ms-modal/services/msModalService',
        ], function(app, MenuUtils) {
	
        
            app.controller('loginController', ['ngTableParams', '$filter', '$scope','msAutenticacaoService', 'msSegurancaService', '$rootScope', '$timeout', '$validator', '$state', 'msModalService', 'loginService', '$translatePartialLoader', 
                                                    function(ngTableParams, $filter, $scope, msAutenticacaoService, msSegurancaService, $rootScope, $timeout, $validator, $state, msModalService, loginService, $translatePartialLoader){
            	
            		function setUsuarioScope(usuario){
            			$timeout(function() {
        					msSegurancaService.setUsuario(usuario);
        					$rootScope.isUsuarioAutenticado = true;
        					$rootScope.usuarioAutenticado = usuario;
        					$rootScope.perfilSelecionado = (typeof usuario.perfil != 'undefined');
        					$rootScope.$apply();
        					atualizarTabelaPerfil(usuario);
        					
        					if(!perfilSelecionado(usuario)
             						&& usuario.perfis != null
             						&& usuario.perfis.length > 1){
         						$state.go("login.selecionar-perfil"); 
         					}
        				});
            		}
            		
            		function perfilSelecionado(usuario){
            			return (typeof usuario != 'undefined'
            				&& typeof usuario.perfil != 'undefined'
     						&& usuario.perfil.id != null);
            		}
            		
            		function atualizarTabelaPerfil(usuario){
            			var data = usuario.perfis; 
    			 		$scope.tabelaPerfil = new ngTableParams({
		        			page: 1,  
		        	        count: 30 
		        		}, {
				 			counts: [],
				 			total: (data.length) ? data.length : 0,
				 			getData: function($defer, params) {
				 				
				 				var orderedData = params.sorting() ?
				 						$filter('orderBy')(data, params.orderBy()) :
				 							data;
				 						
		 						params.total(orderedData.length);
		 						$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
				 			}
				 		});
            		}
            		
            		$scope.formLogin = {
                        email: null,
                        password: null
                    };
            		
            		
        			msAutenticacaoService.recuperarDadosUsuario().then(function(result) {
        				setUsuarioScope(result);
        			});
            		
                    $scope.login = function() {
                            if(!appConfig.login) {
                                throw 'Não foi informada uma configuração de login para a aplicação. Vide appConfig(main.js)';
                            }
                            
                            if(msSegurancaService.isUsuarioAutenticado()) {
                                $state.transitionTo(appConfig.login.sucesso);
                            }
                            
                            $validator.validate($scope)
                			.success(function(){
                				                   				
                				msAutenticacaoService.autenticar($scope.formLogin.email, $scope.formLogin.password).then(function(msSegurancaService) {
                					msAutenticacaoService.recuperarDadosUsuario().then(function(result) {
	                					setUsuarioScope(result);
	                					 
	            					 	if(!perfilSelecionado(result)
	                     						&& result.perfis != null
	                     						&& result.perfis.length > 1){
	                 						$state.go("login.selecionar-perfil"); 
	                 					}else{
	                 						$state.go(appConfig.login.sucesso);
	                 					}
                					});
                                
                				}, function(reason) {
                                    $scope.$msAlert.error(reason.data.error_description);
                                }) ;
                			});
                           
                    };
                    
                    $scope.logout = function() {
                        try {
                            msAutenticacaoService.sair().then(function(result) {
                            	$timeout(function() {
	                            	$rootScope.isUsuarioAutenticado = false;
	            					$rootScope.usuarioAutenticado = {};
	            					$rootScope.perfilSelecionado = false;
	            					$rootScope.$apply();
	                                $state.go('login');
                            	});
                            });
                        }
                        catch(e) {
                            $scope.$msNotify.error(e);
                        }
                    };
                    
                    $scope.editUsuario = function() {
    					atualizarTabelaPerfil($rootScope.usuarioAutenticado);
                		 msModalService.setOptions({
             				title: 'Informações do Usuário',
             				content: '#modalInformacoesUsuario',

             			}).init();
                    };
                    
                    $scope.alterarPerfil = function(perfil) {
                    	loginService.selecionarPerfil(perfil).then(function(resposta) {
                    		setUsuarioScope(resposta.resultado.usuario);
                    		msModalService.close();
                    		$state.transitionTo(appConfig.login.sucesso);
//                    		
//	                    	$scope.alterarMenu(obterMenu());
//	                    	$timeout(function(){
//	                    		$scope.$apply();
//	                    	});
                    		
                        });
                		
                    };

    				$scope.selecionarPerfil = function(perfil) {
    					loginService.selecionarPerfil(perfil).then(function(resposta) {
    						MenuUtils.adicionarPerfis(resposta.resultado.usuario.perfis, $scope);
    						setUsuarioScope(resposta.resultado.usuario);
//    						var user = resposta.resultado.usuario;
//    						console.log(JSON.stringify(user));
//    						var t = window.btoa(JSON.stringify(user));
//    						console.log(t);
//    						var y = window.atob(t); 
//    						console.log(y);
//    						console.log(JSON.parse(y));
    						$state.transitionTo(appConfig.login.sucesso);

    						$scope.alterarMenu(MenuUtils.obterMenu());
    						$timeout(function(){
    							$scope.$apply();
    						});
    						
                        });
    					
    				};
            }]);
               
            return app;
});