(function() {
  'use strict';

  angular
    .module('loopbackBrowser', [
      'ngAnimate',
      'ngTouch',
      'ngSanitize',
      'ngResource',
      'ui.router',
      'ngMaterial',
      'md.data.table',
      'satellizer',
      'lbServices'
    ])
    .run(runBlock);

    /** @ngInject */
    function runBlock($log) {
      $log.debug('runBlock end');
    }

})();
