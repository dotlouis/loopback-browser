(function() {
  'use strict';

  angular
    .module('loopbackBrowser')
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider){

        $stateProvider
        .state('app', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller:'MainCtrl'
        })
        .state('app.model', {
            url: '/models/:name',
            views: {
                'model': {
                    templateUrl: 'app/components/model/model.html',
                    controller: 'ModelCtrl'
                }
            }
        });

        $urlRouterProvider.otherwise('/');
      }]);

})();
