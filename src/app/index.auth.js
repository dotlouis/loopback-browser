(function() {
  'use strict';

  angular
    .module('loopbackBrowser')
    .config([
      '$authProvider',
      '$httpProvider',
      'APP_CONFIG',
      function auth($authProvider, $httpProvider, APP_CONFIG){
        var commonConfig = {
            // OAuth popup should appear with no location bar/toolbar on mobile
            popupOptions: {
                location: 'no',
                toolbar: 'no'
            }
        };

        $authProvider.baseUrl = APP_CONFIG.API_ENDPOINT;
        // important ! otherwise the auth token does not get recognized
        // leading to Unauthorized server response.
        $authProvider.authHeader = 'Satellizer';

        $authProvider.facebook(angular.extend(commonConfig,{
            url: '/api/Seeders/facebook',
            clientId: APP_CONFIG.FB_APP_ID,
            scope: ['public_profile','email','user_friends']
        }));

        // Handling errors
        // http://docs.strongloop.com/display/public/LB/AngularJS+JavaScript+SDK#AngularJSJavaScriptSDK-Handling401Unauthorized
        $httpProvider.interceptors.push(function($q) {
            return {
                responseError: function(rejection) {
                    // Server down or does not answer
                    // Does something to report and queue tasks that can't be executed
                    // due to non 20X status
                    if(rejection.status === 0){
                        return $q.reject({message:"Can't reach the server", name:"Error", status: 0, statusCode: 0});
                    }
                    return $q.reject(rejection.data.error);
                }
            };
        });
      }    
    ]);

})();
