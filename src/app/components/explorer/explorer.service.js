(function() {
  'use strict';

  angular.module('loopbackBrowser')
  .factory('ExplorerService',[
    '$http',
    'APP_CONFIG',
    function($http, APP_CONFIG){
      return {
        getApis: function(){
          return $http.get(APP_CONFIG.API_ENDPOINT + '/explorer/resources');
        }
      };
    }]);
})();
