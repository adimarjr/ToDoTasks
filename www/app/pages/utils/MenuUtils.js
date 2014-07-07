define([], function() {
	
	var _menu = [
                {
                    module: 'tasks',
                    view: 'tasks',
                    text: 'Home',
                    roles: ['*']
                },
                {
                    module: 'painel-controle',
                    text: 'Painel de Controle',
                    view: 'sub-menu',
                    roles: ['BLOCK'],
                    children: [{
                            module: 'painel-controle-gestor',
                            text: 'Painel de Controle Gestor',
                            view: 'tasks',
                            controller : '',
                            roles: ['*'],
                     },
                     {
                            module: 'painel-controle-tecnico',
                            text: 'Painel de Controle Técnico',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     },
                     {
                            module: 'painel-controle-operador',
                            text: 'Painel de Controle Operador',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     }
                     ]
                },
                {
                    module : 'administrador',
                    text: 'Administração',
                    view: 'sub-menu',
                    roles: ['*'],
                    children: [{
                            module: 'config-questionario',
                            text: 'Configurar Questionário de Ouvidoria',
                            view: 'configQuestionario',
                            controller : 'configQuestController',  
                            roles: ['*'],
                     },
                     {
                            module: 'disponibilizar-ficha-cadastro',
                            text: 'Disponibilizar Ficha de Cadastro',
                            view: 'disponibilizarFichaCadastro',
                            controller : 'disponibilizarFichaCadastroController',  
                            roles: ['*'],
                     },
                     {
                            module: 'ficha-cadastro',
                            text: 'Ficha de Cadastro',
                            view: 'consultarFichaCadastro',
                            controller : 'consultarFichaCadastroController',  
                            roles: ['*'],
                     },
                     {
                            module: 'manter-reuniao-sensibilizacao',
                            text: 'Manter Reunião de Sensibilização',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-quest-plano-acao',
                            text: 'Manter Questionário de Plano de Ação',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-plano-acao',
                            text: 'Manter Plano de Ação',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-rede',
                            text: 'Manter Rede',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-quest-perfil-cidadao',
                            text: 'Manter Questionário Perfil Cidadão',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-tipificacao',
                            text: 'Manter Tipificação',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'configurar-tipificacao',
                            text: 'Configurar Tipificação',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'gerar-parecer-tecnico',
                            text: 'Gerar Parecer Técnico',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-agenda-capacitacao',
                            text: 'Manter Agenda da Capacitação',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-capacitacao',
                            text: 'Manter Capacitação',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-quest-avaliacao',
                            text: 'Manter Questionário de Avaliação',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'validar-avaliacao',
                            text: 'Validar Avaliação',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-dicionario-termos-tecnicos',
                            text: 'Manter Dicionário de Termos Técnicos',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-ajuda',
                            text: 'Manter Ajuda',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     ]
                }, 
                {
                    module : 'operacoes',
                    text: 'Operação do Sistema',
                    view: 'sub-menu',
                    roles: ['*'],
                    children: [{
                            module: 'manter-ouvidoria',
                            text: 'Manter Ouvidoria',//'Manter Ouvidoria / Ouvidoria',
                            view: 'consultarOuvidoria',
                            controller : 'consultarouvidoriaController',   
                            roles: ['*'],
                     },
                     {
                            module: 'manter-sub-rede',
                            text: 'Manter Sub-rede',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'executar-avaliacao',
                            text: 'Executar Avaliação',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-dados-complementares-demanda',
                            text: 'Manter dados complementares da demanda',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-msg-painel-controle',
                            text: 'Manter Mensagens do Painel de Controle',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'configurar-funcionalidades',
                            text: 'Configurar Funcionalidades',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-destino-espelho-demanda',
                            text: 'Manter destino do espelho da demanda',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-mala-direta',
                            text: 'Manter Mala Direta',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'configurar-quest-perfil-cidadao',
                            text: 'Configurar Questionário Perfil Cidadão',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-documento-origem',
                            text: 'Manter Documento de Origem',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-material-apoio',
                            text: 'Manter material de apoio',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-outros-assuntos',
                            text: 'Manter outros assuntos',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-temas-bits',
                            text: 'Manter Temas Bits',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-topicos-bits',
                            text: 'Manter Tópicos Bits',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'vincular-temas-topicos',
                            text: 'Vincular Temas a Tópicos',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-esclarecimento-comercial',
                            text: 'Manter Estabelecimento Comercial',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     {
                            module: 'manter-daps',
                            text: 'Manter D.A.P.S.',
                            view: 'tasks',
                            controller : '',  
                            roles: ['BLOCK'],
                     },
                     ]
                },
                {
                    module: 'atedimento',
                    text: 'Atendimento',
                    view: 'sub-menu',
                    roles: ['BLOCK'],
                    children: [{
                            module: 'manter-atendimento',
                            text: 'Manter Atendimento',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     },
                     {
                            module: 'registrar-manifestacao',
                            text: 'Registrar Manifestação',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     },
                    {
                            module: 'analisar-manifestacao',
                            text: 'Analisar Manifestação',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     },
                     {
                            module: 'analisar-disseminacao',
                            text: 'Analisar Disseminação',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     },
                     {
                            module: 'manter-demanda',
                            text: 'Manter Demanda',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     },
                     {
                            module: 'monitorar-atendimento',
                            text: 'Monitorar Atendimento',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     },
                     {
                            module: 'tramitar-demanda',
                            text: 'Tramitar Demanda',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     },
                     {
                            module: 'consultar-pesquisa-avancada',
                            text: 'Consultar Pesquisa Avançada',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     },
                     {
                            module: 'analisar-demanda',
                            text: 'Analisar Demanda',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     },
                     {
                            module: 'gerar-modelo-documento-oficial',
                            text: 'Gerar Modelo de Documento Oficial',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     },
                     ]
                },    			                    
                {
                    module: 'relatorios',
                    text: 'Relatórios',
                    view: 'sub-menu',
                    roles: ['BLOCK'],
                    children: [{
                            module: 'report1',
                            text: 'Relatório 1',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     },
                     {
                            module: 'report2',
                            text: 'Relatório 2',
                            view: 'tasks',
                            controller : '',  
                            roles: ['*'],
                     },
                     ]
                },
        ]; 
		
		var obterMenu = function(){
			return _menu;
		};
		
		var adicionarPerfis = function(perfis, scope){
			if(typeof perfis != 'undefined'
				&& perfis != null
				&& perfis.length > 1){

				var menuPerfis = {};
				menuPerfis.module = 'perfis';
				menuPerfis.text = 'Perfis';
				menuPerfis.view = 'sub-menu';
				
				var childrens = new Array();
				
				for (var int = 0; int < perfis.length; int++) {
					var perfil = perfis[int];
					
					var child = {};
					child.module = 'perfil';
					child.text = perfil.nome;
                    child.view = 'tasks';
                    child.controller = 'loginController';
                    child.state = {};
                    child.state.name = 'perfil.alterarPerfil';
                    child.state.url = 'selecionarPerfil/' + perfil.id;
                    
                    childrens.push(child);
				}
				
				menuPerfis.children = childrens;
				console.log("GGGGGGGGGGGGGGG");
				var novoMenu = obterMenu();
				novoMenu.push(menuPerfis);
//				scope.menu = novoMenu;
//				scope.$apply();
				//console.log('NOVO MENU', novoMenu);
				//scope.alterarMenu(novoMenu);
			}
		};
		
		return {
			obterMenu : obterMenu,
			adicionarPerfis : adicionarPerfis 
		};
});