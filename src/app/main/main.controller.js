(function() {
  'use strict';

  angular
    .module('loopbackBrowser')
    .controller('MainController', [
      '$scope',
      'AuthService',
      'Seeder',
      function($scope, Auth, Seeder){

        $scope.loginWith = function(provider){
          Auth.loginWith(provider)
          .then(function(){
            console.log("logged in!");
          });
        };

        $scope.logout = function(){
          Auth.logout();
        };

        $scope.isLoggedIn = function(){
          return Seeder.isAuthenticated();
        };
    }]);
})();
