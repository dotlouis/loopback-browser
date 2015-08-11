(function() {
  'use strict';

  angular
    .module('loopbackBrowser')
    .controller('ModelTreeCtrl', [
      '$scope',
      'ExplorerService',
      function($scope, Explorer){

        Explorer.getApis()
        .then(function(res){
          $scope.explorer = res.data;
          $scope.models = res.data.apis;
        });
      }]);
})();
