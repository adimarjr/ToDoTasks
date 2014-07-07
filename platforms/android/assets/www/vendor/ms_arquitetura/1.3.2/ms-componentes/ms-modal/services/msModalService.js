define([
        'componentes/ms-modal/msModal'
        ], 
		function(msModal) {
		
		'use strict';
		
		msModal.service('msModalService', ['$modal', '$http', '$compile', function($modal, $http, $compile) {
	    
			'use strict';
			
			
	    	this.config = {
		        backdrop: true,
		        keyboard: true,
		        modalFade: true,
		        template: '<div class="modal-content">' + 
		            		'<div class="modal-header">' + 
		            			'<button type="button" class="close" ng-click="$close()" data-dismiss="modal" aria-hidden="true">&times;</button>' +
		            			'<h4 class="modal-title">{{ data.title }}</h4>' +
		            		'</div>' +
                                        '<ms-alert></ms-alert>' +
		            		'<div class="modal-body" ms-compile="data.content"></div>' +
		            		'<div class="modal-footer">' +
//                                        '<button type="button" class="btn btn-danger" ng-click="$close()" data-dismiss="modal" >Fechar</button>' +
                                        '<button type="button" class="{{ button.style }}" ng-click="button.ngClick()" ng-repeat="button in data.buttons">{{ button.name }}</button>' +
		            		'</div>' +
						'</div>'
						
		        //,templateUrl: requirejs.s.contexts._.config.paths.componentes + '/ms-modal/views/simple.html'
	    	};
	    	
	    	this.options = {
			    title: 'Modal title',
			    content: '',
			    buttons: {
	    		}
	    	};
	    	
	    	this.setOptions = function(options) {
	    		this.options = options;
	    		return this;
	    	};
	    	
	    	this.setConfig = function(config) {
	    		angular.extend(this.config, config);
	    		return this;
	    	};
                
                this.modalInstance = '';
                
	        this.init = function(config, options) {

	        	var modalOptions = this.options;
                        var $this = this;
                        //Se o conteudo for object, executo o HTTP.
	        	if(typeof(this.options.content) == "object") {
	        		$http({method: $this.options.content.method, url: $this.options.content.url }).
	        		  success(function(data, status, headers, config) {
	        			  modalOptions.content.success(data, status, headers, config);
	        			  modalOptions.content = data;
                                          $this.setOptions(modalOptions);
	        		  }).
	        		  error(function(data, status, headers, config) {
	        			  modalOptions.content.error(data, status, headers, config);
                                          $this.setOptions(modalOptions);
	        		  });
	        	}
                        else {
                            //Se o conteudo vem de um template na página. Caso contrário, é conteúdo textual e será exibido diretamente.
                            if($this.options.content.match(/^#/g)) {
                                var element = angular.element($this.options.content);
                                if(angular.isElement(element)) {
                                    var scope = element.scope();
                                    modalOptions.content = $compile(element.html())(scope);
                                    this.setOptions(modalOptions);
                                }
                            }
                        }
                        
	        	if (!$this.config.controller) {
	        		$this.config.controller = function ($scope, $modalInstance) {
                                $scope.data = $this.options;
                            };
                        }
                       
	        	return this.modalInstance = $modal.open(this.config);
	        };
                
                this.open = function() {
                    this.init().result;
                }
                
                this.close = function() {
                    this.modalInstance.close();
                }
	        
	    }]);
	    
		return msModal;
		
});