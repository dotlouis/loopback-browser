(function() {
  'use strict';

  angular.module('loopbackBrowser')
  .factory('ServiceInjectorService',[
    '$injector',
    '$resource',
    function($injector, $resource){
      return {
        getLbService: function(serviceName){
          // dynamically inject the loopback service based on model name
          if($injector.has(serviceName)){
            var service = $injector.get(serviceName);
            return service;
          }
          else{
            throw new Error("the service named "+serviceName+" does not exist");
            return undefined;
          }
        }
      };
    }]);
})();
