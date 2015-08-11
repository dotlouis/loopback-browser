(function() {
  'use strict';

  angular.module('loopbackBrowser')
  .factory('ExplorerService',[
    '$http',
    'APP_CONFIG',
    function($http, APP_CONFIG){
      return {
        getApis: function(){
          return $http.get(APP_CONFIG.API_ENDPOINT + '/explorer/resources')
          .then(function(res){
            var apis = res.data.apis;
            for(var i in apis){
              apis[i].name = apis[i].path.substring(1, apis[i].path.length-1);
            }
            return res;
          });
        }
      };
    }]);
})();
