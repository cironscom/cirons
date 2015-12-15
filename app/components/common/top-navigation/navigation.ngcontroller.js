(function () {
    "use strict";

    angular.module('CIRONS-MAIN-APP')
        .controller('navigationController', function ($scope, $rootScope, $auth, $state) {


            $scope.iconMenu = [

                {
                    icon: 'fa fa-bullhorn',
                    state: ''
                },
                {
                    icon: 'fa fa-bell',
                    state: ''
                },
                {
                    icon: 'fa fa-exclamation-triangle',
                    state: ''
                }


            ];

            $scope.logout = function() {
                $auth.logout();
            };

        });

})();
