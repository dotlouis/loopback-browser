(function() {
  'use strict';

  angular
    .module('loopbackBrowser')
    .constant('APP_CONFIG', {
      VERSION: '1',
      FB_APP_ID: '1438646329798081',
      API_ENDPOINT: 'https://studloop-studant.rhcloud.com'
    })
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
