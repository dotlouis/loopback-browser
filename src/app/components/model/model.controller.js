(function() {
  'use strict';

  angular
    .module('loopbackBrowser')
    .controller('ModelCtrl', [
      '$scope',
      '$stateParams',
      'ServiceInjectorService',
      function($scope, $stateParams, ServiceInjector){
        $scope.model = $stateParams.name;
        $scope.newRow = {};

        var Model = ServiceInjector.getLbService($scope.model);

        $scope.create = function(){
          Model.create($scope.newRow)
          .$promise.then(function(plop){console.log(plop)})
          .catch(function(err){console.log(err);});
        };

      }]);
})();
