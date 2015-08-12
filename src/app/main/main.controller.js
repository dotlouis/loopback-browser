(function() {
  'use strict';

  angular
    .module('loopbackBrowser')
    .controller('MainCtrl', [
      '$scope',
      '$mdSidenav',
      'AuthService',
      'Seeder',
      'ExplorerService',
      function($scope, $mdSidenav, Auth, Seeder, Explorer){

        Explorer.getModels()
        .then(function(models){
          $scope.models = models;
        });

        $scope.loginWith = function(provider){
          Auth.loginWith(provider)
          .then(function(){
            console.log("logged in!");
          });
        };

        $scope.logout = function(){
          Auth.logout();
        };

        $scope.toggleSidenav = function(sidenav){
          $mdSidenav(sidenav)
          .toggle()
          .then(function(){
          });
        }

        $scope.isLoggedIn = function(){
          return Seeder.isAuthenticated();
        };
    }]);
})();
