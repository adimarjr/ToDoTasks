
if(!appConfig) {
	console.log('Não foi definido um configurador da aplicação.');
	//return;
}
var sufixo = '';
var bust = (new Date()).getTime();
if(!appConfig.ambiente.nome) {
	appConfig.ambiente.nome = 'dev';
	
	if(appConfig.ambiente.nome == 'prod') {
		sufixo = '.min';
		bust = appConfig.versao_app;
	}
}

requirejs.config({
	urlArgs: "bust=" + bust,
    paths: {
        'jQuery': [
                   appConfig.servidor + '/vendor/jquery/2.0.3/jquery.min'
                   //'/vendor/jquery/2.0.3/jquery' + sufixo
                   ],
        'angular': [
                    appConfig.servidor + '/vendor/angularjs/1.2.8/angular.min'
                    //'./vendor/angularjs/1.2.8/angular' + sufixo
                    ],
        'ckeditor': [
                    appConfig.servidor + '/vendor/ckeditor/4.3/ckeditor'
                    //'./vendor/angularjs/1.2.8/angular' + sufixo
                    ],
        'angularUiBootstrap': [
                               appConfig.servidor + '/vendor/angular-ui-bootstrap/0.9.0/ui-bootstrap-tpls-0.9.0' + sufixo 
                               //'./vendor/angular-ui-bootstrap/0.9.0/ui-bootstrap-tpls-0.9.0' + sufixo
                               ],
        'angularSanitize': [
                            appConfig.servidor + '/vendor/angularjs/1.2.8/angular-sanitize' + sufixo 
                            //'./vendor/angularjs/1.2.8/angular-sanitize' + sufixo
                            ],
        'angularTranslate': [
                            appConfig.servidor + '/vendor/angular-translate/2.0.0/angular-translate' + sufixo 
                            //'./vendor/angularjs/1.2.8/angular-sanitize' + sufixo
                            ],
        'angularTranslatePartialLoader': [
                            appConfig.servidor + '/vendor/angular-translate-loader-partial/0.1.6/angular-translate-loader-partial' + sufixo 
                            //'./vendor/angularjs/1.2.8/angular-sanitize' + sufixo
                            ],
        'angularValidator': [
                            appConfig.servidor + '/vendor/angular-validator/0.1.4/angular-validator' + sufixo 
                            //'./vendor/angularjs/1.2.8/angular-sanitize' + sufixo
                            ],                            
        'angularNgCookies': [
                            appConfig.servidor + '/vendor/angularjs/1.2.8/angular-cookies'
                            //'./vendor/angularjs/1.2.8/angular-sanitize' + sufixo
                            ],
        'angularResource': [
                            appConfig.servidor + '/vendor/angularjs/1.2.8/angular-resource' + sufixo 
                            //'./vendor/angularjs/1.2.8/angular-sanitize' + sufixo
                            ],
        'angularUiRouter':[
                           appConfig.servidor + '/vendor/angular-ui-router/0.2.7/angular-ui-router' + sufixo 
                           //'./vendor/angular-ui-router/0.2.7/angular-ui-router' + sufixo
                           ],
        'restangular':[
                           appConfig.servidor + '/vendor/restangular/1.3.1/restangular' + sufixo 
                           //'./vendor/angular-ui-router/0.2.7/angular-ui-router' + sufixo
                           ],
        'angularBlocks':[
                           appConfig.servidor + '/vendor/angular-blocks/0.1.8/angular-blocks.min' 
                           //'./vendor/angular-ui-router/0.2.7/angular-ui-router' + sufixo
                           ],
        'angularNgTable':[
                          appConfig.servidor + '/vendor/ng-table/0.3.1/ng-table' + sufixo 
                          //'./vendor/angular-ui-router/0.2.7/angular-ui-router' + sufixo
                          ],
        'angularFileUpload':[
                          appConfig.servidor + '/vendor/angular-file-upload/1.2.8/angular-file-upload' + sufixo 
                          //'./vendor/angular-ui-router/0.2.7/angular-ui-router' + sufixo
                          ],
        'angularUiUtils':[
                          appConfig.servidor + '/vendor/angular-ui-utils/0.1.1/ui-utils' + sufixo 
                          //'./vendor/angular-ui-router/0.2.7/angular-ui-router' + sufixo
                          ],
        'angularTimer':[
                           appConfig.servidor + '/vendor/angular-timer/1.0.11/angular-timer' + sufixo 
                           //'./vendor/angular-ui-router/0.2.7/angular-ui-router' + sufixo
                           ],
        'ngCkeditor':[
                           appConfig.servidor + '/vendor/ng-ckeditor/1.0.0/ng-ckeditor' + sufixo 
                           //'./vendor/angular-ui-router/0.2.7/angular-ui-router' + sufixo
                           ],
        //'angularNgRoute' : 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular-route',
        'moment': [
                   appConfig.servidor + '/vendor/momentjs/2.5.0/moment.min' 
                   //'./vendor/momentjs/2.5.0/moment' + sufixo
                   ],
       'jQueryRvFontsize': [
                    appConfig.servidor + '/vendor/jquery-rv-fontsize/2.0.3/rv-fontsize.min' 
                    //'./vendor/momentjs/2.5.0/moment' + sufixo
                    ],
        'jQueryNoty': [
                             appConfig.servidor + '/vendor/jquery-noty/2.2.1/jquery.noty.packaged' + sufixo 
                             //'./vendor/momentjs/2.5.0/moment' + sufixo
                             ],
        'jQueryNotyLayoutsTopCenter': [
                        appConfig.servidor + '/vendor/jquery-noty/2.2.1/layouts/topCenter' 
                        //'./vendor/momentjs/2.5.0/moment' + sufixo
                        ],
        'jQueryNotyLayouts': [
                                     appConfig.servidor + '/vendor/jquery-noty/2.2.1/layouts' 
                                     //'./vendor/momentjs/2.5.0/moment' + sufixo
                                     ],
        'jQueryNotyThemesDefault': [
	                          appConfig.servidor + '/vendor/jquery-noty/2.2.1/themes/default' 
	                          //'./vendor/momentjs/2.5.0/moment' + sufixo
	                          ],
        'domReady' : [
                      appConfig.servidor + '/vendor/requirejs-domready/2.0.1/domReady'
                      //'./vendor/requirejs-domready/2.0.1/domReady'
                      ],
        'msControllers' : [
                       appConfig.servidor + '/vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/controladores'
                     //  './vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/bootstrap'
                       ],
        'msDirectives' : [
                       appConfig.servidor + '/vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/diretivas'
                     //  './vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/bootstrap'
                       ],
        'bootstrap' : [
                       appConfig.servidor + '/vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/bootstrap'
                     //  './vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/bootstrap'
                       ],
        'msAppJs' : [
                     appConfig.servidor + '/vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/app'
                    // './vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/app'
                     ],
        'componentes' : [
                        appConfig.servidor + '/vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/ms-componentes'
                      //  './vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/ms-componentes'
                        ],
        'msFilters' : [
                        appConfig.servidor + '/vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/filtros'
                      //  './vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/ms-componentes'
                        ],
        'utils' : [
                         appConfig.servidor + '/vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/utils'
                       //  './vendor/ms_arquitetura/' + appConfig.versao_arquitetura + '/ms-componentes'
                         ],
        'underscore':[
                          appConfig.servidor + '/vendor/underscorejs/1.6.0/underscore' + sufixo 
                          //'./vendor/angular-ui-router/0.2.7/angular-ui-router' + sufixo
                          ],
        'underscore.string':[
                          appConfig.servidor + '/vendor/underscore.string/2.3.2/underscore.string' + sufixo 
                          //'./vendor/angular-ui-router/0.2.7/angular-ui-router' + sufixo
                          ]
    },
	shim: {
		'angular': {
                        deps: ['jQuery'],
			exports: 'angular'
		},
		'ckeditor': {
			exports: 'ckeditor'
		},
		'ngCkeditor': {
                        deps: ['angular'],
			exports: 'ngCkeditor'
		},
		'angularUiBootstrap': {
			deps: ['angular'],
			exports: 'angularUiBootstrap'
		},
		'angularTranslate': {
			deps: ['angular'],
			exports: 'angularTranslate'
		},
		'angularValidator': {
			deps: ['angular'],
			exports: 'angularValidator'
		},
		'underscore': {
			exports: 'underscore'
		},
		'underscore.string': {
			exports: 'underscore.string'
		},
		'angularTranslatePartialLoader': {
			deps: ['angularTranslate'],
			exports: 'angularTranslatePartialLoader'
		},
		'angularSanitize': {
			deps: ['angular'],
			exports: 'angularSanitize'
		},
		'angularNgCookies': {
			deps: ['angular'],
			exports: 'angularNgCookies'
		},
		'angularResource': {
			deps: ['angular'],
			exports: 'angularResource'
		},
		'angularUiRouter': {
			deps: ['angular'],
			exports: 'angularUiRouter'
		},
		'angularNgGrid': {
			deps: ['angular'],
			exports: 'angularNgGrid'
		},
		'angularNgTable': {
			deps: ['angular'],
			exports: 'angularNgTable'
		},
		'angularTimer': {
			deps: ['angular'],
			exports: 'angularTimer'
		},
		'angularBlocks': {
			deps: ['angular'],
			exports: 'angularBlocks'
		},
		'angularFileUpload': {
			deps: ['angular'],
			exports: 'angularFileUpload'
		},
		'restangular': {
			deps: ['angular'],
			exports: 'restangular'
		},
		'angularUiUtils': {
			deps: ['angular'],
			exports: 'angularUiUtils'
		},
		'jQueryRvFontsize': {
			deps: ['jQuery'],
			exports: 'jQueryRvFontsize'
		},
		'jQueryNoty': {
			deps: ['jQuery'],
			exports: 'jQueryNoty'
		},
		'jQueryNotyLayoutsTopCenter': {
			deps: ['jQueryNoty'],
			exports: 'jQueryNotyLayoutsTopCenter'
		},
		'jQueryNotyThemesDefault': {
			deps: ['jQueryNoty'],
			exports: 'jQueryNotyThemesDefault'
		},
		'moment': {
			exports: 'moment'
		},
		'utils/contraste': {
			deps: ['jQuery'],
			exports: 'utils/contraste'
		}
                ,'msAppJs' : {
                    exports: 'msAppJs'
                },
                'bootstrap' : {
                    exports: "bootstrap",
                    deps: ['msAppJs']
                }
	}
    ,priority: ["angular"]
    ,deps: ['bootstrap']
});

