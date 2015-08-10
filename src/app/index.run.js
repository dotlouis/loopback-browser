(function() {
  'use strict';

  angular
    .module('loopbackBrowser')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
