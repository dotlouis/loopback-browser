(function() {
  'use strict';

  angular
    .module('loopbackBrowser')
    .constant('APP_CONFIG', {
      VERSION: '1',
      FB_APP_ID: '1438646329798081',
      API_ENDPOINT: 'https://studloop-studant.rhcloud.com'
    })
    .config([
      '$logProvider',
      'LoopBackResourceProvider',
      'APP_CONFIG',
      function config($logProvider, LoopBackResourceProvider, APP_CONFIG) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Change the URL where to access the LoopBack REST API server
        LoopBackResourceProvider.setUrlBase(APP_CONFIG.API_ENDPOINT+'/api');
    }]);

})();
