(function() {
  'use strict';

  angular
    .module('loopbackBrowser')
    .controller('ModelCtrl', [
      '$scope',
      '$stateParams',
      'ServiceInjectorService',
      function($scope, $stateParams, ServiceInjector){
        $scope.model = $scope.models[$stateParams.name];
        $scope.newRow = {};

        // TODO
        // some models like AccesToken are not in lbservice, thus will fail to
        // use the angular sdk functions. Maybe do something with REST API
        // discovered as operations in ExplorerService
        var Model = ServiceInjector.getLbService($scope.model.id);

        $scope.create = function(){
          Model.create($scope.newRow)
          .$promise.then(function(plop){console.log(plop)})
          .catch(function(err){console.log(err);});
        };

        $scope.fetch = function(){
          Model.find()
          .$promise.then(function(rows){
            $scope.rows = rows;
          });
        };

        $scope.fetch();

      }]);
})();
