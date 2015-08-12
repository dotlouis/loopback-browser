(function() {
  'use strict';

  angular.module('loopbackBrowser')
  .factory('ExplorerService',[
    '$http',
    'APP_CONFIG',
    function($http, APP_CONFIG){
      return {
        getResources: function(){
          return $http.get(APP_CONFIG.API_ENDPOINT + '/explorer/resources')
          .then(function(res){
            return res;
          });
        },
        getModels: function(){
          return this.getResources()
          .then(function(res){
            return $http.get(APP_CONFIG.API_ENDPOINT + '/explorer/resources' + res.data.apis[0].path)
            .then(function(res2){
              return angular.forEach(res2.data.models, function(model){
                var props = Object.getOwnPropertyNames(model.properties);
                var required = _.intersection(props, model.required);
                angular.forEach(required, function(r){
                  model.properties[r].required = true;
                });
              });
            });
          });
        },
        getModelOperations: function(modelPath){
          return $http.get(APP_CONFIG.API_ENDPOINT + '/explorer/resources'+modelPath)
          .then(function(res){
            var operations = res.data.apis;
            return operations;
          });
        }
      };
    }]);
})();
